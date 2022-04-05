const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const {createServer} = require("http")
const httpServer = createServer(app);
const { Server } = require("socket.io");
const io = new Server(httpServer);
const {query} = require("./db/dbConfig")


const staticRoutes = require("./routes/staticRoutes")
const downloadRoutes =require("./routes/downloadRoutes");
const apiRoutes = require("./routes/apiRoutes")
const blogRoutes = require("./routes/blogRoutes")

const {addRowQuery} = require("./db/chatQuery")

//middlewares
app.use("/static" , express.static("public"))

//route middlewares
app.use("/", staticRoutes )
app.use("/download", downloadRoutes)
app.use("/api", apiRoutes)
app.use("/blog", blogRoutes)

//handle socket connection
io.on("connection", (socket)=>{
socket.on("message", async (data)=> {
    let req = JSON.parse(data)
    let date = new Date()
    let now = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}: ${date.getHours()}-${date.getMinutes()}: ${date.getTimezoneOffset()}`
   await query(addRowQuery, [req.userName, now ,req.message])
  await io.emit("chat",  data)
  
})

})


httpServer.listen(PORT, ()=> console.log("Server started"))
