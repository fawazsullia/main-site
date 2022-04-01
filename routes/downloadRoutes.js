const express = require("express")
const router = express.Router()
const path = require("path")

const pathToPublic = path.resolve("./public")

//send resume to download as a blob
router.get("/resume", (req,res)=>{

res.status(200).sendFile(pathToPublic+"/docs/resume.pdf")

})




module.exports = router