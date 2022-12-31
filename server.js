// import express from "express"
// import cors from "cors"

const express = require("express")
const cors = require("cors")

const port = 8080
const controllers = require("./controllers")

const app = express()

//BASES DE DATOS
const dataMongo = require("./data/index")


app.use(cors());
app.use(express.json())

//GET
app.get("/api/products", controllers.getProducts)
app.get("/api/productsCart", controllers.getProductsCart)

//POST
app.post("/api/productsCart", controllers.addProductCart)

//PUT
app.put("/api/productsCart/:productId", controllers.putProduct)

//DELETE
app.delete("/api/productsCart/:productId", controllers.deleteProduct)

app.listen(port, () => {
    console.log("funcionando");
    dataMongo()
})

module.exports = app