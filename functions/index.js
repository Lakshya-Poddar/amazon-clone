const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("Write the stripe key");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("HELLO WORLD");
});
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM!!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-5c209/us-central1/api
