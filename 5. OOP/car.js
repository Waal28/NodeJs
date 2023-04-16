import Kendaraan from "./kendaraan.js";

export default class Car extends Kendaraan {
  constructor(color, type, brand) {}

  setColor(color) {
    this.color = color;
  }
  setType(type) {
    this.type = type;
  }
  setBrand(brand) {
    this.brand = brand;
  }

  getColor() {
    return this.color;
  }
  getType() {
    return this.type;
  }
  getBrand() {
    return this.brand;
  }
}
