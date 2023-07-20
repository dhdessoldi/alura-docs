import { obterCookie } from "../utils/cookies.js";
import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io('/usuarios', {
  auth: {
    token: obterCookie('tokenJwt')
  }
});

socket.on('connect_error', (error) => {
  alert(error);
  window.location.href = '/login/index.html';
})


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