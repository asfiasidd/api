const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use('/api' , require('./api/products/users/Router'))

router.post('/' , (req,res) => {
  res.json({
    username : "BQ " + req.body.name
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 

