import { CarType1 } from "./Car";

class CarFactory {
  create(model: string) {
    switch (model) {
      case "taxi":
        return new CarType1();
      default:
        console.log(`Model not found: ${model}`);
        break;
    }
  }
}

export default CarFactory;
