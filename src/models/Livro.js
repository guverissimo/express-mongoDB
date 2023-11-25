import mongoose, { Schema } from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    // titulo: { type: mongoose.Schema.Types.String, required: true } ou de forma abreviada String
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number }
}, { versionKey: false });

// "livros" e a nossa colecao que criamos no mongoDB
const livro = mongoose.model("livros", livroSchema);

export default livro;