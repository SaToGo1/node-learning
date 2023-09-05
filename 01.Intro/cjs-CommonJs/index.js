// Node.js no tiene window
// console.log(window) ==> REFERENCE ERROR
// console.log(typeof window) // => undefined

// console.log(globalThis) // Referencia a Variable global

// CommongJS require module
const { sum } = require('./sum')

console.log(sum(1, 2))
