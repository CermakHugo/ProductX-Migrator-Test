

package.json
```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

index.js
```javascript
const express = require('express');
const api = require('./api');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
```

api/index.js
```javascript
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
  res.json(users);
});

router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = { id: 1, name: 'John Doe' };
  res.json(user);
});

router.post('/users', (req, res) => {
  const user = req.body;
  res.json(user);
});

router.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = req.body;
  res.json(user);
});

router.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: 'User deleted successfully' });
});

module.exports = router;
```