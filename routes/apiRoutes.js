//contains apis that perform additional functions

const express = require("express")
const router = express.Router()
const {query} = require("../db/dbConfig")
const {getChatsQuery} = require("../db/chatQuery")
const blogPosts = require("../utils/blogPosts")
const {getHighestCountry,getTotal,getHighestDevice} = require("../db/analyticsQuery")



//get last 50 chats
router.get("/get-chats", async (req,res)=>{
const response = await query(getChatsQuery,[])
try{
res.status(200).json(response.rows)
}
catch(e){
res.status(500).json({message : "Something went wrong with server"})
}

})

// get blog title and slug for blog page

router.get("/get-blogs", (req,res)=>{
res.status(200).json(blogPosts)
})

//get analytics
router.get("/get-analytics", async (req,res)=>{
try{
    const higestCountry = await query(getHighestCountry,[])
    const higestDevice = await query(getHighestDevice,[])
    const total = await query(getTotal,[])
    res.status(200).json({highestCountry : higestCountry.rows[0], highestDevice : higestDevice.rows[0], total : total.rows[0]})
}
catch(e){
res.status(500).send("something went wrong with server")
}
    
    
})


module.exports = router