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

//path : /chatroom
router.get("/chatroom", (req,res)=>{
    res.status(200).sendFile(pathToViews + "/chatroom.html")
})

//path : /pre-chat-window
router.get("/pre-chat", (req,res)=>{
    res.status(200).sendFile(pathToViews + "/pre-chat.html")
})

//path : /blog
router.get("/blog", (req,res)=>{
    res.status(200).sendFile(pathToViews + "/blog.html")
})





module.exports = router