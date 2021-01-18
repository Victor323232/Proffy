const express = require('express')//aspas simples esta pegando o algo
const server = express("instagram Follow")
const Follow = express("master")
server.use(express.static("public"))
.get( "/",( req, res) => { ///=> e uma função
  return res.sendFile(__dirname + "/views/index.html")

})

.listen(5500)//esse e a porta do meu server
    