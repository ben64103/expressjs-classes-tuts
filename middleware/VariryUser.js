
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next)=>{
  const authHeader = req.headers.authorization
  if(authHeader){
    const token = authHeader.split(' ')[1]
    
    jwt.verify(token, process.env.JWT_SEC, (err, decoded)=>{
      if (err) return res.status(404).json('your token expire pls login');

      req.user = decoded
      next()
    })

  }else{
    return res.status(404).json({message: 'please login'})
  }
}

module.exports = {
  verifyToken
}