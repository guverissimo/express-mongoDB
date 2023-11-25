import mongoose from "mongoose";

async function conectaNaDataBase() {
    // String de conexao fica no site da mongoDB
    // mongodb+srv://admin:{senha}@cluster0.bjebhzq.mongodb.net/{nome da Data Base }?retryWrites=true&w=majority
    mongoose.connect('')
    return mongoose.connection;
};

export default conectaNaDataBase;
