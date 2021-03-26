import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import { Codes } from '../constants/codes';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res
        .status(err.statusCode)
        .send({
          code: err.textCode,
          displayMessage: [err.serializeErrors()[0]],
          payload: err.serializeErrors(),
        });
  }

  res.status(400).send({
    code: Codes.SERVER_ERROR,
    displayMessage: [{
      message: 'Something went wrong'
    }],
  });
};
