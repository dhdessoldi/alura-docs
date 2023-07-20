import { definirCookie } from "../utils/cookies.js";

const socket = io();

export function emitirLogarUsuario(dados) {
  socket.emit('logar_usuario', dados)
}

socket.on('autenticacao_sucesso', (tokenJwt) => {
  definirCookie('tokenJwt', tokenJwt);
  alert('Usuário logado com sucesso!');
  window.location.href = '/';
})


socket.on('autenticacao_erro', () => alert('Erro na autenticação.'))
socket.on('usuario_nao_encontrado', () => alert('Usuário não encontrado.'))
