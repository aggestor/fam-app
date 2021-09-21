import axios, { AxiosResponse } from "axios"
import headers from "../constants/headers";
import { _CompanyConfig } from "../constants/interfaces";
import { companyConfig } from "../constants/routes";

async function setCompanyConfig({
  name,
  address,
  mail,
  owner,
  phone,
}:_CompanyConfig): Promise<object> {
  try {
    const response: AxiosResponse = await axios.post(
      companyConfig.setNew,
      { name, address, mail, owner, phone },
      headers()
    );
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

/**
 * This function checks if the company is already configured so will
 *  ask for configuration or directly skip to the next step
 * @returns Just an extracted object from a axios response object
 */
async function checkCompanyConfig(): Promise<object> {
  try {
    const response: AxiosResponse = await axios.post(companyConfig.check, {},headers());
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

export {setCompanyConfig, checkCompanyConfig}