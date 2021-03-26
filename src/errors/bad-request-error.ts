import { CustomError } from './custom-error';
import {Codes} from '../constants/codes';

export class BadRequestError extends CustomError {
  statusCode = 400;
  textCode = Codes.BAD_REQUEST;

  constructor(public message: string, textCode?: Codes) {
    super(message);

    if (textCode) {
      this.textCode = textCode;
    }

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
