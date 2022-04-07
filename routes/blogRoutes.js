const express = require("express")
const router = express.Router()
const path = require("path")
const joinHtmlPage = require("../utils/joinHtmlPage")
const blogPosts = require("../utils/blogPosts")


//all the blog posts will go through this route
const pathToBlogPosts = path.resolve("./views/blog")


router.get("/:slug", async (req,res)=> {

    const {slug} = req.params
    const reqPost = blogPosts[slug]
    const toSend = await joinHtmlPage(`/blog/${slug}.html`, reqPost.title, "Some desc", "blogTemplate")
    res.status(200).send(toSend)

})

module.exports = router