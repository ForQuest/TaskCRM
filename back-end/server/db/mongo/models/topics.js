/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const TopicSchema = new mongoose.Schema({
  id: String,
  text: String,
  count: { type: Number, min: 0 },
  startDate: { type: Date, default: Date.now() },
  stopDate: { type: Date }
});

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Topic', TopicSchema);

