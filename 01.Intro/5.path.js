const path = require('node:path')

// unir rutas con path.join
// -> unix /
// -> windows \

console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
// `/content/subfolder/test.txt`
console.log(filePath)

const base = path.basename('/tmp/secret-files/passwords.txt')
console.log(base)

const filename = path.basename('/tmp/secret-files/passwords.txt', '.txt')
console.log(filename)

const extension = path.extname('image.jpg')
console.log(extension)
