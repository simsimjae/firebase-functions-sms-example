import axios from "axios";
import { KEY } from "../constants/key";
import { isEmpty } from "lodash";

export class SmsService {
  async send(from: string, to: string, title: string, body: string) {
    if (isEmpty(from)) throw new Error(`발신자번호가 없습니다. from: ${from}, to: ${to}, body: ${body}`);
    if (isEmpty(to)) throw new Error(`수신자번호가 없습니다. from: ${from}, to: ${to}, body: ${body}`);
    const options = {
      sendNo: from,
      title: title,
      body: body,
      recipientList: [{ recipientNo: to }],
    };
    const appKey = KEY.SMS_APP_KEY;
    await axios.post(`https://api-sms.cloud.toast.com/sms/v2.4/appKeys/${appKey}/sender/mms`, options, { headers: { "Content-Type": "application/json;charset=UTF-8" } });
    console.log(`문자 전송 성공: from: ${from}, to: ${to}, body: ${body}`);
  }
}
