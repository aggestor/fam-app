import {_App} from "../constants/interfaces"
export const server = "http://localhost:38493"

 const appConfig :_App = {
     init: `${server}/app/init`,
     check:`${server}/app/check`
}
const companyConfig = {
  setNew: `${server}/company/set_new`,
  check: `${server}/company/check`,
};

export { appConfig, companyConfig }