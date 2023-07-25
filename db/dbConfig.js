const { Client, Pool} = require("pg")
const dotenv = require("dotenv");
dotenv.config();
const connectionStringDev = process.env.DB_STRING;


const pool = new Pool({

    connectionString: process.env.NODE_ENV === "production" ? process.env.DATABASE_URL : connectionStringDev,
    ssl: {
      rejectUnauthorized: false
    }
  });





module.exports = { 

    query : async (qs, params) => {
    try{
    let res = await pool.query(qs, params)
    return res
    }
    catch(err){
      console.log(err)
    }
      
    }
    
     };
