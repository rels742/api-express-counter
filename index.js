const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

let counter = 0;

app.get("/counter", (req, res) => {
  //   console.log("we're working fine over here!");

  res.json({
    counter: counter,
  });
});

app.delete("/counter", (req, res) => {
  counter = 0;

  res.json({
    counter: counter,
  });
});

app.post("/counter/increment", (req, res) => {
  const incrementCounter = counter + 1;

  res.status(201).json({
    counter: incrementCounter,
  });
});

app.post("/counter/decrement", (req, res) => {
  const decrementCounter = counter - 1;

  res.status(201).json({
    counter: decrementCounter,
  });
});

const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
