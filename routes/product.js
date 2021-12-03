
const productos = require("../controllers/product");
var express = require('express');
var router = express.Router();

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  console.log(productos.getProducts(req.query.q))
  res.send(
    productos.getProducts(req.query.q)
  );
});

module.exports = router;
