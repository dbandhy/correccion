const {model, Schema} =require("mongoose")

const productSchema = new Schema({
    nombre: {type: String, required: true, unique: true},
    precio: {type: Number, required: true},
    // id: {type: Number, required: true},
    inCart: {type: Boolean, default: false}
})

module.exports = model("Product", productSchema)