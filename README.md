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

`screenshot-urls.json` is a JSON file of the sites you want to screen shot. Each object in the array is a site name and corresponding url to be captured.


