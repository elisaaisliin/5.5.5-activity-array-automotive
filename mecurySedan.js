//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        this.maxPassengers= 5;
        this.passenger= 0;
        this.numberOfWheels= 4;
        this.maxinumSpeed=160;
        this.fuel= 10;
        this.scheduleService=false
        super(make, model, year, color, mileage)
    }

    loadPassenger() {
        if(this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers){
                this.passenger = num;
                return this.passenger;
            } else {
                console.log( this.model + " " + this.make + "not enough space ):" )
            console.log()
        } else {
            console.log(this.model + " " + this.make + " is full ):")
        }
        }

    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started !")
        } else {
            return this.started = false;
            console.log("engine did not start")
        }
    }

    scheduleService(){
        if( this.mileage > 30000) {
            return this.needsService = true
            console.log("schedule service !")
        }

    }






}