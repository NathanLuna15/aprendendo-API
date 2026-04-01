const BR = require("./estados_cidades.js");
const listaDeEstados = BR.listaDeEstados.estados

//lista de siglas
const getListaDeEstados = function(){
    
    let uf = []
    let lista
    let quantidade

    listaDeEstados.forEach(function(itemsigla){
        uf.push(itemsigla.sigla)
    })

    quantidade = uf.length
    lista = {uf, quantidade}

    console.log(lista)
    return lista
}

//estados e descrição
const getDadosEstado = function(siglaStados){
    let sigla = String(siglaStados).toUpperCase()
    let uf 

    for(let estados of listaDeEstados){
        if(sigla == estados.sigla){
            return uf = {
                uf : estados.sigla,
                descricao: estados.nome,
                capital: estados.capital,
                regiao: estados.regiao
            }
        }
    }
    return false
}

const getCapitalEstado = function(siglaStados){
    let sigla = String(siglaStados).toUpperCase()
    let resultado = false

    listaDeEstados.forEach(function(item){
        if(sigla == item.sigla){
            return resultado = {
                uf : item.sigla, descricao: item.nome, capital: item.capital, 
            }
        }
    })

    return resultado
}

const getEstadosRegiao = function(regiao){
    let regiaoEscolhida = String(regiao).toUpperCase()
    let uf = {
        "regiao": regiaoEscolhida.toUpperCase(),
        "estados": []
    }
    for (let estado of listaDeEstados) {
        if (regiaoEscolhida == String(estado.regiao).toUpperCase()) {
            uf.estados.push({
                "uf": estado.sigla, 
                "descricao": estado.nome
            })
        }
    }

    if (uf.estados.length === 0){
        return false
    }else{
        return uf
    }
}

const getCapitalPais = function () {
    let capitaisPais = {
        "capitais": []
    }

    listaDeEstados.forEach(function (pegarCapitais) {
        if (pegarCapitais.capital_pais) {
            capitaisPais.capitais.push({
                "capital_atual": pegarCapitais.capital_pais.capital,
                "uf": pegarCapitais.sigla,
                "descricao": pegarCapitais.nome,
                "capital": pegarCapitais.capital,
                "regiao": pegarCapitais.regiao,
                "capital_pais_ano_inicio": pegarCapitais.capital_pais.ano_inicio,
                "capital_pais_ano_termino": pegarCapitais.capital_pais.ano_fim
            })
        }
    })

    return capitaisPais
}

const getCidades = function (cidadesSigla) {
    let siglaInf = String(cidadesSigla).toUpperCase()
    let infoCidades
    let cidades = []

    for (let sigla of listaDeEstados) {
        if (siglaInf == String(sigla.sigla).toUpperCase()) {
            sigla.cidades.forEach(function (todasCidades) {
                cidades.push(todasCidades.nome)

                infoCidades = {
                    "uf": sigla.sigla,
                    "descricao": sigla.nome,
                    "quantidade_cidades": sigla.cidades.length,
                    "cidades": cidades
                }
            })
        }
    }

    if (cidades.length === 0)
        return false

    return infoCidades
}


module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
 }