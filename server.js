// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const menu = [
//   {
//     id: 1,
//     name: 'Pizza',
//     description: 'Delicious cheesy pizza with toppings.',
//     price: 12.99,
//     image: 'https://example.com/images/pizza.jpg',
//     modelUrl: 'https://example.com/models/pizza.glb'
//   },
//   {
//     id: 2,
//     name: 'Pasta',
//     description: 'Creamy pasta with fresh vegetables.',
//     price: 9.99,
//     image: 'https://example.com/images/pasta.jpg',
//     modelUrl: 'https://example.com/models/pasta.glb'
//   }
// ];

// app.get('/menu', (req, res) => {
//   res.json(menu);
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  // Enable CORS for all origins

app.get('/menu', (req, res) => {
  const menuItems = [
    { name: 'Pizza', description: 'Delicious cheese pizza', price: 10.99 },
    { name: 'Burger', description: 'Juicy beef burger', price: 8.99 },
    // Add your menu items here
  ];

  res.json(menuItems);  // Send the menu items as a JSON response
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
