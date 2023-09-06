const fs = require('node:fs/promises');

(async () => {
  console.log('Leyendo el primer archivo ...')
  const text = await fs.readFile('./archivo.txt', 'utf-8')
  console.log(text)

  console.log('Hacer cosas mientras lee el archivo ...')

  console.log('Leyendo el segundo archivo ...')
  const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
  console.log(text2)
})()
