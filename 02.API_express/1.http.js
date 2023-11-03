const http = require('node:http')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'text/plain') // text/plain, text/html, application/json
    res.end('Bienvenido a mi página de inicio')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server is listening on port http://localhost:${desiredPort}`)
})
