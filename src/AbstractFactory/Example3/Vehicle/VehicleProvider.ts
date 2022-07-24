import CarFactory from "./CarFactory";
import MotorcycleFactory from "./MotorcycleFactory";

class VehicleProvider {
  createType(type: string) {
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
