class Battery {
  constructor(energy) {
    this.energy = energy;
  }

  getEnergy() {
    return this.energy;
  }

  setEnergy(energy) {
    this.energy = energy;
  }

  decreaseEnergy() {
    let sum = 0;
    if (this.energy > 0) {
      this.energy--;
     
    } return this.energy;
    
  }

}

