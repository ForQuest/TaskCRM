import mongoose from 'mongoose';

const modules = new mongoose.Schema({
	name: {
		type: String,
		required: true 
	},
	desc: String
});

export default mongoose.model('Modules', modules);