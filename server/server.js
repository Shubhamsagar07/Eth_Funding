const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// Mongodb
async function dbConnect(url) {
  try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );
  } catch (e) {
    console.log("could not connect", e);
  }
}

dbConnect(
  "mongodb+srv://Raj1001:Raj1001@cluster0.py102hu.mongodb.net/Funding?retryWrites=true&w=majority"
);

const FundModel = mongoose.Schema({
  email: String,
  username: String,
  problem: String,
  description: String,
  walletAddress: String,
});

const UserModel = mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const Eth_Funding = mongoose.model('Eth_Funding', FundModel);
const User = mongoose.model('users', UserModel);

app.post("/addFunding", (req, res) => {
  console.log(req.body)
  const fund = new Eth_Funding(req.body);
  fund
    .save()
    .then((todo) => {
      res.status(200).json({ message: "User Added successfully" });
    })
    .catch((err) => {
      res.status(400).send("Failed To Add Data");
    });
});

app.post("/register", (req, res) => {
  console.log(req.body)
  const user = new User(req.body);
  user
    .save()
    .then((todo) => {
      res.status(200).json({ todo: "Data Added successfully" });
    })
    .catch((err) => {
      res.status(400).send("Failed To Add Data");
    });
});

app.post("/login", (req, res) => {
  User.findOne({'email': req.body.email}, (err, user) => {
    if (user){
      if (req.body.password === user.password){
        res.send({"status": 200, user: user})
      } else {
        res.send({"status": 400})
      }
    }
  })
})

app.get("/fund", (req, res) => {
  const fundData = Eth_Funding.find({}, (err, data) => {
    res.send(data)
  })
})

app.listen(5000, () => {
  console.log(`Example app listening on port ${5000}`);
});
