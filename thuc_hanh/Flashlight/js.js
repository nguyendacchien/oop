class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}

class FlashLamp {
    constructor(status, battery) {
        this.status = status
        this.battery = battery;
    }


    checkOnOff() {
        if (this.status == true) {
            alert('turn on the light')
        } else {
            alert('turn off the light')
        }
    }
    display(){
        console.log('status: '+this.status+ ' energy: '+this.battery)
    }
}
function flash(){
    let battery =new Battery(20);
    battery.getEnergy();
    battery.decreaseEnergy()
    let flash= new  FlashLamp(1,battery.energy)
    flash.checkOnOff()
    flash.display()
}
flash()
