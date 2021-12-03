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
  return dotenv.parse(fs.readFileSync(`.env.${environment}`));
}
