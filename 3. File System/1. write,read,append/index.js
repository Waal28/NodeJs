const fs = require("fs");

//buat file
fs.writeFileSync("Halo.txt", "Hallo Node JS", {
  encoding: "utf-8",
});

//baca file
const data1 = fs.readFileSync("Halo.txt");
console.log(data1);

//append file
function append(file, data) {
  const oldData = read(file);
  write(file, oldData + "\n" + data);
}

append("Halo.txt", "Halo Node JS");
