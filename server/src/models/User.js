const { model, Schema } = require('mongoose');


const userSchema = new Schema({
    userName: { type: String, required: true },
    hashedPassword: { type: String, required: true }
});

userSchema.index({ userName: 1 }, {
    collation: {
        locale: 'en',
        strength: 1
    }
});

const User = model('User', userSchema);

module.exports = User;
