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
    counter: 0,
  });
});

const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
