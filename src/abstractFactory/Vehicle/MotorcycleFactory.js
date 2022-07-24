import { MotorcycleType1 } from "./Motorcycle.js"


class MotorcycleFactory {
    create(model) {
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