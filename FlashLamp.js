class Lamp {
  constructor(status, battery) {
    this.status = status;
    this.battery = battery;
  }
  setBattery(Battery) {
    this.battery = Battery;
  }
  setBatteryInfo() {
    return this.battery.getEnergy();
  }

  checkBattery() {
    this.battery.decreaseEnergy();
  }


  Light() {
    let txt = '';
    if (this.status == 1) {
      txt += "chiếu sáng, mức pin đang là: " + this.battery.decreaseEnergy();
    } else {
      txt += "Không chiếu sáng";
    }
  return txt;

  }
  turnOn() {
    this.status = true;
  }
  turnOff() {
    this.status = false;
  }

}
