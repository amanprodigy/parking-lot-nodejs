import { Router, Request, Response } from 'express';
import appConfig from '@app/config/app-config';

export const apiHomeRouter = Router();

apiHomeRouter.get('/health-check', async (req: Request, res: Response) =>
  res.status(200).json({ ok: true })
);

apiHomeRouter.get('/', (req: Request, res: Response) =>
  res.status(200).json({ message: appConfig.appName })
);
