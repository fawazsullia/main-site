//contains apis that perform additional functions

const express = require("express")
const router = express.Router()
const {query} = require("../db/dbConfig")
const {getChatsQuery} = require("../db/chatQuery")

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




module.exports = router