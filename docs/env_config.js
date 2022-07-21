const fs = require('fs')
const dotenv = require('dotenv')

module.exports = (environment) => {
  const nodeEnv = process.env.NODE_ENV;

  // only allow yarn start (dev) in dev mode
  if (nodeEnv === 'development' && environment !== 'development'){
    throw new Error(`Not allowed to use 'yarn start' (${nodeEnv}) on non dev build 
      (OBJECTIV_ENVIRONMENT=${process.env.OBJECTIV_ENVIRONMENT})`);
  }
    // read env config from .env file
  const filename = `.env.${environment}`;
  if  ( fs.existsSync(filename) ) {
    return dotenv.parse(fs.readFileSync(filename));
  } else {
    throw new Error(`Couldn't open config for ${environment} (${filename})`);
  }
}
