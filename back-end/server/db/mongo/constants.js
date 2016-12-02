export const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://localhost/ReactWebpackNode';
export const expires_in = 3600;

export default {
  db
};
