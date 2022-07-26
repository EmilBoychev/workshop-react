const { model, Schema, Types: { ObjectId } } = require('mongoose');


const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxLength: 50
    },
    phoneNumber: {
        type: Number,
        min: [0.01, 'Price must be a positive number']
    },
    email: {
        type: String,
        required: true,
        minlength: 4,
        maxLength: 20
    },
    message: {
        type: String,
        required: true,
        minlength: 4,
    },
});

const Message = model('Message', messageSchema);

module.exports = Message;