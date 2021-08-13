# Screenshot to Cloudinary Tool
A NodeJS script to load urls, screenshot them and upload them to Cloudinary media hosting.

## Installation

### Requirements

- A [Cloudinary acount](https://cloudinary.com/)
- [NodeJS](https://nodejs.org/)
- [YarnPKG](https://yarnpkg.com/) (or NPM)

### Installaton steps

#### Clone repository: 

```
git clone git@github.com:digital-land/dl-website-screenshot-tool.git
```

#### Install Packages: 

```
yarn install
```

#### Create an ENV file

```
touch .env
```
#### Add Cloudinary API details to ENV file, for example:

```
CLOUD_NAME='[your-cloud-name]'
API_KEY='[your-api-key]'
API_SECRET='[your-api-secret]'
```

You can find those in your Cloudinary Console/Dashboard (at the top)

### Edit your config file

The config file [screenshot.config.js](screenshot.config.js) contains the settings for your screenshots.

### Add the URLs of sites to screenshot

[screenshot-urls.json](screenshot-urls.json) is a JSON file of the sites you want to screen shot. Each object in the array is a site name and corresponding url to be captured.

## Running screenshot tool

Once the above installation and set-up steps are complete. Go to your terminal in the root directory and run:

```
yarn run start
```

or

```
node --require dotenv/config screenshot.js
```

## Bonus materials

Cloudinary is a great service but it not always easy for people to access or use. 

So I have created a ['Zap' in the Zapier](https://zapier.com/shared/da2592b8b4214de353282f450e6701ba03e54cd2) a cloud based workflow and productivity service that will automatically copy the screenshots to your Google Drive. It will copy any new image added to your Cloudinary account that has been tagged with the ['tag' value in your config](https://github.com/digital-land/dl-website-screenshot-tool/blob/e1a69cd3ee30cd063748919e24d4633800fb438b/screenshot.config.js#L12) ('screenshot' is default).

