import express from "express";

import enhanceRoutes from "./routes/enhanceRoutes.js";

import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// const corsOptions = {
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));

app.use(
  "/api/v1/enhance",
  (req, res, next) => {
    res.header(
      "Access-Control-Allow-Origin",
      "https://imaginary-ai.vercel.app"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  },
  enhanceRoutes
);

app.get("/", async (req, res) => {
  res.send("hello from Enhance-AI");
});

// const startServer = async () => {
//   try {
//     app.listen(3000, () => console.log("server has started on port 8080"));
//   } catch (err) {
//     console.log(err);
//   }
// };
// startServer();

export default app;
