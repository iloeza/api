const mongoose = require('mongoose');
const schema = mongoose.Schema;

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

module.exports(mongoose.model('usuarios', usuariosSchema));