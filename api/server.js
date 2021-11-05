require("dotenv").config();

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
server.listen(process.env.SOCKET_PORT);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET"],
  },
});

const mongoose = require("mongoose");
const PORT = process.env.SERVER_PORT;
const URL = process.env.MONGO_URL;
var cors = require("cors");
const dataApi = require("./dataApi");
const { json } = require("express");
const Zips = require("./dataSchema");

app.use(cors());

mongoose
  .connect(URL, { useNewUrlParser: true })
  .then((result) =>
    app.listen(PORT, () => console.log("Server Started at 3001"))
  )
  .catch((err) => console.log("error in DB connnect :" + err));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("pls start frontend to show home page");
});

app.use("/api", dataApi);





io.on("connection", (socket) => {
    setInterval(()=>{
         Zips.find().then((result) => {
    socket.emit("output", result);
  });
    }, 5000)

  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
