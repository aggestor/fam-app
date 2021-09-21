import express, { Application } from "express"
import hpp from "hpp";
import cors from "cors"
const main = async () :Promise<Application> => {
  const app : Application = express();

  const PORT :number | string = process.env.PORT || 38493;

  app.listen(PORT, () => console.log("Server ready on http://localhost:38493"));

  return app
};
main().then(app => {
  app.use(hpp())
  app.use(cors())
})
