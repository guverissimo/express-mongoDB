import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

// Fazer a conexao
const conexao = await conectaNaDataBase();
// se a conexao nao der certo
conexao.on('error', (erro) => {
    console.error("erro de conexao", erro);
});
// se a conexao ta certa
conexao.once("open", () => {
    console.log("Conxecao com banco feita com sucesso");
})

const app = express();
// Middleware
// Todo o body sera passado para json em cada requisicao
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

// BUSCAR TODOS OS LIVROS
app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({})
    res.status(200).json(listaLivros);
});

// BUSCAR UM LIVRO ESPECIFICO PELO ID PASSADO NA URL
app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index])
})

// CADASTRAR UM NOVO LIVRO
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso")
});

// ALTERAR O TITULO DO LIVRO
app.put("/livros/:id", (req, res)=> {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(201).send("Alterado com sucesso")
})

// DELETAR UM LIVRO
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro Removido com sucesso")
})

export default app;
