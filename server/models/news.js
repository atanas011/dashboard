import { model, Schema } from 'mongoose'

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    },
    count: {
        type: Number,
        default: 0
    },
    writerId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    writerName: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default model('News', newsSchema)
