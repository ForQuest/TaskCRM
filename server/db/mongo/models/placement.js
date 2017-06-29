import mongoose from 'mongoose';

const placements = new mongoose.Schema({
    name: {
      type: String,
      required: true 
    },
    desc: String,
    orders: [mongoose.Schema.Types.ObjectId]
});

export default mongoose.model('Placements', placements);