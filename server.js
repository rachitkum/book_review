require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb+srv://admin:DcgLiZ9rWysOPZ4G@cluster0.y6hrman.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));