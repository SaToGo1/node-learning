const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8') // text/plain, text/html, application/json

  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/imagen.png') {
    res.statusCode = 200 // OK
    fs.readFile('./esquema.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      }

      console.log('gets here')
      res.setHeader('Content-Type', 'image/png')
      res.end(data)
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // NOT FOUND
    res.end('<h1>404 Page Not Found</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server is listening on port http://localhost:${desiredPort}`)
})
