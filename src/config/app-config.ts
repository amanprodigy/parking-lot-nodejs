export default {
  port: process.env.PORT || 3000,
  appName: 'Parking Lot Simulator',
  appVersion: '0.0.1',
  env: process.env.ENV || 'development',
  logLevel: process.env.LOGLEVEL || 'debug',
};
