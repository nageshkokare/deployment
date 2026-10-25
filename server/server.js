import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

app.get("/", (req, res) => {
  return res.json({
    message: "hello boys",
  });
});

app.get("/nagesh", (req, res) => {
  return res.json({
    message: "hello friends I am NAGESH",
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
