const express = require('express');
const { connect } = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;
const connectDB = require('./database/database');


// INIT Middleware
app.use(express.json({extended: false}));

app.get('/', (req,res) => {
    res.send("API is UP!!!!!");
});

app.listen(PORT, () => {
    console.log(`Server is started on PORT ${PORT}`);
});

connectDB();

app.use('/api/users', require('./routes/api/user'));
