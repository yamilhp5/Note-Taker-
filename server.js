const express = require('express');
const apiRoutes = require ('./routes/apiRoutes');
const htmlRoutes = require ('./routes/htmlRoutes'); 

// Initialize the app and creating port
const app = express();
const PORT = process.env.PORT || 3001;

// Body parsing set up, static, and using route middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port 

app.listen(PORT,() => console.log(`Listening on PORT: ${PORT}`)); 