const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT; // 환경 변수 PORT 사용
app.get("/", (req, res) => {
  res.send("Hello, Express!!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
