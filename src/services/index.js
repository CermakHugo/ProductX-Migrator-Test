
import Calculator from './calculator';

class ServicesIndex {
  constructor() {
    this.services = {
      Calculator,
    };
  }

  getServices() {
    return this.services;
  }
}

const servicesIndex = new ServicesIndex();

export default servicesIndex.getServices();