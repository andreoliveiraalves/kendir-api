require('dotenv').config()
const express = require('express');
const app = express();  
const cors = require('cors')
const port = process.env.PORT || 3000
const sequelize = require('./utilities/sequelize').sequelizeConnection
const rota_desafios = require('./routes/desafios')
const rota_escolas = require('./routes/escolas')
const rota_professores = require('./routes/professores')
const rota_turmas = require('./routes/turmas')
const models = require('./models/models')
const utilities = require('./utilities/jwt')
const expressSwagger = require('express-swagger-generator')(app);
const options = require('./swagger_conf'); 
expressSwagger(options)


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
    res.send(`<h1>Bem vindo à API kendir professor</h1>
    <br><p>Para mais informação pode consultar o nosso <a href="https://github.com/andreoliveiraalves/kendir-api">
    github</a></p>`)
});

app.use('/desafios', rota_desafios)
app.use('/escolas', rota_escolas)
app.use('/professores', rota_professores)
app.use('/turmas', rota_turmas)
app.listen(port,()=> {
    console.log('Server running on port ' + port); 
})