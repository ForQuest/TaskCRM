import mongoose from 'mongoose';

const module_worktime = new mongoose.Schema({
	user: { 
		type: mongoose.Schema.Types.ObjectId,
		required: true 
	},
	time: {
		type: {
		    start: Date,
		    stop: Date
		},
		required: true 
	}
});

export default mongoose.model('Module_worktime', module_worktime);