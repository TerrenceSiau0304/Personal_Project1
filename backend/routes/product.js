import express from 'express';
import Product from '../models/product.model.js';

const router = express.Router();

// GET route to retrieve all products
router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Product.findById(req.params.id)
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) =>{
    Product.findById(req.params.id)
        .then(products => {
            products.productName = req.body.productName;
            products.price = req.body.price;
            products.photo_url = req.body.photo_url;

            products.save()
            .then(() => res.json('Product updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
        
});

// POST route to add a new product
router.route('/add').post((req, res) => {
    const { productName, price, photo_url } = req.body;

    const newProduct = new Product({
        productName,
        price,
        photo_url,
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
