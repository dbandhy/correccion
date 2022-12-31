const {model, Schema} =require("mongoose")

const cartSchema = new Schema({
    nombre: {type: String, required: true, unique: true},
    precio: {type: Number, required: true}
    // id: {type: Number, required: true}
})

module.exports = model("Cart", cartSchema)