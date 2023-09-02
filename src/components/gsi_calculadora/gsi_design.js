

function Desenhar_retas(X, Y) {
    const pad = document.getElementById("pad")
    pad.innerHTML = ""
    largura = pad.clientWidth
    altura = pad.clientHeight
    X -= 5
    Y -= 5
    X = X > 312.5 ? 312.5 : X
    Y = Y > 348 ? 348 : Y

    // Criar o ponto
    const ponto = document.createElement("div")
    ponto.style.width = "5px"
    ponto.style.height = "5px"
    ponto.style.backgroundColor = "red"
    ponto.style.position = "absolute"
    ponto.style.top = `${Y}px`
    ponto.style.left = `${X}px`
    pad.appendChild(ponto)

    // Criar a linha
    const linha = document.createElement("div")
    linha.style.width = "2px"
    linha.style.height = `${altura}px`//`${Y}px`
    linha.style.backgroundColor = "blue"
    linha.style.position = "absolute"
    linha.style.top = "0"
    linha.style.left = `${X + 1}px`
    linha.style.zIndex = "5"
    pad.appendChild(linha)

    // Criar a linha horizontal
    const linha_horizontal = document.createElement("div")
    linha_horizontal.style.width = `${largura}px`//`${X}px`
    linha_horizontal.style.height = "2px"
    linha_horizontal.style.backgroundColor = "blue"
    linha_horizontal.style.position = "absolute"
    linha_horizontal.style.top = `${Y + 1}px`
    linha_horizontal.style.left = "0px"
    pad.appendChild(linha_horizontal)

}

function Mostrar_inputs() {

    const select_metodo_calculo = document.getElementById("select-metodo-calculo").value
    const select_jc = document.getElementById("select-jc").value

    const img_container = document.getElementById("img-container")
    const input_container = document.getElementById("input-container")

    const div_inputs = document.getElementById("div-inputs")
    const input_jc = document.getElementById("input-jc")

    const div_calculo_jc = document.getElementById("div-calculo-jc")

    if (select_metodo_calculo == "input") {
        div_inputs.style.display = "block"
        img_container.style.display = "none"
        input_container.style.display = "block"

        if (select_jc == "inserir_jc") {
            input_jc.disabled = false
            input_jc.style.color = "black"
            div_calculo_jc.style.display = "none"
        } else {
            input_jc.disabled = true
            div_calculo_jc.style.display = "grid"
        }

    } else if (select_metodo_calculo == "click") {
        img_container.style.display = "block"
        input_container.style.display = "none"
        div_inputs.style.display = "none"
        div_calculo_jc.style.display = "none"
    }
}


function Balao_gsi(entry, X, Y) {
    const pad = document.getElementById("pad")
    X = ((X / pad.clientWidth) * 45)
    Y = (Y / pad.clientHeight) * 40

    // Impede que valores superiores aos limites sejam atribuidos
    X > X === 45 ? X = 45 : X
    Y > Y === 40 ? Y = 40 : Y

    messages = {
        "pad": `${X.toFixed(0)}, ${Y.toFixed(0)}`
    }

    const positions = {
        "pad": { x: 0, y: -50 },
    }

    //Mostra e posiciona o balão conforme o dicionário de posições
    Positions(entry, messages, positions)
}

function Balao_sai() {
    const balao = document.getElementById("balao")
    balao.style.display = "none"
}

function Positions(entry, messages, positions) {

    //Mostra o balão de texto
    const balao = document.getElementById("balao")
    if (messages[entry]) {
        balao.innerText = messages[entry]
        balao.style.display = "block"
    }

    //Posiciona o balão conforme o dicionário de posições
    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(-100px,-75px)"
    }

}

function Balao_entra(entry) {
    const idioma = Obter_idioma()
    let messages
    if (idioma == "en") {
        messages = {
        }
    } else {
        messages = {
        }
    }

    const positions = {
        "matriz": { x: -100, y: -50 },
        "pesos": { x: -100, y: -50 },
        "cons": { x: -100, y: -50 },
    }
    //Mostra e posiciona o balão conforme o dicionário de posições
    Positions(entry, messages, positions)
}
