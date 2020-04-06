const express = require('express');
const mongoose = require('mongoose');

// Connection to database
mongoose.connect('mongodb://localhost:27017/urlshortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err));

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Import routes
const routes = require('./routes/api/links');

// Routes
app.use('/api/links', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})