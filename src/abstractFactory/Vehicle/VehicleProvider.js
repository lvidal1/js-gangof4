import CarFactory from "./CarFactory.js";
import MotorcycleFactory from "./MotorcycleFactory.js";

class VehicleProvider {
    createType(type) {
        switch (type) {
            case "car":
                return new CarFactory();
            case "motorcycle":
                return new MotorcycleFactory();
            default:
                console.log("Error type");
                break;
        }
    }
}

export default VehicleProvider;