const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');
const schema = mongoose.Schema;
const saltRounds = 10;

const usuariosSchema =  new schema({


	usuario:{
		type:String,
		unique:true,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	rol: {
		type: String,
		required: true,
		enum: ['admin', 'user']
	}

},{collection:"usuarios"});

function encriptarPassword(next){
	let usuario = this;
	bcrypt.genSalt(saltRounds, function(err, salt) {
		bcrypt.hash(usuario.password, salt, function(err, hash) {
			if(err) return next(err);
			usuario.password = hash;
			next();
		});
	});
}

usuariosSchema.pre('save', encriptarPassword);


module.exports= mongoose.model('usuarios', usuariosSchema);