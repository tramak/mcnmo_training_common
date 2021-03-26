import { CustomError } from './custom-error';
import { Codes } from '../constants/codes';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;
  textCode = Codes.AUTH;

  constructor() {
    super('Not Authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not authorized' }];
  }
}
