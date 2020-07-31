const express = require('express');
const routes = express.Router();
const ProductController = require('./app/controllers/ProductController');
const multer = require('./app/middlewares/multer');

routes.get('/', (req, res) => {
  return res.render('layout.njk');
});

routes.get('/products/create', ProductController.create);
routes.post('/products', multer.array('photos', 6), ProductController.post);
routes.put('/products', multer.array('photos', 6), ProductController.put);
routes.get('/products/:id/edit', ProductController.edit);

//Alias
routes.get('/ads/create', (req, res) => {
  return res.redirect('/products/create');
});

module.exports = routes;
