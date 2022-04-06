const express = require("express")
const router = express.Router()
const path = require("path")

//all the blog posts will go through this route
const pathToBlogPosts = path.resolve("./views/blog")


router.get("/:slug", (req,res)=> {

    const {slug} = req.params
    res.status(200).sendFile(pathToBlogPosts + "/" + slug + ".html")

})

module.exports = router