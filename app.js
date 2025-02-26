const express = require("express");
const app = express();

const port = 4040; //will be switched with .env

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http:://localhost:${port}`);
});
