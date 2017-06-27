import mongoose from 'mongoose';

const clients = new mongoose.Schema({
    name: {
      type: {
        last: String,
        first: {
          type: String,
          required: true 
        },
        middle: String
      },
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