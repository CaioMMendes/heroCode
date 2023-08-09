import { NextFunction, Request, Response } from "express";
import EventUseCase from "../useCase/EventUseCase";

export default class EventController {
  //   private eventUseCase: EventUseCase;

  constructor(private eventUseCase: EventUseCase) {
    // this.eventUseCase = eventUseCase;
  }

  async create(request: Request, response: Response, next: NextFunction) {
    const eventData = request.body; //O problema de passar assim é que se o cara mandar coisa a mais ele cadastra tmb
    try {
      console.log(eventData);
      await this.eventUseCase.create(eventData);
      return response
        .status(201)
        .json({ message: "Evento criado com sucesso." });
    } catch (error) {
      next(error);
    }
  }
}
