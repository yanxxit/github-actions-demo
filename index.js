const fs = require("fs");
const path = require("path");

if (!fs.existsSync("dist")) fs.mkdirSync("dist")


let file_dir = path.join(__dirname, 'dist', 'index.html')
fs.writeFileSync(file_dir, `
<h2>hello world ${Date.now()}</h2>
`)