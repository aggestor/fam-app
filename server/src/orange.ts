import express from "express"
import hpp from "hpp";
import cors from "cors"
const main = async () => {
  const app = express();

  const PORT = process.env.PORT || 38493;

  app.listen(PORT, () => console.log("Server ready on http://localhost:38493"));

  return app
};
main().then(app => {
  app.use(hpp())
  app.use(cors())
})
