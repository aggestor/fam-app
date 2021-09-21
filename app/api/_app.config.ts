import axios, { AxiosResponse } from "axios";
import headers from "../constants/headers";
import { appConfig } from "../constants/routes";

axios.defaults.withCredentials = true;

/**
 * Takes platform and userAgent then send it to the REST so when someone else with different data is connected we'll send a alert mail.
 * Other data will be taken in the REST API such as ip address, location...
 * @param platform Operating system the user is using
 * @param userAgent Navigator name, version and all stuff related
 * @returns promise object extracted from axios response object
 */

async function setInitAppConfig(
  platform: string,
  userAgent: string
): Promise<object> {
  try {
    const response: AxiosResponse = await axios.post(appConfig.init, {
      platform,
      userAgent,
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}
/**
 * This function checks if the application is already configured so will
 *  ask for configuration or directly skip to the next step
 * @returns Just an extracted object from a axios response object
 */
async function checkInitAppConfig(): Promise<object> {
  try {
    const response: AxiosResponse = await axios.post(appConfig.check, {},headers());
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

export { setInitAppConfig, checkInitAppConfig };
