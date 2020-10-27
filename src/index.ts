require('dotenv').config();
import 'module-alias/register';
import config from '@app/config/app-config';
import { app } from '@app/server/app';

const { port, appName } = config;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`${appName} listening at http://localhost:${port}`);
});
