import criaHashESalSenha from "../utils/criaHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

export function encontrarUsuario(nome) {
  return usuariosColecao.findOne({ nome });
};

export function cadastrarUsuario({ nome, senha }) {
  const { hashSenha, salSenha } = criaHashESalSenha(senha);
  return usuariosColecao.insertOne({ nome, hashSenha, salSenha });
};