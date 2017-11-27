const express = require("express");
const app = express();

const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan")
//const settings = require("./settings")

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost/issue", (err)=>{
  if(err) throw err;
  console.log("Connected to the database")
})
// mongoose.connect(settings.db, (err)=>{
//   if(err) throw err;
//   console.log("Connected to the database")
//})

//app.use(express.static(path.resolve(__dirname, "client", "build", "index.html")));
app.use("/issue", require("./routes/issueRoutes"))
app.use("/comment", require("./routes/commentRoutes"))

// app.listen(settings.port, ()=>{
//   console.log(`this server is runnning on port ${settings.port}`)
//})
app.listen(port, ()=>{
  console.log(`this server is runnning on port ${port}`)
})

//code below goes in routes:
//app.get("/", (req, res)=>{
// res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//})