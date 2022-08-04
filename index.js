const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

let counter = 0;
let counters = {};

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
  counter = counter + 1;

  res.status(201).json({
    counter: counter,
  });
});

app.post("/counter/decrement", (req, res) => {
  counter = counter - 1;

  res.status(201).json({
    counter: counter,
  });
});

app.post("/counter/double", (req, res) => {
  counter = counter * 2;

  res.status(201).json({
    counter: counter,
  });
});

// set counter to a specific value via a query parameter
app.put("/counter", (req, res) => {
  counter = Number(req.query.value);

  res.status(201).json({
    counter: counter,
  });
});

app.get("/counter/:name", (req, res) => {
  const name = req.params.name;
  if (!counters[name]) {
    counters[name] = 0;
  }
  const value = counters[name];

  res.json({
    counter: value,
  });
});

app.post("/counter/:name/increment", (req, res) => {
  const name = req.params.name;
  if (!counters[name]) {
    counters[name] = 0;
  }
  //   const newValue = counters[name] + 1;
  //   counters[name] = newValue;

  counters[name]++;

  res.json({
    counter: counters[name],
  });
});

const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
