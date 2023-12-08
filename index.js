const express = require('express');
const app = express();
const mongoose = require("mongoose");
const router = require('./Router/userrouter')
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use('/api/users',router)

mongoose
  .connect(
    "mongodb+srv://tejaskalbe96:djnlk83R3AITLJDJ@cluster0.z14wp5e.mongodb.net/User?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection Successfull");
  })
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is ruuning on http://localhost:3000`);
    });
  })
  .catch((e) => {
    console.error("Error", e);
  });
