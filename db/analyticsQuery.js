const insertRow = `insert into analytics (hit, uniquehit, devicetype, country, timezone, region)
values ($1,$2,$3,$4,$5,$6)`
const getHighestCountry = `select sum(hit) as hits, country
from analytics
group by country 
order by hits desc 
limit 1;`
const getHighestDevice = `select sum(hit) as hits, devicetype
from analytics
group by devicetype 
order by hits desc 
limit 1;`
const getTotal = `select sum(hit) as totalhits, sum(uniquehit) as totaluniquehits
from analytics`

module.exports = {insertRow, getHighestCountry, getTotal, getHighestDevice}