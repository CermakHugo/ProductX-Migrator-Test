

const mongoose = require('mongoose');
const TabbedPage = mongoose.model('TabbedPage');

class TabbedPageService {
    async create(data) {
        try {
            const tabbedPage = new TabbedPage(data);
            return await tabbedPage.save();
        } catch (error) {
            throw new Error(`Error creating tabbed page: ${error.message}`);
        }
    }

    async read(id) {
        try {
            return await TabbedPage.findById(id);
        } catch (error) {
            throw new Error(`Error reading tabbed page: ${error.message}`);
        }
    }

    async update(id, data) {
        try {
            return await TabbedPage.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw new Error(`Error updating tabbed page: ${error.message}`);
        }
    }

    async delete(id) {
        try {
            return await TabbedPage.findByIdAndRemove(id);
        } catch (error) {
            throw new Error(`Error deleting tabbed page: ${error.message}`);
        }
    }

    async handleCalculate(data) {
        try {
            const { num1, num2, operation } = data;
            if (!num1 || !num2 || !operation) {
                throw new Error('Invalid input data');
            }

            let result;
            switch (operation) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    if (num2 === 0 ) {
                    throw new Error('Division by zero');
                }
                result = num1 / num2;
                    break;
                default:
                    throw new Error('Invalid operation');
            }

            return result;
        } catch (error) {
            throw new Error(`Error handling calculation: ${error.message}`);
        }
    }
}

module.exports = TabbedPageService;