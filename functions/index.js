const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MA9XsLYEvi4KYwSCn9VwThw1kttzJPZBZWfSzCqU6rnTioTA9waGZexZLWbXunTpIBKPMpbQIJbHLuH03UfXq56007mBJyeLs"
);

// -API

// -App config

const app = express();

// -Midelwares

app.use(cors({ origin: true }));
app.use(express.json());

// -API routes

app.get("/", (request, response) => response.status(200).send("hello"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request recived", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-4f94e/us-central1/api
