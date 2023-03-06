import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.join(__dirname, "../.env.dev") });
import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin/app";
import * as express from "express";
import * as bodyParser from "body-parser";
import { onApplicationCreated } from "./triggers/onApplicationCreated";
import { firestore } from "firebase-admin";
import "express-async-errors";

initializeApp(functions.config().firebase);

const app = express();
const main = express();
main.use("/api/v1", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

const db = firestore();
const userCollection = "users";

export const firebaseFunctions = functions.runWith({}).region("asia-northeast3");

export const webApi = firebaseFunctions.https.onRequest(main);
export const handleApplicationCreated = onApplicationCreated;
