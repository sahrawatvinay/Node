const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/hotels";

//establish connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to mongo db server");
});

db.on("error", (error) => {
    console.log("MongoDb connection error: ", error);
});

db.on("disconnected", () => {
    console.log("MongoDb disconnected");
});

module.exports = db;