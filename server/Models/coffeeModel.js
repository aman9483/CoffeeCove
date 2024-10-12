const mongoose = require('mongoose');

const CoffeeSchema = new mongoose.Schema({
    CoffeeName: {
        type: String,
        required: [true, 'Please enter the product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters'],
    },
    price: {
        type: Number,
        required: [true, 'Please enter the product price'],
    },
    description: {
        type: String,
        required: [true, 'Please enter the product description'],
        maxLength: [1000, 'Description cannot exceed 1000 characters'],
        minLength: [10, 'Description must be at least 10 characters long'],
    },
    rating: {
        type: Number,
        default: 0,
        min: [0, 'Rating must be at least 0'],
        max: [5, 'Rating cannot exceed 5'],
    },
    image: {
        type: String,
        required: [true, 'Please enter the product image URL'],
    },
    category: {
        type: String,
        required: [true, 'Please enter the product category'],
    },

    productSize: {
        type: String,
        required: [true, 'Please enter the product size'],
    },
    
    productQuantity: {
        type: Number,
        required: [true, 'Please enter the product quantity'],
        min: [0, 'Quantity cannot be less than 0'],
    },
}, { timestamps: true });

module.exports = mongoose.model('Coffee', CoffeeSchema);
