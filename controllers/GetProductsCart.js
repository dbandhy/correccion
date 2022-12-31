const { getProducts } = require(".");
const cart = require("../models/Cart")

const getProductsCart = async (req, res) => {
    const productsCart = await cart.find();

    if (productsCart) {
        res.json( {productsCart })
    } else {
        res.json( {mensaje: "no se encontró el carrito"})
    }
}

module.exports = getProductsCart