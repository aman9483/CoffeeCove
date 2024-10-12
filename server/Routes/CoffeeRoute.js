const express = require('express');
const router = express.Router();
const { newProduct, getAllProduct, deleteProduct, getSingleProduct } = require('../controllers/coffeeController');

router.post('/', newProduct);


router.get('/', getAllProduct);

router.get('/:id', getSingleProduct);

router.delete('/:id', deleteProduct);


module.exports = router;