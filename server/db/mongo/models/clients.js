import mongoose from 'mongoose';

const full_name = new mongoose.Schema({
    last: String,
    first: {
      type: String,
      required: true 
    },
    middle: String
});

const clients = new mongoose.Schema({
    name: {
      type: full_name,
      required: true 
    },
    phone: Number,
    email: String,
    birthday: Date,
    create_Date: { 
      type: Date, 
      default: Date.now() 
     }
});

export default mongoose.model('Clients', clients);