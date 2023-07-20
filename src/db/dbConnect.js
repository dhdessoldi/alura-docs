import { MongoClient } from "mongodb";

const cliente = new MongoClient('inserir uri de conexão com o banco de dados no mongodb');

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