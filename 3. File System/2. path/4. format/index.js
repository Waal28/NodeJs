const path = require("path");

// path format
const tampilPath = path.format({
  oot: "/ignored/root/",
  dir: "/home/user/personal",
  base: "Halo.txt",
});
console.log(tampilPath);
