import mongoose from 'mongoose';

const products = new mongoose.Schema({
	type: { 
		type: mongoose.Schema.Types.ObjectId,
		required: true 
	},
	name: {
		type: String,
		required: true 
	},
	desc: String,
	price: { 
		type: Number,
		required: true 
	},
	collect: [mongoose.Schema.Types.ObjectId]
});

export default mongoose.model('Products', products);