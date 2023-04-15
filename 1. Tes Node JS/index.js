const axios = require("axios");
const { tambah, kurang } = require("./package/operasiMtk.js");

//axios.get("https://www.npmjs.com").then((res) => console.log(res.data));

console.log(tambah(5, 5));
console.log(kurang(10, 5));
