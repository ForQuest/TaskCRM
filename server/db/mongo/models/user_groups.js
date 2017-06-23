import mongoose from 'mongoose';

const user_groups = new mongoose.Schema({
  name: {
  	type: String,
	unique: true, 
  	required: true
  },
  access: [mongoose.Schema.Types.ObjectId]
});

export default mongoose.model('User_groups', user_groups); 