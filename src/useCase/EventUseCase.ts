import Event from "../entities/Event";
import EventRepository from "../repositories/EventRespository";

export default class EventUseCase {
  private eventRepository: EventRepository;
  constructor(eventRepository: EventRepository) {
    this.eventRepository = eventRepository;
  }

  async create(eventData: Event) {
    const result = await this.eventRepository.add(eventData);
    return result;
  }
}
