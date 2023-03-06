import { CustomError } from "./customError";
import { ValidationError } from "express-validator";

export class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super("유효하지 않은 값을 전달했습니다.");
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
}
