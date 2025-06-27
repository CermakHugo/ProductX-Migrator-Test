

const sqlite3 = require('sqlite3').verbose();

class Database {
  constructor() {
    this.db = new sqlite3.Database('./calculator.db', (err) => {
      if (err) {
        console.error(err.message);
      }
    });
    this.createTable();
  }

  createTable() {
    this.db.run(`
      CREATE TABLE IF NOT EXISTS calculations
      (id INTEGER PRIMARY KEY AUTOINCREMENT, 
      expression TEXT, 
      result TEXT, 
      timestamp TEXT)
    `, (err) => {
      if (err) {
        console.error(err.message);
      }
    });
  }

  storeCalculation(expression, result) {
    const timestamp = new Date().toISOString();
    this.db.run(`
      INSERT INTO calculations (expression, result, timestamp)
      VALUES (?, ?, ?)
    `, expression, result, timestamp, (err) => {
      if (err) {
        console.error(err.message);
      }
    });
  }

  getCalculationHistory() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM calculations ORDER BY id DESC', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  close() {
    this.db.close((err) => {
      if (err) {
        console.error(err.message);
      }
    });
  }
}

module.exports = Database;