import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io();

export function selecionarDocumento(nome) {
  socket.emit('selecionar_documento', nome, (texto) => {
    atualizaTextoEditor(texto)
  })
}

export function emitirTextoEditor(dados) {
  socket.emit('texto_editor', dados);
}

socket.on('texto_editor_clientes', (texto) => {
  atualizaTextoEditor(texto)
});

socket.on('excluir_documento_sucesso', (nome) => {
  alertarERedirecionar(nome);
})

export function emitirExcluirDocumento(nome) {
  socket.emit('excluir_documento', nome)
}