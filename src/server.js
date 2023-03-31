import http from 'node:http'

const server = http.createServer((request, response) => {
  return response.end('Hellozinhow')
})

server.listen(3333)