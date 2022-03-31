const express = require("express")
const router = express.Router()
const path = require("path")

const pathToViews = path.resolve("./views")

router.get("/", (req,res)=>{
    res.status(200).sendFile(pathToViews + "/index.html")
})

router.get("/projects", (req,res)=>{
    res.status(200).sendFile(pathToViews + "/projects.html")
})




module.exports = router