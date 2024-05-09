import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String
});

const Item = mongoose.model('Items', itemSchema);

export default Item;