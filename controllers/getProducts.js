const Product = require("../models/Products")

const getProduct = async (req, res) => {
    const products = await Product.find();

    if (products) {
        res.json( {products })
    } else {
        res.json( {mensaje: "no se encontraron los productos"})
    }
}

module.exports = getProduct