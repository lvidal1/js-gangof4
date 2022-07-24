import { MotorcycleType1 } from "./Motorcycle";

class MotorcycleFactory {
  create(model: string) {
    switch (model) {
      case "deportiva":
        return new MotorcycleType1();
      default:
        console.log(`Model not found: ${model}`);
        break;
    }
  }
}

export default MotorcycleFactory;
