// require('dotenv').config();
const express = require('express');
// create new express app and save it as "app"
const app = express();
const url = require('./secret')
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error' , (error) => console.error(error))
db.once('open' , () => console.log("connected to database"))
app.use(express.json());

const department = require('./route/department.js')
const team = require('./route/teams.js')
const user = require('./route/users.js')


app.use('/departments' , department )
app.use('/users' , user )
app.use('/teams' , team )


// make the server listen to requests
// app.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${PORT}/`);
// });


module.exports = app