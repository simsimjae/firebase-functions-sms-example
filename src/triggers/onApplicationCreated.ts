import * as functions from "firebase-functions";
import { PRIVACY } from "../constants/privacy";
import { ApplicationModel } from "../models/ApplicationModel";
import { SmsService } from "../services/smsService";
import { plainToClass } from "class-transformer";

// 새로운 신청서가 접수되면
export const onApplicationCreated = functions
  .region("asia-northeast3")
  .firestore.document("applications/{id}")
  .onCreate(async (snapshot, context) => {
    const application = plainToClass(ApplicationModel, snapshot.data());
    const smsService = new SmsService();
    const senderPhone = PRIVACY.PHONE_NUMBER;
    const receiverPhone = PRIVACY.PHONE_NUMBER;
    const title = "새로운 신청서가 접수되었습니다.";
    smsService.send(senderPhone, receiverPhone, title, application.toString());
  });
