const Message = require('../models/Messages')

async function create(message) {
    const result = new Message({
        name: message.name,
        phoneNumber: message.phoneNumber,
        email: message.email,
        message: message.message,
    });

    await result.save();

    return result;
}

async function getAll() {
    const result = await Message.find();
    return result;
}

async function onDelete(messageId) {
    return await Message.findByIdAndDelete(messageId)
}
module.exports = {
    create,
    getAll,
    onDelete,
};