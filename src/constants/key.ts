import { getEnvironmentValue } from "./getEnvironment";

export const KEY = {
  SMS_APP_KEY: getEnvironmentValue("key.sms_app_key"),
  SMS_SECRET_KEY: getEnvironmentValue("key.sms_secret_key"),
};
