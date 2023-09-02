
// CALCULA O VALOR DA RSS A PARTIR DOS INPUTS DE DENSIDADE, PROFUNDIDADE E UCS. RETORNA O VALOR PARA A FUNÇÃO CÁLCULO.
function Calculo_rss() {
    let metodo = Obter_metodo()
    let idioma = Obter_idioma()

    // ATRIBUI UM VALOR PADRÃO AOS INPUTS RSS, CASO NENHUM VALOR TENHA SIDO INSERIDO
    let Obter_valores = (id, padrao) => {
        const value = document.getElementById(id).value
        return value ? Number(value.match(/\d+/)[0]) : padrao
    }

    // OBTÉM OS INPUTS PARA O CÁLCULO DA RSS OU ATRIBUI OS VALORES PADRÃO
    const densidade_ob = Obter_valores("densidade-ob", 2600)
    const densidade_hw = Obter_valores("densidade-hw", 2800)
    const densidade_fw = Obter_valores("densidade-fw", 2650)

    const profundidade_ob = Obter_valores("profundidade-ob", 600)
    const profundidade_hw = Obter_valores("profundidade-hw", 400)
    const profundidade_fw = Obter_valores("profundidade-fw", 800)

    const ucs_ob = Obter_valores("ucs-ob", 185)
    const ucs_hw = Obter_valores("ucs-hw", 220)
    const ucs_fw = Obter_valores("ucs-fw", 200)


    // ESCREVE OS RESULTADOS DO CÁLCULO DA RSS
    let Atribuir_resultado = (entry, ucs, densidade, profundidade) => {

        let resultado_numero = (ucs * 1e6) / (densidade * profundidade * 9.81)
        let resultado_texto = document.getElementById(entry)

        const texto = {
            pt: {
                muito_fraco: `Muito Fraca (${resultado_numero.toFixed(1)})`,
                fraca: `Fraca (${resultado_numero.toFixed(1)})`,
                moderada: `Moderada (${resultado_numero.toFixed(1)})`,
                forte: `Resistente (${resultado_numero.toFixed(1)})`
            },
            en: {
                muito_fraco: `Very Weak (${resultado_numero.toFixed(1)})`,
                fraca: `Weak (${resultado_numero.toFixed(1)})`,
                moderada: `Medium (${resultado_numero.toFixed(1)})`,
                forte: `Strong (${resultado_numero.toFixed(1)})`
            }
        }

        // VERIFICA QUAL VALOR TEXTUAL DE RSS DEVE SER ESCRITO NA TELA
        let resultado_final

        if ((metodo == "ubc" || metodo == "shb") && resultado_numero < 5) {
            resultado_final = "muito_fraco"
        } else if ((metodo == "ubc" || metodo == "shb") && resultado_numero < 10) {
            resultado_final = "fraca"
        } else if ((metodo == "ubc" || metodo == "shb") && resultado_numero < 15) {
            resultado_final = "moderada"
        } else if ((metodo == "ubc" || metodo == "shb") && resultado_numero >= 15) {
            resultado_final = "forte"
        } else if ((metodo == "nicholas_92" || metodo == "nicholas_81") && resultado_numero < 8) {
            resultado_final = "fraca"
        } else if ((metodo == "nicholas_92" || metodo == "nicholas_81") && resultado_numero <= 15) {
            resultado_final = "moderada"
        } else {
            resultado_final = "forte"
        }

        resultado_texto.innerText = texto[idioma][resultado_final]

        // retorna a chave dos pesos para calcular o método de lavra
        return resultado_final
    }

    // REALIZA O CÁLCULO E ESCREVE OS RESULTADOS
    let resultado_rss = {
        "rss_ob": Atribuir_resultado("resultado-rss-ob", ucs_ob, densidade_ob, profundidade_ob),
        "rss_hw": Atribuir_resultado("resultado-rss-hw", ucs_hw, densidade_hw, profundidade_hw),
        "rss_fw": Atribuir_resultado("resultado-rss-fw", ucs_fw, densidade_fw, profundidade_fw)
    }

    //Retorna o valor textual do RSS para a função Calculo
    return resultado_rss
}

// DEFINE O VALOR DO RMR, DIRETAMENTE OU POR CONVERSÃO, E RETORNA PARA A FUNÇÃO CÁLCULO
function Calculo_rmr() {

    // Converte um valor númerico do RMR em sua respectiva classe
    let Rmr_classe = (rmr_numerico) => {
        if (rmr_numerico <= 20) {
            return "muito_pobre"
        } else if (rmr_numerico > 20 && rmr_numerico <= 40) {
            return "pobre"
        } else if (rmr_numerico > 40 && rmr_numerico <= 60) {
            return "razoavel"
        } else if (rmr_numerico > 60 && rmr_numerico <= 80) {
            return "boa"
        } else if (rmr_numerico > 80) {
            return "muito_boa"
        }
    }

    //Converte um valor GSI para RMR
    let Calculo_gsi = (entry) => {
        let gsi = Number(document.getElementById(entry).value)
        gsi = gsi === 0 ? 10.00 : gsi //atribui 10 como valor padrão caso nenhum seja informado
        let rmr_numerico = (gsi + 11.63) / 1.13
        return Rmr_classe(rmr_numerico)
    }

    //Converte um valor Q-System para RMR
    let Calculo_q = (entry) => {
        let q = Number(document.getElementById(entry).value)
        q = q === 0 ? 5.00 : q    //atribui 5 como valor padrão caso nenhum seja informado
        let rmr_numerico = ((9 * Math.log(q)) + 44)
        return Rmr_classe(rmr_numerico)
    }

    let resultado_rmr = {}
    // Obtém o valor do radio-button RMR-GSI-Q
    let radio = document.querySelector("input[name='radio-rmr-q-gsi']:checked").value

    //Condição para verificar qual botão foi acionado, Q-system, GSI ou RMR.
    if (radio == "gsi") {
        resultado_rmr = {
            "rmr_ob": Calculo_gsi("gsi-ob"), //Chama a função para converter o GSI do Orebody para RMR
            "rmr_hw": Calculo_gsi("gsi-hw"),
            "rmr_fw": Calculo_gsi("gsi-fw")
        }
    } else if (radio == "rmr") {
        resultado_rmr = {
            "rmr_ob": document.getElementById("rmr-ob").value, //Atribui o valor de RMR selecionado pelo usuário
            "rmr_hw": document.getElementById("rmr-hw").value,
            "rmr_fw": document.getElementById("rmr-fw").value
        }
    } else if (radio == "q") {
        resultado_rmr = {
            "rmr_ob": Calculo_q("q-ob"), //Chama a função para converter o GSI do Orebody para RMR
            "rmr_hw": Calculo_q("q-hw"),
            "rmr_fw": Calculo_q("q-fw")
        }
    }
    return resultado_rmr //Retorna o valor textual do RMR para a função Calculo
}

// ESCREVE O RANKING DE MÉTODOS DE LAVRA NA TELA
function Escrever_preferencias(preferencias) {
    let div_section_3 = document.getElementById("div-section-3") //obtém a div da seção 3
    div_section_3.innerHTML = ""

    //Exemplo de formatação: recebe "room_and_pilar" e devolve "Room & Pillar"
    let Formatar = (key) => {
        let formatada = ""
        key = key.replace(/_/g, " ") //Substitui '_' por ' '
        let palavras = key.split(" ")
        for (let i in palavras) {
            formatada += palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1) + " " //Coloca a primeira letra da palavra em UpperCase
        }
        formatada = formatada.replace("And", "&") //Substitui 'And' por '&'
        return formatada //Retorna a chave do dicionário para o Loop de impressão
    }

    let Criar_span = (id) => {
        id.replace(/_/g, "-") //Substitui '_' por '-' para o id do span
        // Criar o ponto
        const span = document.createElement("span")
        span.id = id
        span.classList.add("span-metodos-lavra") //Estilo definido em "estilos.css"
        div_section_3.appendChild(span)
        return span
    }

    let key_formatada
    let span_metodo_lavra
    //Imprime o valor do dicionário resultado seguido por sua chave. Cada chave é um metodo de lavra
    for (const [key, value] of preferencias) {
        // Obtém o span que vai conter o método de lavra correspondente a key
        span_metodo_lavra = Criar_span(key)
        // formata a key para obter o texto a ser escrito
        key_formatada = Formatar(key)
        //Condição para manter a tabulação dos ifens, caso o numeral tenha menos de dois caracteres
        if (Number(value) < 10) {
            span_metodo_lavra.innerText += value + " " + "-" + " " + key_formatada + "\n"
        } else {
            span_metodo_lavra.innerText += value + " " + "-" + " " + key_formatada + "\n"
        }

    }

}

//OBTÉM OS INPUTS DE PESOS INSERIDOS OU CALCULADOS POR AHP NO MÉTODO DE NICHOLAS 1992 E RETORNA PARA A FUNÇÃO CÁLCULO
function Obter_pesos() {
    function Input_peso(id) {
        let peso = document.getElementById(id).value
        return peso === "" ? 1.00 : parseFloat(peso)
    }

    let select_pesos = document.getElementById("menu-pesos") ? document.getElementById("menu-pesos").value : null

    let pesos = {
        "geo": 1.00,
        "ob": 1.00,
        "hw": 1.00,
        "fw": 1.00,
    }

    if (select_pesos == 1) {
        pesos["ob"] = pesos["hw"] = pesos["fw"] = 1.33
    } else if (select_pesos == 2) {
        pesos["ob"] = 0.75
        pesos["hw"] = 0.60
        pesos["fw"] = 0.38
    } else if (select_pesos == 3) {
        pesos["hw"] = 0.80
        pesos["fw"] = 0.50
    } else if (select_pesos == 4) {
        pesos["geo"] = Input_peso("input-peso-geo")
        pesos["ob"] = Input_peso("input-peso-ob")
        pesos["hw"] = Input_peso("input-peso-hw")
        pesos["fw"] = Input_peso("input-peso-fw")
    }

    return pesos
}

//CONECTA TODOS OS CÁLCULOS RELACIONADOS AO MÉTODO DE LAVRA. A FUNÇÃO É CHAMADA A CADA INPUT DO USUÁRIO.
function Calculo() {

    // Obtém os selects com as propriedades da geometria
    let geometria = document.querySelectorAll(".menu-geometria")
    let resultado_rss = Calculo_rss()
    let fracture_spacing = document.querySelectorAll(".menu-fracture-spacing") ?? null
    let fracture_strenght = document.querySelectorAll(".menu-fracture-strenght") ?? null
    let valor_minerio = document.querySelector("#valor-minerio") ?? null
    let pesos = Obter_pesos()
    let metodo = Obter_metodo()

    // Inicializa o dicionário com os resultados (preferências)
    let preferencias = {}
    if (metodo == "nicholas_81") {
        preferencias = Preferencias_nicholas_81(geometria, resultado_rss, fracture_spacing, fracture_strenght)
    } else if (metodo == "nicholas_92") {
        preferencias = Preferencias_nicholas_92(geometria, resultado_rss, fracture_spacing, fracture_strenght, pesos)
    } else if (metodo == "ubc") {
        let resultado_rmr = Calculo_rmr()
        preferencias = Preferencias_ubc(geometria, resultado_rss, resultado_rmr)
    } else if (metodo == "shb") {
        let resultado_rmr = Calculo_rmr()
        preferencias = Preferencias_shb(geometria, valor_minerio, resultado_rss, resultado_rmr)
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
    Mudar_imagem()

}


