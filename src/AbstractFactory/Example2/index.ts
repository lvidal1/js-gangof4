interface Model {
  name: string;
  wheels: number;
  run(): void;
}

interface Factory {
  create(type: string): any;
}

function Car(this: Model) {
  this.name = "Car";
  this.wheels = 4;
  this.run = function (): void {
    console.log(`Running with ${this.wheels} wheels`);
  };
}

function Truck(this: Model) {
  this.name = "Truck";
  this.wheels = 6;
  this.run = function (): void {
    console.log(`Running with ${this.wheels} wheels`);
  };
}

function Bike(this: Model) {
  this.name = "Bike";
  this.wheels = 2;
  this.run = function (): void {
    console.log(`Running with ${this.wheels} wheels`);
  };
}

function VehicleFactory(this: Factory) {
  this.create = function (type) {
    switch (type) {
      case "Car":
        return new (Car as any)();
      case "Truck":
        return new (Truck as any)();
      case "Bike":
        return new (Bike as any)();
      default:
        return null;
    }
  };
}

function runExample2() {
  const vehicles = [];
  const vehicleFactory = new (VehicleFactory as any)();

  vehicles.push(vehicleFactory.create("Car"));
  vehicles.push(vehicleFactory.create("Truck"));
  vehicles.push(vehicleFactory.create("Bike"));

  vehicles.forEach((vehicle) => {
    vehicle.run();
  });
}

runExample2();
