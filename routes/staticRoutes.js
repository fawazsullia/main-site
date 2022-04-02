const express = require("express")
const router = express.Router()
const path = require("path")

const pathToViews = path.resolve("./views")

//path: /
router.get("/", (req,res)=>{
    res.status(200).sendFile(pathToViews + "/index.html")
})


//path : /projects
router.get("/projects", (req,res)=>{
    res.status(200).sendFile(pathToViews + "/projects.html")
})

//path : /resume
router.get("/resume", (req,res)=>{
    res.status(200).sendFile(pathToViews + "/resume.html")
})

//path : /chat
router.get("/chatroom", (req,res)=>{
    res.status(200).sendFile(pathToViews + "/chatroom.html")
})




module.exports = router