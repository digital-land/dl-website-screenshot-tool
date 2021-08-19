const configObj = require('./screenshot.config.js');
const puppeteer = require('puppeteer');
const cloudinary = require('cloudinary');

// instanciate coudinary with correct API env variables
cloudinary.config(configObj.cloudinary.api);

/**
 * 
 * @param {String} url the URL of the site to be screenshotted
 * @param {Strong} site_name the name of the site being screenshotted
 * @returns 
 */
async function doScreenShot(url, site_name) {

  // set-up storing the image with a filename in the right place
  const d = new Date();
  const current_date = `${d.getFullYear()}_${d.getMonth()+1}_${d.getDate()}`;
  const current_time = `${current_date}_${d.getHours()}_${d.getMinutes()}`
  const cloudinary_options = {
    public_id: `${configObj.cloudinary.folder_path}/${current_date}/${current_time}_${site_name}`
  };
  
  // use puppeteer to open the page and take a screenshot
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    headless: true,
    args: ['--no-sandbox','--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport(configObj.screenshot.viewport);
  await page.goto(url, {waitUntil: (configObj.screenshot.waitUntil ? configObj.screenshot.waitUntil : 'load')});

  // look in the config for a function to execute on the page and run it
  if (configObj.screenshot.jsToExecuteOnPage) {
    await page.evaluate(configObj.screenshot.jsToExecuteOnPage);
  }

  // take the screenshot 
  let screenshotReturned = await page.screenshot(configObj.screenshot.options)
  .then((result) => {
    console.log(`${site_name} got some results.`);
    return result;
  }).catch(e => {
    console.error(`Error in snapshotting [${site_name}]`, e);
    return false;
  });

  // if we have a screenshot then shove it into cloudinary
  if (screenshotReturned){
    return useCloudinary(screenshotReturned, cloudinary_options);
  } else {
    return null;
  }
  await browser.close();
}

/**
 * 
 * @param {Object} screenshotReturned the screenshot
 * @param {Object} cloudinary_options Object of config attributes for cloudinary
 * @returns 
 */
function useCloudinary(screenshotReturned, cloudinary_options){
  return new Promise(function(res, rej){
    cloudinary.v2.uploader.upload_stream(cloudinary_options,
      function (error, cloudinary_result) {
        if (error){
          console.error('Upload to cloudinary failed: ', error);
          rej(error);
        }
        if (configObj.cloudinary.tag) {
          console.log(`adding tag: '${configObj.cloudinary.tag}' to this image within Cloudinary`);
          cloudinary.v2.uploader.add_tag(configObj.cloudinary.tag, [cloudinary_result.public_id], function(error, result) { 
            return;
          });
        }
        console.log(cloudinary_result);
        res(cloudinary_result);
      }
    ).end(screenshotReturned);
  });
}

/**
 * 
 * @param {Array} urls Array of objects for sites to be screenshotted
 */
async function takeScreenshots(urls) {
  let cloundiary_promises = [];
  
  for (let i = 0; i < urls.length; i++) {
    try {
        let cloudinary_screenshot = await doScreenShot(urls[i]['url'], urls[i]['name']);
        if (cloudinary_screenshot){
          cloundiary_promises.push(cloudinary_screenshot);
        }
    } catch(e) {
        console.error(`[${urls[i]['name'] || 'Unknown site'}] Error in snapshotting site`, e);
    }
  }

  Promise.all(cloundiary_promises).then(function(val) {
    process.exit();
  });
  
}

takeScreenshots(configObj.urls);
