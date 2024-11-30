const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const menu = [
  {
    id: 1,
    name: 'Pizza',
    description: 'Delicious cheesy pizza with toppings.',
    price: 12.99,
    image: 'https://example.com/images/pizza.jpg',
    modelUrl: 'https://example.com/models/pizza.glb'
  },
  {
    id: 2,
    name: 'Pasta',
    description: 'Creamy pasta with fresh vegetables.',
    price: 9.99,
    image: 'https://example.com/images/pasta.jpg',
    modelUrl: 'https://example.com/models/pasta.glb'
  }
];

app.get('/menu', (req, res) => {
  res.json(menu);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
