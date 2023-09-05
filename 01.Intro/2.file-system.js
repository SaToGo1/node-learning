const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
  'es Fichero?', stats.isFile(),
  'es Directorio?', stats.isDirectory(),
  'es enlace symbolico?', stats.isSymbolicLink(),
  'Tamaño:', stats.size, 'bytes'
)
