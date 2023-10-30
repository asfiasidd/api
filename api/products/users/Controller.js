const getUserProfile = (req, res) =>{
    res.send('hello banoqabil')
}

const loginUsers = (req,res) => {
    res.json({
      username : "BQ " + req.body.name
    })
  
  }

module.exports = {getUserProfile, loginUsers}