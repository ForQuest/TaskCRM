import mongoose from 'mongoose';

const products_category = new mongoose.Schema({
	name: {
		type: String,
		required: true 
	},
	desc: String
});

export default mongoose.model('Products_category', products_category);