module.exports = {
    cloudinary: {
        api: {
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        },
        folder_path: 'screenshots',
        tag: 'screenshot'
    },
    screenshot: {        
        viewport: {
            width: 1366,
            height: 768,
            deviceScaleFactor: 1,
        },
        options: {
            fullPage: true
        },
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
    urls:[
        {
            name: "Conservation-area",
            url: `https://digital-land.github.io/guidance/conservation-area/`
        },
        {
            name: "Data-principles",
            url: `https://digital-land.github.io/guidance/data-principles/`
        },
        {
            name: "Pipeline",
            url: `https://digital-land.github.io/guidance/pipeline/`
        },
        {
            name: "Local-authority-addresses",
            url: `https://digital-land.github.io/local-authority-addresses/`
        },
        {
            name: "Development-plans-data",
            url: `https://digital-land.github.io/guidance/development-plans-data/`
        },
        {
            name: "Publish-your-sites-data",
            url: `https://digital-land.github.io/guidance/publish-your-sites-data/`
        },
        {
            name: "Publish-your-local-plan-data",
            url: `https://digital-land.github.io/guidance/publish-your-local-plan-data/`
        },
        {
            name: "Publish-your-geographies-as-data",
            url: `https://digital-land.github.io/guidance/publish-your-geographies-as-data/`
        }
    ]
}