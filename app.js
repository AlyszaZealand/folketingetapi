const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorHandler');
const personRoutes = require('./routes/personRoutes')

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', personRoutes);
app.use(errorHandler);

mongoose.connect('mongodb://127.0.0.1:27017/folketingetdb')
    .then(() => console.log('MongoDB tilsluttet'))
    .catch(err => console.error('MongoDB fejl:', err));



app.listen(3000, () => console.log('Server klar på http://localhost:3000/api/'));