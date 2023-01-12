require('dotenv').config()
const express = require('express');
const app = express();  
const cors = require('cors')
const port = process.env.PORT ?? 3000
const sequelize = require('./utilities/sequelize').sequelizeConnection
const rota_alunos = require('./routes/alunos')
const rota_desafios = require('./routes/desafios')
const rota_escolas = require('./routes/escolas')
const rota_jogos = require('./routes/jogos')
const rota_modulos = require('./routes/modulos')
const rota_niveis = require('./routes/niveis')
const rota_professores = require('./routes/professores')
const rota_rondas = require('./routes/rondas')
const rota_turmas = require('./routes/turmas')
const rota_admin = require('./routes/admin')
const models = require('./models/models')
const utilities = require('./utilities/jwt')



sequelize.authenticate().then(function(errors) { 
    if (errors) {
        console.error('Unable to connect to the database:', errors);
    } else {
        console.log('connected to mysql');
    }
 });

 const auth = function(req, res, next) {
    let exceptions = ['/', '/admin/login', '/admin/register']; 
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

app.use(express.json());
app.use(cors()); 
app.use(auth);

app.get("/", (req, res) => {
    res.send(`<h1>Bem vindo à API kendir professor</h1>
    <br><p>Para mais informação pode consultar o nosso <a href="https://github.com/andreoliveiraalves/kendir-api">
    github</a></p>`)
});

app.use('/alunos', rota_alunos)
app.use('/desafios', rota_desafios)
app.use('/escolas', rota_escolas)
app.use('/jogos', rota_jogos)
app.use('/modulos', rota_modulos)
app.use('/niveis', rota_niveis)
app.use('/professores', rota_professores)
app.use('/rondas', rota_rondas)
app.use('/turmas', rota_turmas)
app.use('/admin', rota_admin)

app.listen(port,()=> {
    console.log('Server running on port ' + port); 
})