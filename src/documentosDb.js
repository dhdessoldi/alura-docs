import { documentosColecao } from "./dbConnect.js";

export function obterDocumentos() {
  const documentos = documentosColecao.find().toArray();
  return documentos;
}

export function adicionarDocumento(nome) {
  const resultado = documentosColecao.insertOne({
    nome,
    texto: ''
  })
  return resultado
}

export function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({
    nome
  });

  return documento;
}

export function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne({
    nome
  }, {
    $set: {
      texto
    }
  });
  return atualizacao;
}

export function excluirDocumento(nome) {
  const resultado = documentosColecao.deleteOne({ nome });
  return resultado;
}
