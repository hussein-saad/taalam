const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

require('dotenv').config();
const app = require('./app');

const mongoDB = process.env.MONGODB_CLOUD_URL;
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await mongoose.connect(mongoDB);
    console.log('MongoDB is Connected...');

    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    process.on('unhandledRejection', (err) => {
      console.log('UNHANDLED REJECTION! Shutting down...');
      console.log(err.name, err.message);
      server.close(() => process.exit(1));
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  }
}

startServer();
