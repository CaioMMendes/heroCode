import request from "supertest";
import { App } from "../app";
const app = new App().app;
const fs = require("fs");

describe("Event controller", () => {
  it("should create an event", async () => {
    const event = {
      title: "lioking park",
      price: [{ sector: "Pista", amount: "20" }],
      location: {
        latitude: "-19.8658619",
        longitude: "-43.9737064",
      },
      date: new Date(),
      description: "show do linkin park",
      banner: "string",
      coupons: [],
      city: "jesuania",
    };

    const response = await request(app)
      .post("/events")
      .field("title", event.title)
      .field("description", event.description)
      .field("city", event.city)
      .field("coupons", event.coupons)
      .field("location[latitude]", event.location.latitude)
      .field("location[longitude]", event.location.longitude)
      .field("price[sector]", event.price[0].sector)
      .field("price[amount]", event.price[0].amount)
      .attach(
        "banner",
        "C:/Users/caio-/Desktop/VsCode/Semana do heroi/Backend/src/assets/banner.png"
      );
    //   .attach("banner", `${__dirname}/assets/unknown (16).png`)
    //   .attach("flyers", `${__dirname}/assets/unknown (17).png`)
    //   .attach("flyers", `${__dirname}/assets/unknown (18).png`);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: "Evento criado com sucesso." });
  });
});
