const foodRouter = require("./routes/foodRoutes.js");
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://quoc:1234@cluster0.pjjzdes.mongodb.net/demo-nhom7-20NS", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);
app.use(foodRouter);
app.listen(3000, () => {
    console.log("Server is running...");
});