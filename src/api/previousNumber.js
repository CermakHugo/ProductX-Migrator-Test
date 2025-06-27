

package src.api.previousNumber;

import axios from 'axios';
import express from 'express';

const app = express();

app.get('/previousNumber', (req, res) => {
  try {
    const previousNumber = localStorage.getItem('previousNumber');
    if (previousNumber && !isNaN(previousNumber)) {
      res.send(previousNumber);
    } else {
      res.status(404).send('No previous number found');
    }
  } catch (error) {
    res.status(500).send('Error retrieving previous number');
  }
});

axios.get('/previousNumber')
  .then((response) => {
    if (response.status === 200 && !isNaN(response.data)) {
      console.log(response.data);
    } else {
      console.error('Invalid response');
    }
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = app;