import { param, body } from 'express-validator';

export const getUserValidator = [param('userId').not().isEmpty()];

export const addUserValidator = [
  body('phone').not().isEmpty(),
  body('email').not().isEmpty(),
  body('age').not().isEmpty(),
  body('name').not().isEmpty(),
];
