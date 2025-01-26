import mongoose from "mongoose";

const productSchema = new Schema ({
    productName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    price: {
        type: Number,
        required: true,
        trim:true,
    },
    photo_url:{
        type: String,
        required: true,
        trim: true,
    }
},{
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;