import Car from "./classes/car";

const carList = [];

const carHonda = new Car("Honda", "Red", "Sedan", 2000);
const carAvanza = new Car("Avanza", "blue", "MVP", 2000);
const carXenia = new Car("Xenia", "green", "MVP", 2000);

carList.push(carHonda, carAvanza, carXenia);
console.log(carList);

const findCar = (brand) => {
  try {
    const foundCar = carList.find((car) => {
      return car.brand === brand;
    });
    return foundCar.type;
  } catch (error) {
    if (error.name === "TpeError") {
      return "Brand Not Found";
    }
  }
};

console.log("====================");
console.log(findCar("Honda"));
console.log("Ini seharusnya di jalankan");
