const { Client, Pool} = require("pg")
const connectionStringDev = `postgres://fawazsullia:HZ0Y2xkRgVLRORBVRMcdbWmOx6XNWRQH@dpg-cfmea9irrk07m3tmoh8g-a.frankfurt-postgres.render.com/fawazsulliadb`


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
