const moongose = require('mongoose')

const userSchema = moongose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
},
{
    timestamp: true,
},
)

module.exports = moongose.model('User', userSchema)