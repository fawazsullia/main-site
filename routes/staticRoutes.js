const express = require("express")
const router = express.Router()
const path = require("path")
const joinHtmlPage = require("../utils/joinHtmlPage")

const pathToViews = path.resolve("./views")

//path: /
router.get("/", async (req,res)=>{
   const toSend = await joinHtmlPage("index.html", "Home Page | Fawaz Sullia", "Some random meta description", "index")
    res.status(200).send(toSend)
})


//path : /projects
router.get("/projects", async (req,res)=>{
    const toSend = await joinHtmlPage("projects.html", "Projects | Fawaz Sullia", "Some random meta description", "projects")
    res.status(200).send(toSend)
})

//path : /resume
router.get("/resume", async (req,res)=>{
    const toSend = await joinHtmlPage("resume.html", "Resume | Fawaz Sullia", "Some random meta description", "resume")
    res.status(200).send(toSend)
})

//path : /chatroom
router.get("/chatroom", async (req,res)=>{
    const toSend = await joinHtmlPage("chatroom.html", "Chatroom | Fawaz Sullia", "Some random meta description", "chatroom")
    res.status(200).send(toSend)
})

//path : /pre-chat-window
router.get("/pre-chat", async (req,res)=>{
    res.status(200).sendFile(pathToViews + "/pre-chat.html")
})

//path : /blog
router.get("/blog", async (req,res)=>{
    const toSend = await joinHtmlPage("blog.html", "Blog | Fawaz Sullia", "Some random meta description", "blogPage")
    res.status(200).send(toSend)
})

//path : /blog
router.get("/tic-tac-toe", async (req,res)=>{
    const toSend = await joinHtmlPage("tic-tac-toe.html", "Play Game", "Some random meta description", "tictactoe")
    res.status(200).send(toSend)
})

//path : /pre-tic-tac-toe
router.get("/pre-tic-tac-toe", async (req,res)=>{
    res.status(200).sendFile(pathToViews + "/pre-tic-tac-toe.html")

})




module.exports = router