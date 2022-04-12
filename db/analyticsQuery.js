const insertRow = `insert into analytics (hit, uniquehit, devicetype, country, timezone, region)
values ($1,$2,$3,$4,$5,$6)`
const getAnalytics = ""

module.exports = {insertRow}