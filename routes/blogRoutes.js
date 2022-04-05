const express = require("express")
const router = express.Router()
const {query} = require("../db/dbConfig")
const {getChatsQuery} = require("../db/chatQuery")

//all the blog posts will go through this route

module.exports = router