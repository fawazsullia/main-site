const fs = require("fs").promises
const path = require("path")
const pathToViews = path.resolve("./views")

async function joinHtmlPage(pathRelToViews, title, description, stylesheetName){
let meta = await fs.readFile(`${pathToViews}/templates/meta.html`, "utf-8")
let nav = await fs.readFile(`${pathToViews}/templates/nav.html`, "utf-8")
let main = await fs.readFile(`${pathToViews}/${pathRelToViews}`, "utf-8")

meta = meta.replace("{pageTitle}", title)
meta = meta.replace("{metaDescription}", description)
meta = meta.replace("{stylesheetName}", stylesheetName)


return meta + nav + main
}


module.exports = joinHtmlPage