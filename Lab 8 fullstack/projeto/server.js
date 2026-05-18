const express = require('express');
const path = require('path');

const app = express();


// Lista de usuários
let usuarios = [];


// Receber dados do formulário
app.use(express.urlencoded({ extended: true }));


// CSS
app.use(express.static('public'));


// Liberar HTML
app.use(express.static(__dirname));


// EJS
app.set('view engine', 'ejs');


// HOME
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'Home.html'));

});


// Home.html
app.get('/Home.html', (req, res) => {

    res.sendFile(path.join(__dirname, 'Home.html'));

});


// Projects.html
app.get('/Projects.html', (req, res) => {

    res.sendFile(path.join(__dirname, 'Projects.html'));

});


// Página cadastro
app.get('/cadastra', (req, res) => {

    res.sendFile(path.join(__dirname, 'Cadastro.html'));

});


// SALVAR CADASTRO
app.post('/cadastro', (req, res) => {

    const usuario = req.body.usuario;

    const senha = req.body.senha;

    usuarios.push({

        usuario,
        senha

    });

    res.send('Usuário cadastrado com sucesso!');

});


// Página login
app.get('/login', (req, res) => {

    res.sendFile(path.join(__dirname, 'Login.html'));

});


// Verificar login
app.post('/resposta', (req, res) => {

    const usuario = req.body.usuario;

    const senha = req.body.senha;

    let encontrado = false;

    for(let i = 0; i < usuarios.length; i++){

        if(
            usuarios[i].usuario === usuario &&
            usuarios[i].senha === senha
        ){

            encontrado = true;

        }

    }

    let mensagem;

    if(encontrado){

        mensagem = 'Login realizado com sucesso!';

    }else{

        mensagem = 'Usuário ou senha incorretos!';

    }

    res.render('resposta', { mensagem });

});


// Servidor
app.listen(80, '0.0.0.0', () => {

    console.log('Servidor rodando na porta 80');

});