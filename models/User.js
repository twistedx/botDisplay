const mongoose = require('mongoose');

const BannedSchema = mongoose.Schema({

    admin: {
        type: String
    },
    name: {
        type: String
    },
    userID: {
        type: String
    },
    why: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

})

module.exports = mongoose.model('BannedUser', BannedSchema)