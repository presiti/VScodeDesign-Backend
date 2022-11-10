const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("11111");
});

app.listen(port, () => {
  console.log(`켜짐 포트 :  ${port}`);
});
