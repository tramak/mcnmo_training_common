import { CustomError } from './custom-error';
import { Codes } from '../constants/codes';

export class NotFoundError extends CustomError {
  statusCode = 404;
  textCode = Codes.NOT_FOUND;

  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not Found' }];
  }
}
