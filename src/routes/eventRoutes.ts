import { Router } from "express";
import EventRepositoryMongoose from "../repositories/EventRespositoryMongoose";
import EventController from "../controller/EventController";
import EventUseCase from "../useCase/EventUseCase";
import { upload } from "../infra/multer";

export class EventRoutes {
  public router: Router;
  private eventController: EventController;
  constructor() {
    this.router = Router();
    const eventRepository = new EventRepositoryMongoose();
    const eventUseCase = new EventUseCase(eventRepository);
    this.eventController = new EventController(eventUseCase);
    this.initRoutes();
  }
  initRoutes() {
    this.router.post(
      "/",
      upload.fields([
        {
          name: "banner",
          maxCount: 1,
        },
        {
          name: "flyers",
          maxCount: 3,
        },
      ]),
      this.eventController.create.bind(this.eventController)
    );
  }
}
