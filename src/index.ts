import { execPath } from "process";

const express = require('express');
const morgan = require('morgan');


const app = express();
app.use(morgan('tiny'));
app.use(function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get("/", (req: any, res: any) => {
  res.send({ "foo": false });
})

app.listen(3000, () => {
  console.log(`App running on port`);
})