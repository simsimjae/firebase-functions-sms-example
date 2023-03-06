import { CustomError } from "../errors/customError";
import * as express from "express";

export const errorHandler = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  return res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
