const express = require('express');

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

app.use('/api/teams', require('./routes/api/team'));
app.use('/api/teamMembers', require('./routes/api/teamMember'));
app.use('/api/tasks', require('./routes/api/task'));
app.use('/api/assignTask', require('./routes/api/assignTask'));
