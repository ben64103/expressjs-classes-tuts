const Auth = require("../models/Auth");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();


const createToken = (id)=>{
  return jwt.sign({
    id
  }, process.env.JWT_SEC, {
    expiresIn: process.env.JWT_EXP
  } )

}


const signUpUser = async(req, res) => {
  const {name, email, password} = req.body
  try {
    const salt = await bcrypt.genSalt()
  let hashedPasssword =  await bcrypt.hash(password, salt)


  const response = await Auth.create({name, email, password: hashedPasssword})
    res.status(200).json({
      success: {
        msg: 'Authentication Valid',
      },
    });
  } catch (error) {
    res.status(400).json({
      error: {
        msg: 'Authentication error',
        error: error,
      },
    });
  }
};



const loginUser = async(req,res)=>{
  const {email, password} = req.body
  try{
    const user = await Auth.findOne({email})
    if(!user){
      res.status(404).json({message: 'invalid details'})
      return
    }
// res.json(user)
    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if(!isPasswordCorrect){
      res.status(404).json({message: 'invalid details'})
      return
    }
    const token = createToken(user._id)
    res.status(200).json({message: 'you are logged in', token})

   
    
  }catch(error){
    console.log(error)
    res.status(500).json(error)
  }

}


module.exports = { signUpUser, loginUser };
