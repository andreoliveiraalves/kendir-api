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
const rota_alunos = require('./routes/alunos')
const models = require('./models/models')
const utilities = require('./utilities/jwt')
const expressSwagger = require('express-swagger-generator')(app);
const options = require('./swagger_conf'); 
expressSwagger(options)

const auth = function(req, res, next) {
    let exceptions = ['/','/professores', '/api-docs']; 
    if(exceptions.indexOf(req.url) >= 0) {
        next(); 
    } else {
        utilities.validateToken(req.headers.authorization, (result) => {
            if(result) {
                next(); 
            } else {
                res.status(401).send("Invalid Token"); 
            }
        })
    }
}

sequelize.authenticate().then(function(errors) { 
    if (errors) {
        console.error('Unable to connect to the database:', errors);
    } else {
        console.log('connected to mysql');
    }
 });

app.use(express.json());
app.use(cors());
app.use(auth)
app.get("/", (req, res) => {
    res.send(`<h1>Bem vindo à API kendir professor</h1>
    <br><p>Para mais informação pode consultar o nosso <a href="https://github.com/andreoliveiraalves/kendir-api">
    github</a></p>`)
});

app.use('/desafios', rota_desafios)
app.use('/escolas', rota_escolas)
app.use('/professores', rota_professores)
app.use('/turmas', rota_turmas)
app.use('/alunos', rota_alunos)
app.listen(port,()=> {
    console.log('Server running on port ' + port); 
})