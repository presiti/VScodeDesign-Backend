const express = require("express");
const cors = require("cors");
const indexRouter = require("./router/index");

const app = express();
const port = 4000;

app.use(cors()); // 어떤 도에민이 오든 허용해줌
app.use(express.static("public"));

app.use("/", indexRouter);

// app.get("/", (req, res) => {
//   res.send("11111");
// });

app.listen(port, () => {
  console.log(`켜짐 포트 :  ${port}`);
});
