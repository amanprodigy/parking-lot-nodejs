import { Router } from 'express';
import {
  getUserValidator,
  addUserValidator,
} from '@app/server/validators/user-validator';
import {
  getUserController,
  getUsersController,
  addUserController,
} from '@app/server/controllers/user-controller';

export const apiHomeRouter = Router();

apiHomeRouter.get('/users', getUsersController);

apiHomeRouter.get('/users/:userId', getUserValidator, getUserController);

apiHomeRouter.post('/users', addUserValidator, addUserController);
