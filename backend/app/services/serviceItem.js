import Item from "../models/itemSchema.js";

export const addItems = async (newDetails) => {
    const item = new Item(newDetails);
    return item.save();
}

export const getAllItemDetails = async () => {
    return Item.find().exec();
}

export const searchByName = async (query) => {
    return Item.find({ name: { $regex: query, $options: 'i' } }).exec();
}

export const searchByDescription = async (query) => {
    return Item.find({ description: { $regex: query, $options: 'i' } }).exec();
}

export const searchByPrice = async (query) => {
    return Item.find({ price: parseFloat(query) || 0 }).exec();
}