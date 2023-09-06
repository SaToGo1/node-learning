import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2]) => {
  console.log(text)
  console.log(text2)
})

// // METODO 1: MJS
// console.log('Leyendo el primer archivo ...')
// const text = await readFile('./archivo.txt', 'utf-8')
// console.log(text)

// console.log('Hacer cosas mientras lee el archivo ...')

// console.log('Leyendo el segundo archivo ...')
// const text2 = await readFile('./archivo2.txt', 'utf-8')
// console.log(text2)
