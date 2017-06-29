import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const orders_active = new mongoose.Schema({
	order_id: {
		type: Number,
		default: 0,
		required: true 
	},
	client: { 
		type: mongoose.Schema.Types.ObjectId,
		required: true 
	},
	start_time: {
		type: Date, 
		default: Date.now(), 
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
		default: 0
	},
	placement: mongoose.Schema.Types.ObjectId,
	status: {
		type: String,
		default: "Active"
	}
});

autoIncrement.initialize(mongoose.connection); 
orders_active.plugin(autoIncrement.plugin, { model: 'OrderId', field: 'order_id', startAt: 1, incrementBy: 1 });

export default mongoose.model('Orders_active', orders_active);