require('dotenv').config()
const express = require('express');
const app = express();  
const cors = require('cors')
const port = process.env.PORT ?? 3000
const { Sequelize} = require('sequelize')
const models = require('./models/models')
const sequelize = require('./utilities/sequelize').sequelizeConnection
const rota_desafios = require('./routes/desafios')

sequelize.authenticate().then(function(errors) { 
    if (errors) {
        console.error('Unable to connect to the database:', errors);
    } else {
        console.log('connected to mysql');
    }
 });

app.use(express.json());
app.use(cors()); 

app.get("/", (req, res) => {
    res.send()
});
app.use('/desafios', rota_desafios)

app.listen(port,()=> {
    console.log('Server running on port ' + port); 

})