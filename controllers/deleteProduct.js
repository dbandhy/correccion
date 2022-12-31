const Cart = require("../models/Cart")
const Product = require("../models/Products")

const deleteProduct = async (req, res) => {
    const {productId} = req.params;

    const productInCart = await Cart.findById(productId)

    const {nombre, precio, _id } = await Product.findOne({
        nombre: productInCart.nombre,
    })

    await Cart.findByIdAndDelete(productId);

    await Product.findByIdAndUpdate(
        _id,
        { inCart: false, nombre, precio},
        {new: true}
    
    ).then((product) => {
        res.json({
            mensaje: `el producto ${nombre} fue eliminado del carrito`
        })
    }).catch((error) => res.json ({mensaje: "Ocurrió un ERR0R"}))

}

module.exports = deleteProduct