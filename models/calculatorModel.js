

const mongoose = require('mongoose');

const calculatorSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  value: { type: Number, required: true, default: 0 },
  operator: { type: String, required: true, default: "" },
  updateHistory: [{ type: String, required: true }]
});

const CalculatorModel = mongoose.model('Calculator', calculatorSchema);

class Calculator {
  constructor() {
    this.calculatorModel = CalculatorModel;
  }

  async resetCalculatorState() {
    try {
      await this.calculatorModel.updateOne({ id: this.calculatorModel.id }, { $set: { value: 0, operator: "" } });
      await this.calculatorModel.updateOne({ id: this.calculatorModel.id }, { $push: { updateHistory: "Calculator state reset" } });
    } catch (error) {
      console.error(error);
    }
  }

  async truncateTable() {
    try {
      await this.calculatorModel.deleteMany({});
    } catch (error) {
      console.error(error);
    }
  }

  async updateSpecificRecord(id, value, operator) {
    try {
      await this.calculatorModel.updateOne({ id: id }, { $set: { value: value, operator: operator } });
      await this.calculatorModel.updateOne({ id: id }, { $push: { updateHistory: `Calculator state updated to value: ${value} and operator: ${operator}` } });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Calculator;