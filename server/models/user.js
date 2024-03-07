import { model, Schema } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default model('User', userSchema)
