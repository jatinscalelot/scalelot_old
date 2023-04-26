import path from 'path';
import {readFile} from 'fs';
import {promisify} from 'util';
import {sign, verify} from 'jsonwebtoken';
import {plainToInstance} from "class-transformer";
import {BadTokenError, InternalError, TokenExpiredError} from "../error/ApiError";
import Logger from "../utils/Logger";
import SessionPayload from "../utils/other/SessionPayload";

export default class JWT {
  private static readPublicKey(): Promise<string> {
    return promisify(readFile)(path.join(__dirname, '../../keys/scalelot.public.pem'), 'utf8');
  }

  private static readPrivateKey(): Promise<string> {
    return promisify(readFile)(path.join(__dirname, '../../keys/scalelot.private.pem'), 'utf8');
  }

  public static async encode(payload: any): Promise<string> {
    const cert = await this.readPrivateKey();
    if (!cert) throw new InternalError('Token generation failure');
    // @ts-ignore
    return promisify(sign)({ ...payload }, cert, { algorithm: 'RS256' });
  }

  /**
   * This method checks the token and returns the decoded data when token is valid in all respect
   */
  public static async validateSessionToken(token: string): Promise<any> {
    const cert = await this.readPublicKey();
    try {
      // @ts-ignore
      return (await promisify(verify)(token, cert)) as SessionPayload;
    } catch (e: any) {
      Logger.debug(e);
      if (e && e.name === 'TokenExpiredError') throw new TokenExpiredError();
      // throws error if the token has not been encrypted by the private key
      throw new BadTokenError();
    }
  }

  /**
   * This method checks the token and returns the decoded data when token is valid in all respect
   */
  public static async validateCSRFToken(token: string): Promise<any> {
    const cert = await this.readPublicKey();
    try {
      // @ts-ignore
      return (await promisify(verify)(token, cert)) as CSRFPayload;
    } catch (e: any) {
      Logger.debug(e);
      if (e && e.name === 'TokenExpiredError') throw new TokenExpiredError();
      // throws error if the token has not been encrypted by the private key
      throw new BadTokenError();
    }
  }

  /**
   * Returns the decoded payload if the signature is valid even if it is expired
   */
  public static async decodeSessionToken(token: string): Promise<any> {
    const cert = await this.readPublicKey();
    try {
      // @ts-ignore
      return plainToInstance(SessionPayload, (await promisify(verify)(token, cert, { ignoreExpiration: true })) );
    } catch (e) {
      Logger.debug(e);
      throw new BadTokenError();
    }
  }

  /**
   * Returns the decoded payload if the signature is valid even if it is expired
   */
  public static async decodeCSRFToken(token: string): Promise<any> {
    const cert = await this.readPublicKey();
    try {
      // @ts-ignore
      return (await promisify(verify)(token, cert, { ignoreExpiration: true })) as CSRFPayload;
    } catch (e) {
      Logger.debug(e);
      throw new BadTokenError();
    }
  }
}
