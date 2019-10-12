const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');
const cors = require('cors');

//connect Db
connectDB();


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use(cors());
//define the routes
app.use('/api/user', require('./routes/user'));


// Serve static assets if were in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));