import Car from "./car.js";

const mobil1 = new Car();
mobil1.color = "navy";
mobil1.type = "sedan";
mobil1.brand = "toyota";

console.log(mobil1);

const mobil2 = new Car();
mobil2.color = "gold";
mobil2.type = "sedan";
mobil2.brand = "suzuki";
mobil2.turnOn();

console.log(mobil2);

const mobil3 = new Car("pink", "sedan", "fortuner");
console.log(mobil3);

const mobil4 = new Car("blue", "sedan", "pajero");
console.log(mobil4);
