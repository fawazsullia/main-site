const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const staticRoutes = require("./routes/staticRoutes")
const downloadRoutes =require("./routes/downloadRoutes")

//middlewares
app.use("/static" , express.static("public"))

//route middlewares
app.use("/", staticRoutes )
app.use("/download", downloadRoutes)




app.listen(PORT, ()=> console.log("Server started"))