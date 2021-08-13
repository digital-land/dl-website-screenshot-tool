const urls = require('./screenshot-urls.json');

module.exports = {
    // see: https://cloudinary.com/documentation/image_upload_api_reference
    cloudinary: {
        api: {
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        },
        folder_path: 'screenshots',
        tag: 'screenshot'
    },
    // Pupeteer docs see: https://devdocs.io/puppeteer/
    screenshot: {        
        viewport: {
            width: 1366,
            height: 768,
            deviceScaleFactor: 1,
        },
        options: {
            fullPage: true
        },
        // this function will execute on the page being screenshotted, edit this if you want
        // to do things like disable cookie banners, etc. Code it defensively to avoid an
        // error on the page being screenshotted by pupeteer. 
        jsToExecuteOnPage: function() {
            // check if there is a hide cookie button element
            var hideCookieButton = document.getElementsByClassName('cookie-banner__hide-button');
            // if acceptCookies function is available run it
            if (window.acceptCookies) {
                acceptCookies();
            }
            // if there is a cookie banner hide button then click it
            if (hideCookieButton.length > 0) {
                document.getElementsByClassName('cookie-banner__hide-button')[0].click();
            }
            return;
        }
    },
    urls: urls
}