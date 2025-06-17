import { SignJWT, jwtVerify } from "jose";
import { createSecretKey } from "crypto";

const segredoJwt = process.env.JWT_SECRET || "meuSegredoSuperSecreto";
const secret = createSecretKey(segredoJwt, "utf-8");

export function criaJwt(payload) {
  return new Promise((resolve, reject) => {
    new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setSubject("login do usuario da API")
      .setExpirationTime("1h")
      .sign(secret)
      .then(resolve)
      .catch(reject);
  });
}

export function validaJwt(jwt) {
  return new Promise((resolve, reject) => {
    jwtVerify(jwt, secret)
      .then(({ payload }) => resolve(payload))
      .catch(reject);
  });
}
