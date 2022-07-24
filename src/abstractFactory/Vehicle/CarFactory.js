import { CarType1 } from "./Car.js";

class CarFactory {
    create(model) {
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
