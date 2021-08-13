// fried pages on the FastAPI app
const dynamicPagesURL = 'https://digital-land.info';
// baked pages on GitHubPages service
const staticPagesURL = 'https://digital-land.github.io';

module.exports = {
    cloudinary: {
        api: {
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        },
        folder_path: 'screenshots'
    },
    screenshot: {        
        viewport: {
            width: 1366,
            height: 768,
            deviceScaleFactor: 1,
        },
        options: {
            fullPage: true
        }
    },
    urls:[
        {
            name: "Conservation-area",
            url: `${staticPagesURL}/guidance/conservation-area/`
        },
        {
            name: "Data-principles",
            url: `${staticPagesURL}/guidance/data-principles/`
        },
        {
            name: "Pipeline",
            url: `${staticPagesURL}/guidance/pipeline/`
        },
        {
            name: "Local-authority-addresses",
            url: `${staticPagesURL}/local-authority-addresses/`
        },
        {
            name: "Development-plans-data",
            url: `${staticPagesURL}/guidance/development-plans-data/`
        },
        {
            name: "Publish-your-sites-data",
            url: `${staticPagesURL}/guidance/publish-your-sites-data/`
        },
        {
            name: "Publish-your-local-plan-data",
            url: `${staticPagesURL}/guidance/publish-your-local-plan-data/`
        },
        {
            name: "Publish-your-geographies-as-data",
            url: `${staticPagesURL}/guidance/publish-your-geographies-as-data/`
        }
    ]
}