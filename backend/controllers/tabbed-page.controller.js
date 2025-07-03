

const express = require('express');
const router = express.Router();

class TabbedPageController {
    constructor() {
        this.tabs = [
            { id: 1, content: 'Tab 1 content' },
            { id: 2, content: 'Tab 2 content' },
            { id: 3, content: 'Tab 3 content' }
        ];
        this.activeTab = this.tabs[0];
        this.displayValue = '';
    }

    handleKeypadButtonPress(req, res) {
        const { button } = req.body;
        if (typeof button !== 'string') {
            return res.status(400).json({ error: 'Invalid button input' });
        }
        switch (button) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            case '.':
                this.displayValue += button;
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.displayValue += ` ${button} `;
                break;
            case '=':
                this.handleCalculate(req, res);
                break;
            case 'C':
                this.displayValue = '';
                res.json({ displayValue: this.displayValue });
                break;
            default:
                return res.status(400).json({ error: 'Invalid button input' });
        }
        res.json({ displayValue: this.displayValue });
    }

    handleCalculate(req, res) {
        try {
            const result = eval(this.displayValue);
            this.displayValue = result.toString();
            res.json({ displayValue: this.displayValue });
        } catch (error) {
            this.displayValue = 'Error';
            res.json({ displayValue: this.displayValue });
        }
    }

    handleTabSwitch(req, res) {
        const { tabId } = req.body;
        if (typeof tabId !== 'number') {
            return res.status(400).json({ error: 'Invalid tab ID' });
        }
        const newTab = this.tabs.find(tab => tab.id === tabId);
        if (newTab) {
            this.activeTab = newTab;
            this.displayValue = newTab.content;
            res.json({ displayValue: this.displayValue });
        } else {
            return res.status(404).json({ error: 'Tab not found' });
        }
    }
}

const tabbedPageController = new TabbedPageController();

router.post('/keypad-button-press', tabbedPageController.handleKeypadButtonPress.bind(tabbedPageController));
router.post('/calculate', tabbedPageController.handleCalculate.bind(tabbedPageController));
router.post('/tab-switch', tabbedPageController.handleTabSwitch.bind(tabbedPageController));

module.exports = router;
