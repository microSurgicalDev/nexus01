import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";

// TODO: Initialize a MongoDB Service Client
const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  "mongodb-atlas"
);

// TODO: Instantiate a collection handle for new appointments
const appointments = mongoClient
  .db("NEXUS")
  .collection("appointments");

export { appointments };
