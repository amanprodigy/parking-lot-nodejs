import { Request, Response, NextFunction } from 'express';

const unless = (path: string, middleware: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.url && req.url.indexOf(path) > -1) {
      return next();
    }
    return middleware(req, res, next);
  };
};

export default unless;
