import { MongoClient } from "mongodb";

const cliente = new MongoClient('mongodb+srv://dhdessoldi:admin123@cluster0.oparpnf.mongodb.net/?retryWrites=true&w=majority');

let documentosColecao, usuariosColecao;

try {
  await cliente.connect();
  const db = cliente.db('alura-websockets')
  documentosColecao = db.collection('documentos')
  usuariosColecao = db.collection('usuarios')

  console.log('Conectado ao banco de dados com sucesso!')
} catch (error) {
  console.log(error);
}

export { documentosColecao, usuariosColecao };