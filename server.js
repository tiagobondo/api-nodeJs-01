import http from 'node:http'
import app from './app.js'

const server = http.createServer(app)
const port = 8080

//Server listen port 8080
server.listen(port, ()=>{
  console.log(`Server Starting at http://localhost:${port}`)
})