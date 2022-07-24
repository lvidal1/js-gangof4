interface IVehicle {
  _model: string;
  _type: string;
}

class Vehicle implements IVehicle {
  _model: string;
  _type: string;

  constructor(type: string, model: string) {
    this._model = model;
    this._type = type;
  }
  get model() {
    return this._model;
  }
  get type() {
    return this._type;
  }
  description() {
    return `Type: ${this.type} | Model: ${this.model}`;
  }
}

export default Vehicle;
