const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");

const app = express();

/* =========================
CONFIGURAÇÕES
========================= */

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "./views");

/* =========================
MONGODB
========================= */

const MongoClient = mongodb.MongoClient;

/*
COLE SUA STRING DO MONGODB
*/

const uri = "mongodb+srv://vinicius:1234567890@cluster0.2t6m9o3.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

let db;
let usuarios;
let carros;

client.connect().then(() => {

    console.log("MongoDB conectado");

    db = client.db("lojacarros");

    usuarios = db.collection("usuarios");

    carros = db.collection("carros");

});

/* =========================
HOME
========================= */

app.get("/", (req, res) => {

    res.redirect("/index.html");

});

/* =========================
PÁGINAS
========================= */

app.get("/cadastro", (req, res) => {

    res.render("cadastro");

});

app.get("/login", (req, res) => {

    res.render("login");

});

app.get("/carros", async (req, res) => {

    const lista = await carros.find().toArray();

    res.render("carros", {
        carros: lista
    });

});

app.get("/gerencia_carros", async (req, res) => {

    const lista = await carros.find().toArray();

    res.render("gerencia_carros", {
        carros: lista
    });

});

/* =========================
CADASTRAR USUÁRIO
========================= */

app.post("/cadastrar_usuario", async (req, res) => {

    await usuarios.insertOne({

        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.senha

    });

    res.render("resposta", {
        resposta: "Usuário cadastrado!"
    });

});

/* =========================
LOGIN
========================= */

app.post("/logar_usuario", async (req, res) => {

    const usuario = await usuarios.findOne({

        login: req.body.login,
        senha: req.body.senha

    });

    if (usuario) {

        res.render("resposta", {
            resposta: "Login realizado com sucesso!"
        });

    } else {

        res.render("resposta", {
            resposta: "Usuário não encontrado!"
        });

    }

});

/* =========================
NOVO CARRO
========================= */

app.post("/novo_carro", async (req, res) => {

    await carros.insertOne({

        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano,
        quantidade: parseInt(req.body.quantidade)

    });

    res.redirect("/gerencia_carros");

});

/* =========================
ATUALIZAR CARRO
========================= */

app.post("/atualizar_carro", async (req, res) => {

    await carros.updateOne(

        {
            modelo: req.body.modelo
        },

        {
            $set: {
                quantidade: parseInt(req.body.quantidade)
            }
        }

    );

    res.redirect("/gerencia_carros");

});

/* =========================
REMOVER CARRO
========================= */

app.post("/remover_carro", async (req, res) => {

    await carros.deleteOne({

        modelo: req.body.modelo

    });

    res.redirect("/gerencia_carros");

});

/* =========================
VENDER CARRO
========================= */

app.post("/vender_carro", async (req, res) => {

    const carro = await carros.findOne({

        modelo: req.body.modelo

    });

    if (!carro) {

        return res.render("resposta", {
            resposta: "Carro não encontrado!"
        });

    }

    if (carro.quantidade > 0) {

        const novaQuantidade = carro.quantidade - 1;

        await carros.updateOne(

            {
                modelo: req.body.modelo
            },

            {
                $set: {
                    quantidade: novaQuantidade
                }
            }

        );

        if (novaQuantidade == 0) {

            res.render("resposta", {
                resposta: "Último carro vendido!"
            });

        } else {

            res.redirect("/gerencia_carros");

        }

    } else {

        res.render("resposta", {
            resposta: "Sem estoque!"
        });

    }

});

/* =========================
SERVIDOR
========================= */

app.listen(80, () => {

    console.log("Servidor rodando");
    console.log("http://localhost");

});