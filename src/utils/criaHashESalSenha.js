import { randomBytes, scryptSync } from 'crypto';

export default function criaHashESalSenha(senhaDigitada) {
  const salSenha = randomBytes(16).toString('hex');
  const hashSenha = scryptSync(senhaDigitada, salSenha, 64).toString('hex');

  return { salSenha, hashSenha }
}