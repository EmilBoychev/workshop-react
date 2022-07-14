const { model, Schema, Types: { ObjectId } } = require('mongoose');


const itemSchema = new Schema({
    name: { type: String },
    imgUrl: { type: String },
    description: { type: String },
    price: { type: Number, min: [0.01, 'Price must be a positive number'] },
    // _ownerId: { type: ObjectId, ref: 'User' }
});

const Item = model('Item', itemSchema);

module.exports = Item;