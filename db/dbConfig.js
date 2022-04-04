const { Client, Pool} = require("pg")
const connectionStringDev = `postgres://portfolioadmin:kenkaneki13@localhost:5432/portfolio`


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
      return err;
    }
      
    }
    
     };