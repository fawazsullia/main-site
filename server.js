const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const {createServer} = require("http")
const httpServer = createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(httpServer);

const handleSocketChat = require("./utils/socketChat")

const staticRoutes = require("./routes/staticRoutes")
const downloadRoutes =require("./routes/downloadRoutes")

//middlewares
app.use("/static" , express.static("public"))

//route middlewares
app.use("/", staticRoutes )
app.use("/download", downloadRoutes)

// io.on("connection", (socket) => {
//     console.log("connected")
//     handleSocketChat(socket)
// }) 


httpServer.listen(PORT, ()=> console.log("Server started"))

