import express, { Application } from "express";
import { connection } from "./infra/database";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { EventRoutes } from "./routes/eventRoutes";
class App {
  public app: Application;
  private eventRoutes = new EventRoutes();
  constructor() {
    dotenv.config();
    this.app = express();
    this.middlewaresInitialize();
    this.initializeRoutes();
    this.interceptionError();
    connection();
  }

  private middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true })); // converte ' ' em %20
  }
  private interceptionError() {
    this.app.use(errorMiddleware);
  }

  private initializeRoutes() {
    this.app.use("/events", this.eventRoutes.router);
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
