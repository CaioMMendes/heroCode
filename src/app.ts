import express, { Application } from "express";
import { connection } from "./infra/database";
import dotenv from "dotenv";
class App {
  public app: Application;
  constructor() {
    dotenv.config();
    this.app = express();
    this.middlewaresInitialize();
    this.initializeRoutes();
    this.interceptionError();
    connection();
  }

  middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true })); // converte ' ' em %20
  }

  interceptionError() {
    // this.app.use()
  }

  initializeRoutes() {
    // this.app.use('/')
  }

  //se deixar public da pra pegar esse metodo em outros arquivos se deixar private não
  public listen() {
    const port = 3444;
    this.app.listen(port, () =>
      console.log(`🙂 Server runnin on port ${port}`)
    );
  }
}

export { App };
