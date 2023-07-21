const conexoesDocumentos = [];

export function encontrarConexao(nomeDocumento, nomeUsuario) {
  return conexoesDocumentos.find((conexao) => {
    return (
      conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario
    );
  });
}

export function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
};

export function obterUsuariosDocumento(nomeDocumento) {
  return conexoesDocumentos
    .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
};

export function removerConexao(nomeDocumento, nomeUsuario) {
  const indice = conexoesDocumentos.findIndex((conexao) => {
    return (
      conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario
    );
  });
  if (indice !== -1) {
    conexoesDocumentos.splice(indice, 1);
  };
  console.log(conexoesDocumentos)
};