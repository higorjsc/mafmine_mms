
// ESCREVE O VALOR DO GSI NO INPUT DA JANELA PRINCIPAL
function Retornar_valor() {

    //Obtém ob, hw, ou fw através da url. url[1] = ob, hw ou fw
    let url = (window.location.href).split("?")
    let id = {
        "ob": "gsi-ob",
        "hw": "gsi-hw",
        "fw": "gsi-fw",
    }

    // Obtém o input da janela principal
    let input_gsi = parent.document.getElementById(id[url[1]])
    // Obtém o resultado do GSI no pop up
    let texto = document.querySelector("#resultado").innerText
    input_gsi.value = texto
    // Dispara os eventos associados a inputs na janela principal
    let evento_1 = new Event("blur")
    input_gsi.dispatchEvent(evento_1)
    let evento_2 = new Event("input")
    input_gsi.dispatchEvent(evento_2)

    // Fecha o Pop Up através de um click na div X
    const botao_fechar = parent.document.getElementById("fechar-pop-up")
    // Cria um evento "click"
    let Click = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
    })
    // Dispara o "click" no elemento
    botao_fechar.dispatchEvent(Click)
}

// ESCREVE O RESULTADO DO GSI NA TELA
function Escrever_resultado_gsi(gsi) {
    let texto = document.querySelector("#resultado")
    texto.innerText = `${gsi.toFixed(0)}`
}

// CALCULA JOINT CONDITIONS ONCHANGE DOS SELECTS E RETORNA PARA A FUNÇÃO DE CÁLCULO DO GSI
function Calculo_jc() {

    const valor_jc = {
        "persistencia": document.getElementById("persistencia").value,
        "separacao": document.getElementById("separacao").value,
        "rugosidade": document.getElementById("rugosidade").value,
        "preenchimento": document.getElementById("preenchimento").value,
        "alteracao": document.getElementById("alteracao").value,
    }
    const pesos_jc = {
        "separacao": { "none": 6, "<0.1": 5, "0.1-1.0": 4, "1-5": 1, ">5": 0 },
        "persistencia": { "<1": 6, "1-3": 4, "3-10": 2, "10-20": 1, ">20": 0 },
        "rugosidade": { "muito_rugosa": 6, "rugosa": 5, "levemente_rugosa": 3, "lisa": 1, "escorregadia": 0 },
        "preenchimento": { "none": 6, "duro:<5": 4, "duro:>5": 2, "macio:<5": 2, "macio:>5": 0 },
        "alteracao": { "none": 6, "baixo": 5, "moderado": 3, "alto": 1, "muito_alto": 0 },
    }
    let jc = (0
        + pesos_jc["persistencia"][valor_jc["persistencia"]]
        + pesos_jc["separacao"][valor_jc["separacao"]]
        + pesos_jc["rugosidade"][valor_jc["rugosidade"]]
        + pesos_jc["preenchimento"][valor_jc["preenchimento"]]
        + pesos_jc["alteracao"][valor_jc["alteracao"]]

    )
    let input_jc = document.getElementById("input-jc")
    input_jc.value = jc.toFixed(0)
    input_jc.style.color = "Red"

    return jc
}

// RETORNA O VALOR DO GSI APÓS O USUARIO CLICAR NA ÁREA VERMELHA
function Calculo_gsi_click(X, Y) {

    const pad = document.getElementById("pad")

    X = pad.clientWidth - X
    Y = pad.clientHeight - Y
    X = (X / pad.clientWidth) * 45
    Y = (Y / pad.clientHeight) * 40

    let gsi = Math.round(X, 0) + Math.round(Y, 0)
    return gsi
}

// CÁLCULA O GSI ATRAVÉS DOS INPUTS DO USUÁRIO
function Calculo_gsi_input() {
    let input_jc = document.getElementById("input-jc")
    let input_rqd = document.getElementById("input-rqd").value
    input_rqd = input_rqd == "" ? 0 : input_rqd
    const select_jc = document.getElementById("select-jc").value
    let jc
    let gsi
    
    if (select_jc == "inserir_jc") {
        // Cálcula o GSI com o input direto de JC
        jc = input_jc.value
        gsi = (1.5 * jc) + (input_rqd / 2)
    } else {
        // Chama a função para cálcular o JC antes de calcular o GSI
        jc = Calculo_jc()
        gsi = (1.5 * jc) + (input_rqd / 2)
    }

    return gsi
}
// DECIDE QUAL SERÁ O MÉTODO DE CÁLCULO DO GSI
function Calculo_gsi(X = 0, Y = 0) {
    const pad = document.getElementById("pad")
    pad.innerHTML = ""  
    // Decide o tipo de cálculo
    const tipo_calculo = document.getElementById("select-metodo-calculo").value
    if (tipo_calculo == "click") {
        Desenhar_retas(X, Y)
        gsi = Calculo_gsi_click(X, Y)
    } else if (tipo_calculo == "input") {
        gsi = Calculo_gsi_input()
    }
    // O gsi não pode ser maior que 85
    gsi = gsi > 85 ? 85 : gsi
    // Chama a função pra escrever o resultado
    Escrever_resultado_gsi(gsi)
}