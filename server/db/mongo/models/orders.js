import mongoose from 'mongoose';

const exec_time = new mongoose.Schema({
	start: Date,
	stop: Date
});

const product = new mongoose.Schema({
	product_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true 
	},
	count: {
		type: Number,
		required: true 
	},
	attr: [mongoose.Schema.Types.ObjectId]
});

const orders = new mongoose.Schema({
	order_id: {
		type: Number,
		required: true
	},
	cost: {
		type: Number,
		required: true
	},
	time: {
		type: exec_time,
		required: true
	},
	client: { 
		type: mongoose.Schema.Types.ObjectId,
		required: true 
	},
	products: {
		type: [product],
		required: true
	},
	discount: {
		type: Number,
		required: true 
	}
});

export default mongoose.model('Orders', orders);