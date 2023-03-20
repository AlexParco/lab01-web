const http = require('http')
fs = require('fs')


const server = http.createServer((solicitud, respuesta) => {
  fs.readFile('view/main.html', (error, html) => {
    respuesta.write(html)
    respuesta.end()
  })
})

server.listen(8080)


