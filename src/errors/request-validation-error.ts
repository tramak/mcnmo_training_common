import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
import { Codes } from '../constants/codes';

export class RequestValidationError extends CustomError {
  statusCode = 400;
  textCode = Codes.VALIDATE_ERROR;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(err => {
      return {
        message: err.msg,
        field: err.param
      };
    });
  }
}
