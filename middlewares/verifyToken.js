const jwt = require('jsonwebtoken');
const userModel = require ('../models/usuarios');
const private_key = "ñaklsdj";


const verifyToken = async (req,res,next) => {

	const Authorization = req.get("Authorization");

	if(Authorization){
		const token =  Authorization.replace("JWT ","");
		const payload =  jwt.verify(token,private_key);
		const user = await userModel.findById(payload._id).catch(e => res.status(401).json(e));
		if(!user) res.status(401).json({message:"User not found"});
		req.user =  user;
		next();
	}else{
		res.status(401).json({message:"Authorization header not provided"})
	}
}

module.exports = verifyToken;