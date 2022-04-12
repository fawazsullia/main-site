const insertRow = `insert into analytics (hit, uniquehit, devicetype, country, timezone, region)
values ($1,$2,$3,$4,$5,$6)`
const getHighest = `select sum(hit) as hits, country, devicetype
from analytics
group by country 
order by hits desc 
limit 1;`
const getTotal = `select sum(hit) as totalhits, sum(uniquehits) as totaluniquehits
from analytics`

module.exports = {insertRow, getHighest, getTotal}