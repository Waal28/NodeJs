const fibonachi = (x) => {
  let number = 1;
  let temporary = 0;
  for (let index = 0; index < x; index++) {
    let hasil = temporary + number;
    temporary = number;
    number = hasil;
  }
  return number;
};

const fibonachiAsync = (x, callback) => {
  setTimeout(() => {
    const result = fibonachi(x);
    callback(result);
  }, 0);
};

const plus = (a, b) => {
  return a + b;
};

const plusAsync = (a, b, callback) => {
  setTimeout(() => {
    const result = plus(a, b);
    callback(result);
  }, 0);
};

fibonachiAsync(1000, (result) => {
  console.log("Fibonachi 1K : ", result);
});
const hasilFibo10 = fibonachi(10);
console.log("Fibonach 10", hasilFibo10);
console.log("====================");

fibonachiAsync(10, (result) => {
  plusAsync(result, 10, (hasilTambah) => {
    console.log("Hasil Tambah : ", hasilTambah);
    plusAsync(result, 10, (hasilTambah) => {
      console.log("Hasil Tambah : ", hasilTambah);
    });
  });
});
