export default class Kendaraan {
  constructor(volume) {
    this.engine = false;
    this.volume = volume;
  }
  engine;

  turnOn() {
    this.engine = true;
    console.log("Mesin Hidup");
  }

  turnOf() {
    this.engine = false;
    console.log("Mesin Mati");
  }
  klakson() {
    console.log("Beep Beep");
  }
}
