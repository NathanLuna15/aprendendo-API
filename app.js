const express = require("express")
const cors = require("cors")

const app = express()

const corsOpitions = {
    origin: ["*"], //configuração  de origem da requisicão (IP ou dominio)
    methods: "GET", //configiração dos verbos que serão utilizado na API
    allowedHeaders: ["Content-type", "Authorization"] //configuração de permossoes
                    //tipo de dado   //autorização de acesso
}

// aplica as configurações do cors no app (EXPRES)
app.use(cors(corsOpitions))

//inporte do arquivo de funções 
const estadoCidade = require("./modulo/função.js")
const e = require("express")

//Endpointe listar os estados
app.get("/v1/senai/estados", function(request, response){
    let estados = estadoCidade.getListaDeEstados()
    response.json(estados)
    response.status(200)
})


app.get('/v1/senai/dados/estados/:uf', function(request, response){
    let sigla = request .params.uf
    let estado = estadoCidade.getDadosEstado(sigla)
    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.json({"mensage": "nenhum estado foi encomtado."})
        response.status(404)
    }
})

app.get('/v1/senai/capital/estados/:uf', function(request, response){
    let capital = request. params.uf
    let estado = estadoCidade.getCapitalEstado(capital)
    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.json({"mensage": "nenhum estado foi encomtado."})
        response.status(404)
    }
})



app.get("/cidades", function(request, response){
    response.json({"mensage": "testando a api"})
    response.status(200)
})


//fazer o startr na API(aguardando as requisisoes)
app.listen(8080, function(){
    console.log("API aguardando novas requisiçoes...")
})