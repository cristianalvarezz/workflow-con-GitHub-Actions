
const usuario: string = (globalThis as { process?: { env?: { USERNAME?: string } } }).process?.env?.USERNAME || "Desarrollador";

const mensaje: string = `¡Hola ${usuario}! Bienvenido a GitHub Actions 🚀`;

console.log(mensaje);