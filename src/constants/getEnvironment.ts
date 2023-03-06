import * as functions from "firebase-functions";
import { get } from "lodash";
export const getEnvironmentValue = (key: string) => {
  // development
  if (process.env.FUNCTIONS_EMULATOR && process.env.FIRESTORE_EMULATOR_HOST) return get(process.env, key);
  // production
  return get(functions.config(), key);
};
