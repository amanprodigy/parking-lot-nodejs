import log4js from 'log4js';
import appConfig from '@app/config/app-config';

const label = `${appConfig.appName}-${appConfig.appVersion}`;

if (appConfig.env !== 'development') {
  log4js.configure({
    appenders: {
      out: { type: 'stdout', layout: { type: 'basic' } },
    },
    categories: {
      default: { appenders: ['out'], level: appConfig.logLevel },
    },
  });
}

const logger = log4js.getLogger(label);
logger.level = appConfig.logLevel;

export default logger;
