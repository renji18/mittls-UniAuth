import jwt from "jsonwebtoken"

type JWTOptions = {
  secret: string
  expiresIn?: string | number
}

class JWTAuth {
  private secret: string
  private expiresIn?: string | number

  constructor(options: JWTOptions) {
    this.secret = options.secret
    this.expiresIn = options.expiresIn || "1h"
  }

  public generateToken(payload: object): string {
    return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn })
  }

  public verifyToken(token: string): string | object {
    try {
      return jwt.verify(token, this.secret)
    } catch (error) {
      throw new Error("Invalid Token")
    }
  }
}

export default JWTAuth
