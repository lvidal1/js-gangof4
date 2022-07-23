function Car() {
    this.name = "Car";
    this.wheels = 4;
    this.run = function () {
        console.log(`Running with ${this.wheels} wheels`);
    }
}

function Truck() {
    this.name = "Truck";
    this.wheels = 6;
    this.run = function () {
        console.log(`Running with ${this.wheels} wheels`);
    }
}

function Bike() {
    this.name = "Bike";
    this.wheels = 2;
    this.run = function () {
        console.log(`Running with ${this.wheels} wheels`);
    }
}

function VehicleFactory() {
    this.create = function (type) {
        switch (type) {
            case "Car":
                return new Car();
            case "Truck":
                return new Truck();
            case "Bike":
                return new Bike();
            default:
                return null;
        }
    }
}

function main() {
    const vehicles = [];
    const vehicleFactory = new VehicleFactory();

    vehicles.push(vehicleFactory.create("Car"));
    vehicles.push(vehicleFactory.create("Truck"));
    vehicles.push(vehicleFactory.create("Bike"));

    vehicles.forEach(vehicle => {
        vehicle.run()
    });
}

main();
