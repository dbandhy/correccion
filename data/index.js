const mongoose = require("mongoose")
// const cors = require("cors")

//const MONGO_URL = "mongodb://localhost/shoppingCart"
const MONGO_URL = "mongodb://localhost:27017/2daentrega"

const dataMongo = async () => {
    await mongoose 
        .connect(MONGO_URL)
        .then(() => console.log("base de datos funciona"))
        .catch((error) => console.error(error))

}

module.exports = dataMongo