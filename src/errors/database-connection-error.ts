import { CustomError } from './custom-error';
import { Codes } from '../constants/codes';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  textCode = Codes.SERVER_ERROR;
  reason = 'Error connecting to database';

  constructor() {
    super('Error connecting to db');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
