import VehicleProvider from "./VehicleProvider.js";

const vehicleProvider = new VehicleProvider;

const cars = vehicleProvider.createType("car");
const motorcycle = vehicleProvider.createType("motorcycle");


const taxi = cars.create("taxi");
console.log(taxi.description());

const sportMoto = motorcycle.create("deportiva");
console.log(sportMoto.description());