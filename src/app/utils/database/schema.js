import mongoose from "mongoose";

let Schema = mongoose.Schema

let mySchema = new Schema({
    formData: {
        type: String,
        required: true
    },
    aiContent: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    templateSlug: {
        type: String,
        required: true
    }
}, { timestamps: true })

let myData = mongoose.models.data || mongoose.model('data', mySchema)

export { myData };