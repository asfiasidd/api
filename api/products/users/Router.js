const express =require ('express')
const router = express.Router()

const {getUserProfile, loginUsers} = require('./Controller')


router.get('/getuserporfile',getUserProfile)
    


  app.post('/login' , loginUsers)

  module.exports = router