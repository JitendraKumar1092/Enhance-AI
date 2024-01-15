import express from "express";
import * as dotenv from "dotenv";
import Replicate from "replicate";
dotenv.config();
const router = express.Router();
const replicate = new Replicate({
  auth: process.env.CODEFORMER_API_KEY,
});
console.log(process.env.CODEFORMER_API_KEY); // Undefined
const model =
  "sczhou/codeformer:7de2ea26c616d5bf2245ad0d5e24f0ff9a6204578a5c876db53142edd9d2cd56";
router.route("/").get((req, res) => {
  res.send(
    "Hello from Enhance. lets recover your old Memories. make a post request to /api/v1/enhance "
  );
});
router.route("/").post(async (req, res) => {
  try {
    const input = req.body.image;
    console.log(input);
    const output = await replicate.run(
      "sczhou/codeformer:7de2ea26c616d5bf2245ad0d5e24f0ff9a6204578a5c876db53142edd9d2cd56",
      {
        input: {
          image: input,
        },
      }
    );
    console.log(output);

    res.status(200).json({ photo: output });
  } catch (error) {
    console.log(error);
  }
});
export default router;
