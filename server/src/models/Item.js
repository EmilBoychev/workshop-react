const { model, Schema, Types: { ObjectId } } = require('mongoose');


const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxLength: 50
    },
    imgUrl: {
        type: String,
        required: true,
        minlength: 4,
    },
    description: {
        type: String,
        required: true,
        minlength: 4,
        maxLength: 230
    },
    price: { type: Number, min: [0.01, 'Price must be a positive number'] },
    // _ownerId: { type: ObjectId, ref: 'User' }
});

const Item = model('Item', itemSchema);

module.exports = Item;