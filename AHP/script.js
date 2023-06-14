function Open_pop_up_help() {

    const titulo = document.getElementById("titulo_section_1").innerText

    let idioma = titulo.includes("CHARACTERISTICS") ? "en" : "pt"

    const parametro = idioma
    let encoded_id = ""
    if (idioma == "en") {
        encoded_id = "UBC\\AHP\\pop_up_help_en.html?" + encodeURIComponent(parametro)
    } else {
        encoded_id = "UBC\\AHP\\pop_up_help_pt.html?" + encodeURIComponent(parametro)
    }

    window.open(encoded_id, "_blank", "width=650,height=650")

}


function Retornar_valor() {
    // Obtém os pesos calculados por AHP
    const td_peso_geo = document.querySelector("#td_peso_geo").innerText
    const td_peso_ob = document.querySelector("#td_peso_ob").innerText
    const td_peso_hw = document.querySelector("#td_peso_hw").innerText
    const td_peso_fw = document.querySelector("#td_peso_fw").innerText

    // Acessa a janela principal através de window.opener
    const janela_principal = window.opener

    let input_peso_geo = janela_principal.document.getElementsByName("input-peso-geo")[0]
    let input_peso_ob = janela_principal.document.getElementsByName("input-peso-ob")[0]
    let input_peso_hw = janela_principal.document.getElementsByName("input-peso-hw")[0]
    let input_peso_fw = janela_principal.document.getElementsByName("input-peso-fw")[0]

    // ATRIBUI OS PESOS AOS INPUTS DA JANELA PRINCIPAL
    input_peso_geo.value = td_peso_geo
    input_peso_ob.value = td_peso_ob
    input_peso_hw.value = td_peso_hw
    input_peso_fw.value = td_peso_fw

    // Dispara eventos de validação e atualização dos inputs
    input_peso_geo.dispatchEvent(new Event("blur"))
    input_peso_ob.dispatchEvent(new Event("blur"))
    input_peso_hw.dispatchEvent(new Event("blur"))
    input_peso_fw.dispatchEvent(new Event("blur"))
    input_peso_geo.dispatchEvent(new Event("input"))
    input_peso_ob.dispatchEvent(new Event("input"))
    input_peso_hw.dispatchEvent(new Event("input"))
    input_peso_fw.dispatchEvent(new Event("input"))

    // Fecha a janela popup
    window.close()
}

function Calculos() {

    function Converter_divisao(id) {
        let valor = document.getElementById(id).textContent
        let valor_convertido
        if (valor.includes("1/")) {
            valor = valor.split("/")
            valor_convertido = (1 / parseFloat(valor[1]))
        } else {
            valor_convertido = parseFloat(valor)
        }
        return valor_convertido
    }

    //SOMATÓRIO DAS COLUNAS
    let geo_geo = Converter_divisao("geo_geo")
    let ob_geo = Converter_divisao("ob_geo")
    let hw_geo = Converter_divisao("hw_geo")
    let fw_geo = Converter_divisao("fw_geo")

    let geo_ob = Converter_divisao("geo_ob")
    let ob_ob = Converter_divisao("ob_ob")
    let hw_ob = Converter_divisao("hw_ob")
    let fw_ob = Converter_divisao("fw_ob")

    let geo_hw = Converter_divisao("geo_hw")
    let ob_hw = Converter_divisao("ob_hw")
    let hw_hw = Converter_divisao("hw_hw")
    let fw_hw = Converter_divisao("fw_hw")


    let geo_fw = Converter_divisao("geo_fw")
    let ob_fw = Converter_divisao("ob_fw")
    let hw_fw = Converter_divisao("hw_fw")
    let fw_fw = Converter_divisao("fw_fw")

    let soma_coluna_geo = geo_geo + ob_geo + hw_geo + fw_geo
    let soma_coluna_ob = geo_ob + ob_ob + hw_ob + fw_ob
    let soma_coluna_hw = geo_hw + ob_hw + hw_hw + fw_hw
    let soma_coluna_fw = geo_fw + ob_fw + hw_fw + fw_fw
    // console.log(soma_coluna_geo, soma_coluna_ob, soma_coluna_hw, soma_coluna_fw)

    //NORMATIZAÇÃO
    norma_geo_geo = geo_geo / soma_coluna_geo
    norma_ob_geo = ob_geo / soma_coluna_geo
    norma_hw_geo = hw_geo / soma_coluna_geo
    norma_fw_geo = fw_geo / soma_coluna_geo

    norma_geo_ob = geo_ob / soma_coluna_ob
    norma_ob_ob = ob_ob / soma_coluna_ob
    norma_hw_ob = hw_ob / soma_coluna_ob
    norma_fw_ob = fw_ob / soma_coluna_ob

    norma_geo_hw = geo_hw / soma_coluna_hw
    norma_ob_hw = ob_hw / soma_coluna_hw
    norma_hw_hw = hw_hw / soma_coluna_hw
    norma_fw_hw = fw_hw / soma_coluna_hw

    norma_geo_fw = geo_fw / soma_coluna_fw
    norma_ob_fw = ob_fw / soma_coluna_fw
    norma_hw_fw = hw_fw / soma_coluna_fw
    norma_fw_fw = fw_fw / soma_coluna_fw

    // console.log(norma_geo_geo, norma_ob_geo, norma_hw_geo, norma_fw_geo)
    // console.log(norma_geo_ob, norma_ob_ob, norma_hw_ob, norma_fw_ob)

    //CRIAÇÃO DO VETOR PESO
    let peso_geo = (norma_geo_geo + norma_geo_ob + norma_geo_hw + norma_geo_fw) / 4
    let peso_ob = (norma_ob_geo + norma_ob_ob + norma_ob_hw + norma_ob_fw) / 4
    let peso_hw = (norma_hw_geo + norma_hw_ob + norma_hw_hw + norma_hw_fw) / 4
    let peso_fw = (norma_fw_geo + norma_fw_ob + norma_fw_hw + norma_fw_fw) / 4

    //ESCREVE OS VALORES CALCULADOS NO POP UP
    function Atribuir_valor(id, valor) {
        const elemento = document.getElementById(id)
        elemento.innerText = valor.toFixed(2)
    }

    //ATRIBUIÇÃO DOS VALORES DE PESOS
    Atribuir_valor("td_peso_geo", peso_geo)
    Atribuir_valor("td_peso_ob", peso_ob)
    Atribuir_valor("td_peso_hw", peso_hw)
    Atribuir_valor("td_peso_fw", peso_fw)

    //MULTIPLICA O VETOR PESO PELA MATRIZ ORIGINAL
    let ws_geo = (peso_geo * geo_geo) + (peso_ob * geo_ob) + (peso_hw * geo_hw) + (peso_fw * geo_fw)
    let ws_ob = (peso_geo * ob_geo) + (peso_ob * ob_ob) + (peso_hw * ob_hw) + (peso_fw * ob_fw)
    let ws_hw = (peso_geo * hw_geo) + (peso_ob * hw_ob) + (peso_hw * hw_hw) + (peso_fw * hw_fw)
    let ws_fw = (peso_geo * fw_geo) + (peso_ob * fw_ob) + (peso_hw * fw_hw) + (peso_fw * fw_fw)

    //CALCULA O VETOR CONSISTENCIA
    let cons_geo = ws_geo / peso_geo
    let cons_ob = ws_ob / peso_ob
    let cons_hw = ws_hw / peso_hw
    let cons_fw = ws_fw / peso_fw

    //ATRIBUIÇÃO DOS VALORES DO VETOR CONSISTENCIA
    Atribuir_valor("td_cons_geo", cons_geo)
    Atribuir_valor("td_cons_ob", cons_ob)
    Atribuir_valor("td_cons_hw", cons_hw)
    Atribuir_valor("td_cons_fw", cons_fw)

    //CALCULO DO LAMBDA
    let lambda = (cons_geo + cons_ob + cons_hw + cons_fw) / 4
    Atribuir_valor("resultado_lambda", lambda)

    //CALCULO DO INDICE DE CONSISTENCIA
    const qtd_criterios = 4 //Ordem da matriz
    let ci = (lambda - qtd_criterios) / (qtd_criterios - 1)
    Atribuir_valor("resultado_ci", ci)

    //CALCULO DA RAZÃO DE CONSISTENCIA
    const random_index = 0.90 //Saaty 1980 RI for matrix size = 4
    let cr = ci / random_index
    Atribuir_valor("resultado_cr", cr)
}

function Matriz_maker() {

    //CONVERTE O VALOR DO SLIDER [0 100] PARA A ESCALA AHP [-9 9]
    function Conversor_ahp(valor) {
        let proporcao
        let valor_ahp
        if (valor > 50) {
            proporcao = (valor - 51) / (100 - 51)
            valor_ahp = 1 + (proporcao * (9 - 1))
        } else if (valor < 50) {
            proporcao = (valor - 50) / 50
            valor_ahp = (-1) * (1 - proporcao * (9 - 1))
        } else if (valor == 50) {
            valor_ahp = 1
        }
        return Math.round(valor_ahp)
    }

    //PREENCHE O TRIANGULO SUPERIOR DA MATRIZ
    function Pega_elemento_direto(id) {
        let elemento = document.getElementById(id) //matriz triangular superior
        let slider = Conversor_ahp(document.querySelector(`#slider_${id}`).value)
        let display = slider < 0 ? `1/${Math.abs(slider)}` : slider.toString()
        elemento.textContent = display
    }

    //PRENCHE O TRIANGULO INFERIOR DA MATRIZ
    function Pega_elemento_indireto(id) {
        let nome = id.split("_")
        let elemento = document.getElementById(id) //matriz triangular inferior
        let slider = Conversor_ahp(document.querySelector(`#slider_${nome[1]}_${nome[0]}`).value)
        let display = slider > 0 ? `1/${Math.abs(slider)}` : Math.abs(slider).toString()
        elemento.textContent = display
    }

    //-----------------DIRETOS---------------------

    //LINHA GEO
    Pega_elemento_direto("geo_ob")
    Pega_elemento_direto("geo_hw")
    Pega_elemento_direto("geo_fw")
    //LINHA OB
    Pega_elemento_direto("ob_hw")
    Pega_elemento_direto("ob_fw")
    //LINHA HW
    Pega_elemento_direto("hw_fw")

    // ------------INDIRETOS-----------------

    //LINHA OB
    Pega_elemento_indireto("ob_geo")
    //LINHA HW
    Pega_elemento_indireto("hw_geo")
    Pega_elemento_indireto("hw_ob")
    //LINHA FW
    Pega_elemento_indireto("fw_geo")
    Pega_elemento_indireto("fw_ob")
    Pega_elemento_indireto("fw_hw")
}

function Slider_color() {

    const slideres = document.querySelectorAll(".slider")
    slideres.forEach(element => {
        let value = element.value
        let meio_end
        let meio_start
        let left
        let right
        if (value > 50) {
            right = 100 - value
            meio_end = value
            meio_start = 50
            left = 50
        } else if (value < 50) {
            right = 50
            meio_end = 50
            meio_start = value
            left = value
        }
        element.style.background = "linear-gradient(90deg," + "red 0%," + "red " + left + "%, " + "green " + meio_start + "%," + "green " + meio_end + "%, " + "blue " + right + "%," + "blue " + "100" + "%  )"

    })

}


function Slider_mouse_over(id) {
    let span = id.split("_")
    span.splice(0, 1)

    const id_td_1 = span[0] + "_" + span[1]
    const id_td_2 = span[1] + "_" + span[0]

    const slider = document.getElementById(id)
    const td_1 = document.getElementById(id_td_1)
    const td_2 = document.getElementById(id_td_2)

    slider.style.boxShadow = "0px 0px 10px blue"
    td_1.style.boxShadow = "0px 0px 10px blue"
    td_2.style.boxShadow = "0px 0px 10px blue"
}

function Slider_mouse_leave(id) {
    let span = id.split("_")
    span.splice(0, 1)

    const id_td_1 = span[0] + "_" + span[1]
    const id_td_2 = span[1] + "_" + span[0]

    const slider = document.getElementById(id)
    const td_1 = document.getElementById(id_td_1)
    const td_2 = document.getElementById(id_td_2)

    slider.style.boxShadow = "none"
    td_1.style.boxShadow = "none"
    td_2.style.boxShadow = "none"
}

function Resultado_mouse_over(id) {
    let elemento_1 = document.getElementById(id)
    const id_2 = "resultado_" + id
    let elemento_2 = document.getElementById(id_2)

    elemento_1.style.borderLeft = "1pt solid blue"
    elemento_1.style.borderTop = "1pt solid blue"
    elemento_1.style.borderBottom = "1pt solid blue"
    elemento_1.style.textShadow = "0 0 2px blue"

    elemento_2.style.borderRight = "1pt solid blue"
    elemento_2.style.borderTop = "1pt solid blue"
    elemento_2.style.borderBottom = "1pt solid blue"
    elemento_2.style.textShadow = "0 0 2px blue"

}

function Resultado_mouse_leave(id) {

    const elemento_1 = document.getElementById(id)
    const id_2 = "resultado_" + id
    const elemento_2 = document.getElementById(id_2)

    elemento_1.style.border = "none"
    elemento_1.style.textShadow = "none"

    elemento_2.style.border = "none"
    elemento_2.style.textShadow = "none"
}


function Evento() {

    var balao = document.getElementById("balao")
    document.addEventListener("mousemove", function (event) {
        //OBS: o off-set do balão é configurado na função Balao_entra() em design.js
        balao.style.top = event.clientY + "px"
        balao.style.left = event.clientX + "px"
    })

    const slideres = document.querySelectorAll(".slider")
    slideres.forEach(element => {

        element.addEventListener("change", function () {
            Matriz_maker()
            Slider_color()
            Calculos()
        })

        element.addEventListener("mouseover", function () {
            Slider_mouse_over(element.id)
            Balao_entra(element.id)
        })

        element.addEventListener("mouseleave", function () {
            Slider_mouse_leave(element.id)
            Balao_sai()
        })
    })

    //VETOR PESOS
    const td_vetores_peso = document.querySelectorAll(".td_vetores_peso")
    td_vetores_peso.forEach(element => {
        element.addEventListener("mouseover", () => { Balao_entra("pesos") })
        element.addEventListener("mouseleave", Balao_sai)
    })

    //VETOR CONSISTENCIA
    const td_vetores_cons = document.querySelectorAll(".td_vetores_cons")
    td_vetores_cons.forEach(element => {
        element.addEventListener("mouseover", () => { Balao_entra("cons") })
        element.addEventListener("mouseleave", Balao_sai)
    })

    //MATRIZ DE JULGAMENTO
    const matriz = document.querySelector("#matriz")
    matriz.onmouseover = function () {
        Balao_entra("matriz")
    }
    matriz.onmouseout = function () {
        Balao_sai("matriz")
    }

    //LAMBDA
    const lambda = document.querySelector("#lambda")
    lambda.onmouseover = function () {
        Balao_entra("lambda")
        Resultado_mouse_over("lambda")
    }
    lambda.onmouseout = function () {
        Balao_sai("lambda")
        Resultado_mouse_leave("lambda")
    }
    const resultado_lambda = document.querySelector("#resultado_lambda")
    resultado_lambda.onmouseover = function () {
        Balao_entra("lambda")
        Resultado_mouse_over("lambda")
    }
    resultado_lambda.onmouseout = function () {
        Balao_sai("lambda")
        Resultado_mouse_leave("lambda")
    }

    //CONSISTENCE INDEX (CI)
    const ci = document.querySelector("#ci")
    ci.onmouseover = function () {
        Balao_entra("ci")
        Resultado_mouse_over("ci")
    }
    ci.onmouseout = function () {
        Balao_sai("ci")
        Resultado_mouse_leave("ci")
    }
    const resultado_ci = document.querySelector("#resultado_ci")
    resultado_ci.onmouseover = function () {
        Balao_entra("ci")
        Resultado_mouse_over("ci")
    }
    resultado_ci.onmouseout = function () {
        Balao_sai("ci")
        Resultado_mouse_leave("ci")
    }

    //CONSISTENCE RATIO (CR)
    const cr = document.querySelector("#cr")
    cr.onmouseover = function () {
        Balao_entra("cr")
        Resultado_mouse_over("cr")
    }
    cr.onmouseout = function () {
        Balao_sai("cr")
        Resultado_mouse_leave("cr")
    }
    const resultado_cr = document.querySelector("#resultado_cr")
    resultado_cr.onmouseover = function () {
        Balao_entra("cr")
        Resultado_mouse_over("cr")
    }
    resultado_cr.onmouseout = function () {
        Balao_sai("cr")
        Resultado_mouse_leave("cr")
    }

    //RANDOM INDEX
    const ri = document.querySelector("#ri")
    ri.onmouseover = function () {
        Balao_entra("ri")
        Resultado_mouse_over("ri")
    }
    ri.onmouseout = function () {
        Balao_sai("ri")
        Resultado_mouse_leave("ri")
    }
    const resultado_ri = document.querySelector("#resultado_ri")
    resultado_ri.onmouseover = function () {
        Balao_entra("ri")
        Resultado_mouse_over("ri")
    }
    resultado_ri.onmouseout = function () {
        Balao_sai("ri")
        Resultado_mouse_leave("ri")
    }

}

