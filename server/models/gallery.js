import { model, Schema } from 'mongoose'

const gallerySchema = new Schema({
    writerId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    url: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default model('Images', gallerySchema)
