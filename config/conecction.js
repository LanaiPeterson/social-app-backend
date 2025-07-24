import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config ();

mongoose.connect(process.env.MONGODB_URI, {
  // You can add options here if needed, e.g. useNewUrlParser: true, useUnifiedTopology: true
});

export default mongoose.connection;
