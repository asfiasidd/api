const express = require('express')
const  router = express.Router()
const{getALLproducts, addproduct} = require('./Controller')

//getALLproducts
router.get('/products', getallproducts)

//addProducts
router.post('/addproduct', addproduct)

module.exports = router
