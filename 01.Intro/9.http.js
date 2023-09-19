const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

server.listen(0, () => {
  console.log(`Server is listening on port http://localhost:${server.address().port}`)
})
