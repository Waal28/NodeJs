// export BOOLEAN_CONFIG=true;

// console.log(process.env.BOOLEAN_CONFIG);
// console.log(process.env.BOOLEAN_CONFIG);
// console.log(process.env.BOOLEAN_CONFIG);

//process.argv
// node index iwal faizul
// console.log(process.argv);

//process.exit
// const start = new Date().getTime();
// for (let i = 0; i < 100000000; i++) {
//   const current = new Date().getTime();
//   if (current - start > 5000) {
//     console.log(`Execution time reached 5 secconds: on ${i} iteration`);
//     process.exit(1);
//   }
// }
// const finish = new Date().getTime();
// console.log(`Execution time,`, (finish - start) / 1000, ` secconds`);

//event on
process.on("exit", (code) => {
  if (code === 20) {
    console.log("Execution time reached 5 secconds");
  }
  if (code === 0) {
    console.log("Success to run the program");
  }
  console.log("Exit code ", code);
});

process.on("beforeExit", (code) => {
  console.log("beforeExit");
});
process.on("uncaugthExeption", (err) => {
  console.log("uncaugthExeption ", err);
});
process.on("SIGNT", () => {
  console.log("SIGNT");
  process.exit();
});
process.on("SIGNTERM", () => {
  console.log("SIGNTERM");
  process.exit();
});

const start = new Date().getTime();
for (let i = 0; i < 100000000; i++) {
  const current = new Date().getTime();
  if (current - start > 5000) {
    process.exit(20);
  }
  if (i === 1000) {
    throw new Error(`error in ${i} iteration`);
  }
}
const finish = new Date().getTime();
console.log(`Execution time,`, (finish - start) / 1000, ` secconds`);
