//BOTÃO SWITCH DE TROCAR IDIOMAS
function Switch_language(metodo) {
    const switch_botao = document.getElementById("checkbox-switch")
    const switch_texto = document.getElementById("switch-texto")

    //Configura a posição to texto PT se switch on (página em ingles)
    //Configura a posição to texto EN se switch on (página em portugues)
    if (switch_botao.checked) {
        switch_texto.innerHTML = "PT"
        switch_texto.style.transform = "translate(5px, -6px)"
        English()
    } else {
        switch_texto.innerHTML = "EN"
        switch_texto.style.transform = "translate(21px, -6px)"
        Portuguese()
    }

    // Calculo é chamada para alterar o valor do resultado do RSS
    Calculo(metodo)
}

function Obter_idioma() {
    let idioma = document.getElementById("titulo-section-1").innerText
    idioma = idioma.includes("CHARACTERISTICS") ? "en" : "pt"
    return idioma
}

// DESABILITA O DISPLAY DE TODOS OS IFRAMES
function Desabilitar_iframe() {
    const iframes = document.querySelectorAll("iframe")
    iframes.forEach(element => {
        element.style.display = "none"
    })
}

// ESCREVE O TÍTULO DO POP UP
function Titulo_pop_up(calculo, id = "none") {
    const titulo = document.getElementById("titulo-pop-up")

    id == "ob" ? (id = Obter_idioma() == "pt" ? "Corpo de Minério" : "Orebody") : id
    id = id == "hw" ? "Hanging Wall" : id
    id = id == "fw" ? "Footwall" : id
    calculo == "DENSIDADE:" ? (calculo = Obter_idioma() == "pt" ? "DENSIDADE:" : "DENSITY") : calculo

    titulo.innerText = calculo + " " + id
}

// FECHA A DIV QUE CONTÉM OS IFRAMES-POP-UPS
function Fechar_pop_up() {
    const pop_up = document.getElementById("main-pop-up")
    pop_up.style.display = "none"
}

// ABRE A DIV QUE CONTÉM OS IFRAMES-POP-UPS E DEFINE AS DIMENSÓES
function Abrir_pop_up(id) {
    const pop_up = document.getElementById("main-pop-up")
    const litologia = id.split("-")[2]
    if (id.includes("gsi")) {
        pop_up.style.width = "780px"
        pop_up.style.height = "740px"
        Titulo_pop_up("GSI:", litologia)
    } if (id.includes("rmr")) {
        pop_up.style.width = "520px"
        pop_up.style.height = "650px"
        Titulo_pop_up("RMR:", litologia)
    } else if (id.includes("densidade")) {
        pop_up.style.width = "520px"
        pop_up.style.height = "740px"
        Titulo_pop_up("DENSIDADE:", litologia)
    } else if (id.includes("ucs")) {
        pop_up.style.width = "550px"
        pop_up.style.height = "740px"
        Titulo_pop_up("UCS:", litologia)
    } else if (id.includes("ahp")) {
        pop_up.style.width = "680px"
        pop_up.style.height = "670px"
        Titulo_pop_up("AHP", " ")
    }
    pop_up.style.display = "block"
}

// OBTÉM O ENDREÇO DE CADA POP UP E RETORNA PARA Open_ifrme
function Obter_endereco(calculadora) {
    calculadora.split("-")[1]
    const endereco = calculadora.split("-")[1] + "_" + "calculadora/" + calculadora.split("-")[1] + "_" + Obter_idioma() + ".html"
    const argumento = "?" + calculadora.split("-")[2]
    return (endereco + argumento)
}

// ABRE QUALQUER IFRAME-POP-UP
function Open_iframe(id_calc) {
    Desabilitar_iframe()
    let id_input = id_calc.split("-")[1] + "-" + id_calc.split("-")[2]
    let frame = document.getElementById(("iframe-" + id_input))
    Abrir_pop_up(id_calc)
    const endereco = Obter_endereco(id_calc)
    frame.src = endereco
    frame.style.display = "block"
}

window.onload = function Mover_pop_up() {
    const main_pop_up = document.getElementById("main-pop-up")
    const barra_pop_up = document.getElementById("barra-pop-up")
    // const overlay = document.getElementById("overlay")
    const overlay_div = document.getElementById("overlay-div")

    let position = { x: 0, y: 0 }

    let Interromper = () => {
        document.removeEventListener("mousemove", Move_element)
        overlay.style.display = "none"
        overlay_div.style.display = "none"
    }

    document.onmouseup = () => Interromper()
    document.onscroll = () => Interromper()
    document.onkeydown = () => Interromper()
    document.onclick = () => Interromper()

    barra_pop_up.addEventListener("mousedown", () => {
        overlay.style.display = "block"
        overlay_div.style.display = "block"
        document.body.style.userSelect = "none"
        position.x = main_pop_up.offsetLeft + (main_pop_up.clientWidth / 2)
        position.y = main_pop_up.offsetTop
        document.addEventListener("mousemove", Move_element)
    })

    let Move_element = (event) => {
  
        let x = event.clientX - position.x
        let y = event.clientY - position.y - 80 + document.documentElement.scrollTop
        main_pop_up.style.transform = `translate(${x}px, ${y}px)`
    }

}

// MOSTRA A PLANILHA COM PESOS DO MÉTODO UBC
function Open_pop_up_pesos(metodo) {
    const tabela_nome = metodo + "_" + Obter_idioma() + ".html"
    window.open("tabelas\\" + tabela_nome, "_blank")
}

// MOSTRA O BOTÃO PARA TESTE DO AHP NO UBC E SHB
function Mostra_ahp() {

    const div_select_pesos = document.querySelector("#div-select-pesos-ubc")
    document.addEventListener("keydown", (event) => {
        if (event.ctrlKey && event.key === "x") {
            div_select_pesos.style.display = "grid"
            botao_ahp.style.display = "block"
        } else if (event.ctrlKey && event.key === "b") {
            div_select_pesos.style.display = "none"
            botao_ahp.style.display = "none"

        }
    })

}

function Eventos(metodo) {

    //POSICIONA O BALÃO DE AJUDA NA POSIÇÃO DO CURSOR
    const balao = document.getElementById("balao")
    document.addEventListener("mousemove", function (event) {
        balao.style.top = event.clientY + "px"
        balao.style.left = event.clientX + "px"
    })

    //BOTÃO SWITCH LANGUAGE
    const switch_language = document.querySelector("#checkbox-switch")
    switch_language.onchange = () => Switch_language(metodo)

    //label do switch
    const switch_label = document.querySelector(".switch-label") //mouseover no label, não na checkbox invisível
    switch_label.onmouseover = () => Balao_entra("switch-language")
    switch_label.onmouseout = () => Balao_sai()

    //BOTAO RMR_Q_GSI
    if (metodo == "ubc" || metodo == "shb") {
        const checkbox = document.querySelectorAll(".checkbox-rmr-q-gsi")
        checkbox.forEach((element) => {
            element.onchange = () => Checkbox(element.id, metodo)
        })
    }

    // BOTÕES CALCULADORA 
    const calculadoras = document.querySelectorAll(".botao-calculadora")
    calculadoras.forEach((elemento) => {
        elemento.onclick = () => Open_iframe(elemento.id)
    })

    //INPUT DOS FATORES DE PESOS E AHP NO MÉTODO DE NICHOLAS 1992
    if (metodo == "nicholas_92") {
        const menu_pesos = document.querySelector("#menu-pesos")
        menu_pesos.addEventListener("change", Mostrar_input_pesos)
        const botao_ahp = document.querySelector("#botao-ahp-nicholas")
        botao_ahp.onclick = () => Open_iframe(botao_ahp.id)
    }

    //BOTÃO MOSTRA TABELA COM OS PESOS
    const botao_pesos = document.querySelector("#botao-pesos")
    botao_pesos.onclick = () => Open_pop_up_pesos(metodo)

    //BOTÃO IMPRIMIR RELATÓRIO
    const botao_imprimir = document.querySelector("#botao-imprimir")
    botao_imprimir.onclick = () => Imprimir_relatorio(metodo)

    // EVENTOS BUTTONS
    const button = document.querySelectorAll("button")
    button.forEach((element) => {
        element.onmouseover = () => Baloes(element.id)
        element.onmouseout = () => Balao_sai()
    })

    // EVENTOS SELECTS
    const select = document.querySelectorAll("select")
    select.forEach((element) => {
        element.onchange = () => {
            Calculo(metodo)
            element.blur()
        }
        element.onmouseover = () => Baloes(element.id, metodo)
        element.onmouseout = () => Balao_sai()
    })

    // SPAN RESULTADO RSS
    const span_resultado_rss = document.querySelectorAll(".resultado-rss")
    span_resultado_rss.forEach((element) => {
        element.onmouseover = () => Baloes(element.id)
        element.onmouseout = () => Balao_sai()
    })

    // EVENTOS INPUTS
    const input = document.querySelectorAll("input")
    input.forEach((element, index) => {
        element.oninput = () => Calculo(metodo)
        element.onblur = () => Formatar_entry(element.id)
        element.onmouseover = () => Baloes(element.id, metodo)
        element.onmouseout = () => Balao_sai()
        element.onkeydown = (event) => {
            if (event.key === "Enter") {
                event.preventDefault() // Impede o comportamento padrão de enviar o formulário

                // Move o foco para o próximo input
                const nextIndex = (index + 1) % input.length
                input[nextIndex].focus()
            }
        }
    })

    // FECHAR POP UP
    let pop_ups = document.getElementById("fechar-pop-up")
    pop_ups.onclick = () => Fechar_pop_up()

    const imagens = document.querySelectorAll("img")
    imagens.forEach((element) => {
        element.draggable = false
    })

    // Mostra_ahp(metodo)
    Switch_language(metodo)
    Calculo(metodo)
}
