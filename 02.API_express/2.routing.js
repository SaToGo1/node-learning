const http = require('node:http') // protocolo HTTP

const processRequest = (req, res) => {
  const { method, url } = req
}

const server = http.createServer(processRequest)

const desiredPort = 3000
server.listen(desiredPort, () => {
  console.log(`Server is listening on port http://localhost:${desiredPort}`)
})
