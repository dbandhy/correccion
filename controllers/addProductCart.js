const Cart = require("../models/Cart")
const Product = require("../models/Products")

const addProductCart = async (req, res) => {
    const {nombre, precio } = req.body

    const inProducts = await Product.findOne( {nombre});

    const isNotEmpty = nombre !== "" && precio !== "";

    const isInCart = await Cart.findOne({nombre})

    if (!inProducts) {
        res.status(400).json({
            mensaje: "Este producto no se encuentra en la base de datos"
        })
    } else if (isNotEmpty && !isInCart) {
        const newProductinCart = new cart({nombre, precio, cantidad: 1});

        await Product.findByIdAndUpdate(
            inProducts?._id,
            { inCart: true, nombre, precio },
            {new: true}
        )
        .then((product) => {
            newProductinCart.save();
            res.json({
                mensaje: `El producto fue agregado al carrito`,
                product,
            })
        })
        .catch((error) => console.log(error))

    } else if (isInCart) {
        res.status(400).json({
            mensaje: `El producto no está en el carrito`
        })
    }


}
 module.exports = addProductCart