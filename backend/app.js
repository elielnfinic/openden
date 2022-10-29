const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const newsletterRouter = require("./routes/newsletter");

dotenv.config();

const PORT = process.env.PORT || 4500;

const app = express();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser : true}).then(() => console.log("DB Connected"));

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());


app.use(newsletterRouter);

app.use(function(err,req,res,next){
  if(err.name === "UnauthorizedError"){
      res.status(401).send({error : "Unauthorized"});
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});