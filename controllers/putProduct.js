const Cart = require("../models/Cart")

const putProduct = async (req, res) => {
    const {productId} = req.params
    const{query} = req.query
    const {body} = req.body

    const productFind = await Cart.findById(productId)
    
    if(!query) {
        res.statut(400).json({mensaje: "debes enviar un query"})
    
    } else if (productFind && query === "add") {
        body.amount =body.amount + 1;

        await Cart.findByIdAndUpdate(productId, body, {
            new: true,
        }).then((product) => {
            re.json({
                mensaje: `el producto ${product.name} fue actualizado`,
                product
            })
        })

    } else if (productFind && query === "del") {
        body.amount = body.amount - 1;

        await Cart.findByIdAndUpdate(productId, body, {
            new: true,

        }).then((product) => 
        res.json({
            mensaje: `El producto ${product.name} fue actualizado`,
            product,
        })
        )

    } else {
        res.status(400).json( {mensaje: `Ocurrio un error`});
    }

}

module.exports = putProduct