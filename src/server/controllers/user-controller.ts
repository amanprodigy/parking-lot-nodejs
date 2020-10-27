import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { User } from '@app/models/user';
import logger from '@app/utils/logger';

export const getUserController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { userId } = req.params;
    const users = await User.findById(userId).exec();
    res.status(200).json(users);
  } catch (e) {
    logger.error('Could not find users; ', e);
    res.boom.badRequest(e);
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = User.find({});
    res.status(200).json(users);
  } catch (e) {
    logger.error('Could not find users; ', e);
    res.boom.badRequest(e);
  }
};

export const addUserController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const userForm = req.body;
    const userInstance = new User(userForm);
    await userInstance.save();
    const user = await User.findOne();
    logger.debug('Created new user');
    res.status(200).json({
      message: 'Ok',
      user: user,
    });
  } catch (e) {
    logger.error('Could not create user; ', e);
    res.boom.badRequest(e);
  }
};
