const express = require("express");
const mongoose = require("mongoose");
const workRoute = require("./routes/work.route.js");
const userRoute = require("./routes/user.route.js");
const bankRoute = require("./routes/bank.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", workRoute);
app.use("/api", userRoute);
app.use("/api", bankRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://tmunkhuu0507:6wEIDqnhCSutZyM5@backenddb.skphico.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
