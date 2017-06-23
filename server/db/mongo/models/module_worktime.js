import mongoose from 'mongoose';

const worktime = new mongoose.Schema({
    start: Date,
    stop: Date
});

const module_worktime = new mongoose.Schema({
	user: { 
		type: mongoose.Schema.Types.ObjectId,
		required: true 
	},
	time: {
		type: worktime,
		required: true 
	}
});

export default mongoose.model('Module_worktime', module_worktime);