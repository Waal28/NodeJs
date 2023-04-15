const path = require("path");

// path join
console.log(path.join(__dirname, "./folder/file.txt"));
const data = fs.readFileSync(path.join(__dirname, "./folder/file.txt"));
console.log(data.toString);
