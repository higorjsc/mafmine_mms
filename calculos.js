function Calculo_rss(metodo) {

    function Get_value(id, defaultValue) {
        const value = document.getElementById(id).value
        return value ? Number(value.match(/\d+/)[0]) : defaultValue
    }

    function Atribuir_resultado_ubc_shb(entry, ucs, densidade, profundidade) {
        let resultado_numero = (ucs * 1e6) / (densidade * profundidade * 9.81)
        let resultado_texto = document.getElementById(entry)

        let titulo = document.getElementById("titulo-section-1").innerText

        if (!titulo.includes("CHARACTERISTICS")) {
            //Caso o titulo da seção 1 esteja em pt-br
            if (resultado_numero < 5) {
                resultado_texto.innerText = `Muito Fraca (${resultado_numero.toFixed(1)})`
            } else if (resultado_numero < 10) {
                resultado_texto.innerText = `Frágil (${resultado_numero.toFixed(1)})`
            } else if (resultado_numero < 15) {
                resultado_texto.innerText = `Moderada (${resultado_numero.toFixed(1)})`
            } else {
                resultado_texto.innerText = `Resistente (${resultado_numero.toFixed(1)})`
            }
        } else {
            //Caso o titulo da seção 1 esteja em ingles
            if (resultado_numero < 5) {
                resultado_texto.innerText = `Very Weak (${resultado_numero.toFixed(1)})`
            } else if (resultado_numero < 10) {
                resultado_texto.innerText = `Weak (${resultado_numero.toFixed(1)})`
            } else if (resultado_numero < 15) {
                resultado_texto.innerText = `Medium (${resultado_numero.toFixed(1)})`
            } else {
                resultado_texto.innerText = `Strong (${resultado_numero.toFixed(1)})`
            }
        }
    }

    function Atribuir_resultado_nicholas(entry, ucs, densidade, profundidade) {
        let resultado_numero = (ucs * 1e6) / (densidade * profundidade * 9.81)
        let resultado_texto = document.getElementById(entry)

        let titulo = document.getElementById("titulo-section-1").innerText

        if (!titulo.includes("CHARACTERISTICS")) {
            //Caso o titulo da seção 1 esteja em pt-br
            if (resultado_numero < 8) {
                resultado_texto.innerText = `Fraca (${resultado_numero.toFixed(1)})`
            } else if (resultado_numero >= 8 && resultado_numero <= 15) {
                resultado_texto.innerText = `Moderada (${resultado_numero.toFixed(1)})`
            } else {
                resultado_texto.innerText = `Forte (${resultado_numero.toFixed(1)})`
            }
        } else {
            //Caso o titulo da seção 1 esteja em ingles
            if (resultado_numero < 8) {
                resultado_texto.innerText = `Weak (${resultado_numero.toFixed(1)})`
            } else if (resultado_numero >= 8 && resultado_numero <= 15) {
                resultado_texto.innerText = `Medium (${resultado_numero.toFixed(1)})`
            } else {
                resultado_texto.innerText = `Strong (${resultado_numero.toFixed(1)})`
            }
        }
    }

    function Resultado_rss_nicholas(entry) {
        let elemento = document.getElementById(entry).innerText
        let titulo = document.getElementById("titulo-section-1").innerText
        let resultado

        if (!titulo.includes("CHARACTERISTICS")) {
            if (elemento.includes("Fraca")) {
                resultado = "fraca"
            } else if (elemento.includes("Moderada")) {
                resultado = "moderada"
            } else if (elemento.includes("Forte")) {
                resultado = "forte"
            } else {
                resultado = "moderada"
            }
        } else {
            if (elemento.includes("Weak")) {
                resultado = "fraca"
            } else if (elemento.includes("Medium")) {
                resultado = "moderada"
            } else if (elemento.includes("Strong")) {
                resultado = "forte"
            } else {
                resultado = "moderada"
            }
        }
        return resultado
    }

    function Resultado_rss_ubc_shb(entry) {
        let elemento = document.getElementById(entry).innerText
        let titulo = document.getElementById("titulo-section-1").innerText
        let resultado

        if (!titulo.includes("CHARACTERISTICS")) {
            if (elemento.includes("Muito Fraca")) {
                resultado = "muito_fraco"
            } else if (elemento.includes("Frágil")) {
                resultado = "fragil"
            } else if (elemento.includes("Moderada")) {
                resultado = "moderada"
            } else if (elemento.includes("Resistente")) {
                resultado = "resistente"
            } else {
                resultado = "moderada"
            }
        } else {
            if (elemento.includes("Very")) {
                resultado = "muito_fraco"
            } else if (elemento.includes("Weak")) {
                resultado = "fragil"
            } else if (elemento.includes("Medium")) {
                resultado = "moderada"
            } else if (elemento.includes("Strong")) {
                resultado = "resistente"
            } else {
                resultado = "moderada"
            }
        }
        return resultado
    }

    const densidade_ob = Get_value("densidade-ob", 2600)
    const densidade_hw = Get_value("densidade-hw", 2800)
    const densidade_fw = Get_value("densidade-fw", 2650)

    const profundidade_ob = Get_value("profundidade-ob", 600)
    const profundidade_hw = Get_value("profundidade-hw", 400)
    const profundidade_fw = Get_value("profundidade-fw", 800)

    const ucs_ob = Get_value("ucs-ob", 185)
    const ucs_hw = Get_value("ucs-hw", 220)
    const ucs_fw = Get_value("ucs-fw", 200)

    let resultado_rss
    if (metodo == "nicholas_81" || metodo == "nicholas_92") {
        Atribuir_resultado_nicholas("resultado-rss-ob", ucs_ob, densidade_ob, profundidade_ob)
        Atribuir_resultado_nicholas("resultado-rss-hw", ucs_hw, densidade_hw, profundidade_hw)
        Atribuir_resultado_nicholas("resultado-rss-fw", ucs_fw, densidade_fw, profundidade_fw)
        resultado_rss = {
            "rss_ob": Resultado_rss_nicholas("resultado-rss-ob"),
            "rss_hw": Resultado_rss_nicholas("resultado-rss-hw"),
            "rss_fw": Resultado_rss_nicholas("resultado-rss-fw")
        }
    } else {
        Atribuir_resultado_ubc_shb("resultado-rss-ob", ucs_ob, densidade_ob, profundidade_ob)
        Atribuir_resultado_ubc_shb("resultado-rss-hw", ucs_hw, densidade_hw, profundidade_hw)
        Atribuir_resultado_ubc_shb("resultado-rss-fw", ucs_fw, densidade_fw, profundidade_fw)
        resultado_rss = {
            "rss_ob": Resultado_rss_ubc_shb("resultado-rss-ob"),
            "rss_hw": Resultado_rss_ubc_shb("resultado-rss-hw"),
            "rss_fw": Resultado_rss_ubc_shb("resultado-rss-fw")
        }
    }
    return resultado_rss //Retorna o valor textual do RSS para a função Calculo
}

function Calculo_rmr() {

    function Calculo_gsi(entry) {
        //Converte um valor Q-System para RMR
        let gsi = Number(document.getElementById(entry).value)
        gsi = gsi === 0 ? 10.00 : gsi //atribui 10 como valor padrão caso nenhum seja informado
        let rmr_num = (gsi + 11.63) / 1.13
        let rmr
        if (rmr_num <= 20) {
            rmr = "muito_pobre"
        } else if (rmr_num > 20 && rmr_num <= 40) {
            rmr = "pobre"
        } else if (rmr_num > 40 && rmr_num <= 60) {
            rmr = "razoavel"
        } else if (rmr_num > 60 && rmr_num <= 80) {
            rmr = "boa"
        } else if (rmr_num > 80) {
            rmr = "muito_boa"
        }
        return rmr
    }

    function Calculo_q(entry) {
        //Converte um valor Q-System para RMR
        let q = Number(document.getElementById(entry).value)
        q = q === 0 ? 5.00 : q    //atribui 5 como valor padrão caso nenhum seja informado
        let rmr_num = ((9 * Math.log(q)) + 44)
        let rmr
        if (rmr_num <= 20) {
            rmr = "muito_pobre"
        } else if (rmr_num > 20 && rmr_num <= 40) {
            rmr = "pobre"
        } else if (rmr_num > 40 && rmr_num <= 60) {
            rmr = "razoavel"
        } else if (rmr_num > 60 && rmr_num <= 80) {
            rmr = "boa"
        } else if (rmr_num > 80) {
            rmr = "muito_boa"
        }
        return rmr
    }

    let resultado_rmr = {}
    const checkbox_gsi = document.getElementById("checkbox-gsi")
    const checkbox_rmr = document.getElementById("checkbox-rmr")
    const checkbox_q = document.getElementById("checkbox-q")

    //Condição para verificar qual botão foi acionado, Q-system, GSI ou RMR.
    if (checkbox_gsi.checked) {
        resultado_rmr = {
            "rmr_ob": Calculo_gsi("gsi-ob"), //Chama a função para converter o GSI do Orebody para RMR
            "rmr_hw": Calculo_gsi("gsi-hw"),
            "rmr_fw": Calculo_gsi("gsi-fw")
        }
    } else if (checkbox_rmr.checked) {
        resultado_rmr = {
            "rmr_ob": document.getElementById("rmr-ob").value, //Atribui o valor de RMR selecionado pelo usuário
            "rmr_hw": document.getElementById("rmr-hw").value,
            "rmr_fw": document.getElementById("rmr-fw").value
        }
    } else if (checkbox_q.checked) {
        resultado_rmr = {
            "rmr_ob": Calculo_q("q-ob"), //Chama a função para converter o GSI do Orebody para RMR
            "rmr_hw": Calculo_q("q-hw"),
            "rmr_fw": Calculo_q("q-fw")
        }
    }
    return resultado_rmr //Retorna o valor textual do RMR para a função Calculo
}

function Escrever_preferencias(preferencias) {
    let texto = document.getElementById("div-section-3") //obtém a div da seção 3
    texto.innerText = "" //limpa todo o texto da div da seção 3

    //Formata as chaves do dicionário com os resultados.   
    function Formatar(key) {

        let formatada = ""
        key = key.replace(/_/g, " ") //Substitui '_' por ' '
        let palavras = key.split(" ")
        for (let i in palavras) {
            formatada += palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1) + " " //Coloca a primeira letra da palavra em UpperCase
        }
        return formatada //Retorna a chave do dicionário para o Loop de impressão

    }

    let key_formatada
    //Imprime o valor do dicionário resultado seguido por sua chave. Cada chave é um metodo de lavra
    for (const [key, value] of preferencias) {

        key_formatada = Formatar(key)
        //Condição para manter a tabulação dos ifens, caso o numeral tenha menos de dois caracteres
        if (Number(value) < 10) {
            texto.innerText += value + "   " + "-" + "  " + key_formatada + "\n"
        } else {
            texto.innerText += value + "  " + "-" + "  " + key_formatada + "\n"
        }

    }

}

//OBTÉM OS INPUTS DE PESOS INSERIDOS OU CALCULADOS POR AHP
function Obter_pesos() {

    function Input_peso(id) {
        let peso = document.getElementById(id).value
        peso = peso === "" ? 1.00 : peso
        return peso
    }
    
    let pesos = {
        "geo": Input_peso("input-peso-geo"),
        "ob": Input_peso("input-peso-ob"),
        "hw": Input_peso("input-peso-hw"),
        "fw": Input_peso("input-peso-fw"),
        "economico": 1
    }

    return pesos
}
//OBTÉM OS INPUTS DE PESOS INSERIDOS OU CALCULADOS POR AHP
function Obter_pesos_ubc_shb(metodo) {

    function Input_peso(id) {
        let peso = document.getElementById(id).value
        peso = peso === "" ? 1.00 : peso
        return peso
    }
    
    let pesos = {
        "geo": Input_peso("input-peso-ubc-geo"),
        "ob": Input_peso("input-peso-ubc-ob"),
        "hw": Input_peso("input-peso-ubc-hw"),
        "fw": Input_peso("input-peso-ubc-fw"),
        "economico": 1
    }

    return pesos
}

//Função chamada a cada entrada do usuario. Conecta todos os calculos com a impressão dos resultados
function Calculo(metodo) {
    //Obtém os selects com as propriedades da geometria
    let geometria = document.querySelectorAll(".menu-geometria")
    let resultado_rss
    let pesos
    let fracture_spacing
    let fracture_strenght
    let resultado_rmr

    //Inicializa o dicionário com os resultados (preferências)
    let preferencias = {}
    if (metodo == "nicholas_81") {
        fracture_spacing = document.querySelectorAll(".menu-fracture-spacing")
        fracture_strenght = document.querySelectorAll(".menu-fracture-strenght")
        resultado_rss = Calculo_rss(metodo)
        preferencias = Preferencias_nicholas_81(geometria, resultado_rss, fracture_spacing, fracture_strenght)

    } else if (metodo == "nicholas_92") {
        fracture_spacing = document.querySelectorAll(".menu-fracture-spacing")
        fracture_strenght = document.querySelectorAll(".menu-fracture-strenght")
        resultado_rss = Calculo_rss(metodo)
        pesos = Obter_pesos()
        preferencias = Preferencias_nicholas_92(geometria, resultado_rss, fracture_spacing, fracture_strenght, pesos)
    } else if (metodo == "ubc") {
        resultado_rmr = Calculo_rmr()
        resultado_rss = Calculo_rss(metodo)
        pesos = Obter_pesos_ubc_shb()
        preferencias = Preferencias_ubc(geometria, resultado_rss, resultado_rmr, pesos)

    } else if (metodo == "shb") {
        resultado_rmr = Calculo_rmr()
        resultado_rss = Calculo_rss(metodo)
        valor_minerio = document.querySelector("#valor-minerio")
        pesos = Obter_pesos_ubc_shb()
        preferencias = Preferencias_shb(geometria, valor_minerio, resultado_rss, resultado_rmr, pesos)

    }

    // Converte o dicionário de resultados em uma matriz
    const matriz = Object.entries(preferencias)
    // Classifica a matriz  em ordem decrescente
    matriz.sort((a, b) => b[1] - a[1])
    // Converter a matriz classificada 
    preferencias = new Map(matriz)

    //Escreve os resultados na tela
    Escrever_preferencias(preferencias)

    //Altera a imagem da tela
    Mudar_imagem(metodo)

}


