import JWTAuth from "./methods/jwt"

function greet(name?: string): string {
  return `Hello, ${name ? name : "User"}! Welcome to UniAuth!`
}

export { greet, JWTAuth }
