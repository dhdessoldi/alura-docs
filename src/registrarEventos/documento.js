import { atualizaDocumento, encontrarDocumento, excluirDocumento } from "../db/documentosDb.js";

export default function registrarEventosDocumento(socket, io) {
  socket.on('selecionar_documento', async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    console.log(documento)

    if (documento) {
      devolverTexto(documento.texto);
    };
  });

  socket.on('texto_editor', async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto)
    console.log(atualizacao)
    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit('texto_editor_clientes', texto);
    }
  });

  socket.on('excluir_documento', async (nome) => {
    const resultado = await excluirDocumento(nome);

    if (resultado.deletedCount) {
      io.emit('excluir_documento_sucesso', nome);
    }
  })
}