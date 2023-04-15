const path = require("path");

// path normalize
const filePath = __dirname + "../folder1/folder1_2/file/Halo.txt";

const normalizeFilePath = path.normalize(filePath);

console.log({ filePath, normalizeFilePath });
const data = fs.readFileSync(normalizeFilePath);
console.log(data.toString);
