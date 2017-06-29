import mongoose from 'mongoose';

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
		type: {
			start: Date,
			stop: {
				type: Date,
				default: Date.now()
			}
		},
		required: true
	},
	client: { 
		type: mongoose.Schema.Types.ObjectId,
		required: true   
	},
	products: {
		type: [{
			product_id: {
				type: mongoose.Schema.Types.ObjectId,
				required: true 
			},
			count: {
				type: Number,
				required: true 
			},
			collect: [mongoose.Schema.Types.ObjectId]
		}],
		required: true
	},
	discount: {
		type: Number,
		required: true 
	},
	status: String
});

export default mongoose.model('Orders', orders);