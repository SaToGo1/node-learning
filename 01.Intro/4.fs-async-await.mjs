import { readFile } from 'node:fs/promises'

// METODO 1: MJS
console.log('Leyendo el primer archivo ...')
const text = await readFile('./archivo.txt', 'utf-8')
console.log(text)

console.log('Hacer cosas mientras lee el archivo ...')

console.log('Leyendo el segundo archivo ...')
const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log(text2)
