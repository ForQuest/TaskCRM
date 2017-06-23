import mongoose from 'mongoose';

const orders_active = new mongoose.Schema({
	order_id: {
		type: Number,
		required: true 
	},
	client: { 
		type: mongoose.Schema.Types.ObjectId,
		required: true 
	},
	start_time: {
		type: Date,
		required: true 
	},
	products: [mongoose.Schema.Types.ObjectId],
	discount: {
		type: Number,
		default: 0
	}
});

export default mongoose.model('Orders_active', orders_active);