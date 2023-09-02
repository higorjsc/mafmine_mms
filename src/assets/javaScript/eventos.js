function Switch_language() {
    const switch_botao = document.getElementById("checkbox-switch")
    const switch_texto = document.getElementById("switch-texto")

    // Armazena o valor da checkbox de troca de idioma
    let idioma
    if (switch_botao.checked) {
        // Configura a posição do texto PT se switch on (página em inglês)
        switch_texto.innerHTML = "PT"
        switch_texto.style.transform = "translate(5px, -6px)"
        idioma = "en"
    } else {
        // Configura a posição do texto EN se switch off (página em português)
        switch_texto.innerHTML = "EN"
        switch_texto.style.transform = "translate(21px, -6px)"
        idioma = "pt"
    }

    // Chame as funções para alterar o idioma da página conforme a preferência do usuário
    Language(idioma)
    Language_page(idioma)

    const frame = Iframe_ativo()
    // Envia uma mensagem para o Iframe ativo para trocar de idioma também
    if (frame) frame.contentWindow.postMessage("CallLanguage", "*")
}

// ARMAZENA INPUTS DO USUÁRIO EM SESSION STORAGE OU LOCAL STORAGE
function Armazenar_valor(objeto, memoria = "session") {
    // Verifica se o armazenamento local é suportado
    if (typeof (Storage) !== "undefined") {

        // Obtém o valor atual do input
        let type = objeto.type
        let valor
        if (type == "checkbox" || type == "radio") {
            valor = objeto.checked ? true : false
        } else {
            valor = objeto.value
        }

        // Armazena o valor do input no armazenamento local
        memoria == "session" ? sessionStorage.setItem(objeto.id, valor) : localStorage.setItem(objeto.id, valor)
    }
}

// VERIFICA SE EXISTE ALGUM VALOR ARMAZENADO EM SESSION STORAGE OU LOCAL STORAGE PARA ALGUM INPUT
function Verificar_memoria(id, memoria = "session") {
    // Verifica se o armazenamento local é suportado
    if (typeof (Storage) !== "undefined") {

        // Tenta recuperar o valor armazenado para o input especificado pelo id
        let valor = memoria == "session" ? sessionStorage.getItem(id) : localStorage.getItem(id)

        // Se houver um valor armazenado, verifica se é uma string representando um booleano
        if (valor !== null) {
            if (valor === "true") {
                return true
            } else if (valor === "false") {
                return false
            } else {
                return valor
            }
        } else {
            // Caso não haja valor armazenado, retorna false
            return null
        }

    } else {
        return null
    }
}

// OBTÉM O ID DO IFRAME ATIVO NO POP UP
function Iframe_ativo() {
    const iframes = Array.from(document.querySelectorAll("iframe"))
    const iframeAtivo = iframes.find(element => element.style.display === "block")
    return iframeAtivo || null
}

// FECHA A DIV QUE CONTÉM OS IFRAMES-POP-UPS
function Fechar_pop_up() {
    const pop_up = document.getElementById("main-pop-up")
    pop_up.style.display = "none"
}

// ABRE A DIV QUE CONTÉM OS IFRAMES-POP-UPS E DEFINE AS DIMENSÓES
function Configurar_pop_up(id) {

    // Modifica o id do span-titulo do pop up para ser diferenciado na função de trocar idiomas
    let Modificar_id = (id = "none") => {
        const titulo = document.querySelector(".titulo-pop-up")
        titulo.id = "titulo-pop-up-" + id
    }

    // Define as dimensões de cada pop-up
    const pop_up = document.getElementById("main-pop-up")
    const litologia = id.split("-")[2]
    if (id.includes("gsi")) {
        pop_up.style.width = "750px"
        pop_up.style.height = "740px"
        pop_up.style.left = "35%"
        pop_up.style.top = "20%"
        Modificar_id("gsi-" + litologia)
    } if (id.includes("rmr")) {
        pop_up.style.width = "520px"
        pop_up.style.height = "650px"
        pop_up.style.top = "20%"
        Modificar_id("rmr-" + litologia)
    } else if (id.includes("densidade")) {
        pop_up.style.width = "420px"
        pop_up.style.height = "650px"
        Modificar_id("densidade-" + litologia)
    } else if (id.includes("ucs")) {
        pop_up.style.width = "420px"
        pop_up.style.height = "650px"
        Modificar_id("ucs-" + litologia)
    } else if (id.includes("ahp")) {
        pop_up.style.width = "680px"
        pop_up.style.height = "670px"
        Modificar_id("ahp")
    } else if (id.includes("creditos")) {
        pop_up.style.width = "550px"
        pop_up.style.height = "420px"
        pop_up.style.left = "45%"
        pop_up.style.top = "25%"
        Modificar_id("creditos")
    } else if (id.includes("referencias")) {
        pop_up.style.width = "550px"
        pop_up.style.height = "500px"
        pop_up.style.left = "45%"
        pop_up.style.top = "25%"
        Modificar_id("referencias")
    } else if (id.includes("bug_report")) {
        pop_up.style.width = "420px"
        pop_up.style.height = "400px"
        pop_up.style.left = "45%"
        pop_up.style.top = "25%"
        Modificar_id("report_bug")
    }
    pop_up.style.display = "block"
}

// ABRE QUALQUER IFRAME-POP-UP
function Open_iframe(id_trigger) {

    // Desabilita o display de todos os iframes
    let Desabilitar_iframe = () => {
        const iframes = document.querySelectorAll("iframe")
        iframes.forEach(element => {
            element.style.display = "none"
        })
    }

    // Cria a url do pop up que será aberto
    let Obter_endereco = (calculadora) => {
        calculadora.split("-")[1]
        const endereco = "components/" + calculadora.split("-")[1] + "_" + "calculadora/" + calculadora.split("-")[1] + ".html"
        const argumento = "?" + calculadora.split("-")[2]
        return (endereco + argumento)
    }

    Desabilitar_iframe()
    let frame = document.getElementById(("iframe-" + id_trigger))

    // Chama a função que configura largura, altura e titulo da janela pop up
    Configurar_pop_up(id_trigger)

    // Verifica se o pop up é uma calculadora e cria uma URL
    const endereco = id_trigger.includes("calculadora") ? Obter_endereco(id_trigger) : ("components/" + id_trigger + ".html")
    frame.src = endereco
    frame.style.display = "block"

    // ADICIONA O TITULO DO POP UP
    Language_page()
}

// CONFIGURA O MOVIMENTO DOS POP UPS. OBS: ESSA FUNÇÃO DEVE SER APRIMORADA.
function Mover_pop_up() {

    const main_pop_up = document.getElementById("main-pop-up")
    const barra_pop_up = document.getElementById("barra-pop-up")
    const overlay = document.getElementById("overlay")
    const overlay_div = document.getElementById("overlay-div")

    let position = { x: 0, y: 0 }
    let limite = {
        right: 0,
        left: 0,
        top: 0,
        bottom: 0
    }

    // Interrompe o movimento do pop up
    let Interromper = () => {
        document.removeEventListener("mousemove", Move_element)
        overlay.style.display = "none"
        overlay_div.style.display = "none"
        document.body.style.userSelect = ""
    }

    // Eventos que interromperão o movimento do pop up 
    document.onmouseup = () => Interromper()
    document.onscroll = () => Interromper()
    document.onkeydown = () => Interromper()
    document.onclick = () => Interromper()

    barra_pop_up.addEventListener("mousedown", (event) => {

        // Coloca uma div invisível sobre toda a página e todo o pop up, para evitar interações durante o arraste
        overlay.style.display = "block"
        overlay_div.style.display = "block"

        // Impede o usuário de selecionar textos enquanto arrasta o pop up
        document.body.style.userSelect = "none"

        // Calcula a largura e altura do body. Os valores variam com o scroll da página (manter cálculo dentro desse evento)
        let body_height = document.body.clientHeight - 5
        let body_width = document.body.clientWidth

        // Define a posição do mouse em relação ao pop up
        position.x = event.clientX - main_pop_up.offsetLeft
        position.y = event.clientY - main_pop_up.offsetTop

        // Define os limites de movimento do pop up
        limite.right = body_width - main_pop_up.clientWidth
        limite.bottom = body_height - main_pop_up.clientHeight

        // Chama a função para mover
        document.addEventListener("mousemove", Move_element)
    })

    // Move o pop up enquanto mousedown
    let Move_element = (event) => {

        let x = event.clientX - position.x
        let y = event.clientY - position.y

        // Conserva os limites de movimento estabelecidos
        x = x < limite.left ? limite.left : x
        x = x > limite.right ? limite.right : x
        y = y < limite.top ? limite.top : y
        y = y > limite.bottom ? limite.bottom : y

        main_pop_up.style.left = `${x}px`
        main_pop_up.style.top = `${y}px`
    }

}

// MOSTRA A PLANILHA COM OS PESOS DE CADA MÉTODO 
function Open_pop_up_pesos() {
    let metodo = Obter_metodo()
    const tabela_nome = metodo + "_" + Obter_idioma() + ".html"
    window.open("\\components\\tabelas\\" + tabela_nome, "_blank")
}

// OBTÉM O MÉTODO DE ESCOLHA DE MÉTODOS DE LAVRA
function Obter_metodo() {
    let titulo = document.getElementById("titulo-pagina").innerText
    if (titulo.includes("1995")) {
        return "ubc"
    } else if (titulo.includes("2007")) {
        return "shb"
    } else if (titulo.includes("1981")) {
        return "nicholas_81"
    } else if (titulo.includes("1992")) {
        return "nicholas_92"
    }

}

// OBTÉM O IDIOMA DA JANELA PRINCIPAL A PARTIR DO TÍTULO DA SEÇÃO 1
function Obter_idioma() {
    let idioma = document.getElementById("titulo-section-1").innerText
    idioma = idioma.includes("CHARACTERISTICS") ? "en" : "pt"
    return idioma
}

// DEFINE TODOS OS EVENTOS DO PROGRAMA COM BASE NO MÉTODO DE SELEÇÃO DE MÉTODOS DE LAVRA
function Eventos(metodo) {

    //POSICIONA O BALÃO DE AJUDA NA POSIÇÃO DO CURSOR
    const balao = document.getElementById("balao")
    document.addEventListener("mousemove", function (event) {
        balao.style.top = event.clientY + "px"
        balao.style.left = event.clientX + "px"
    })

    //BOTÃO SWITCH LANGUAGE
    const switch_language = document.querySelector("#checkbox-switch")
    switch_language.onchange = () => {
        Armazenar_valor(switch_language, "local") //Armazena a preferencia de idioma em localStorage
        Switch_language(metodo)
        Calculo() // Calculo é chamada para alterar o valor do resultado do RSS
    }
    switch_language.checked = Verificar_memoria(switch_language.id, "local") != null ? Verificar_memoria(switch_language.id, "local") : false

    //label do switch
    const switch_label = document.querySelector(".switch-label") //mouseover no label, não na checkbox invisível
    switch_label.onmouseover = () => Balao_entra("switch-language")
    switch_label.onmouseout = () => Balao_sai()

    //BOTAO RMR_Q_GSI
    if (metodo == "ubc" || metodo == "shb") {
        const radios = document.querySelectorAll(".radio-rmr-q-gsi")
        radios.forEach((element) => {
            element.onchange = () => Rock_mass()
        })
        Rock_mass()
    }

    // BOTÕES CALCULADORA 
    const calculadoras = document.querySelectorAll(".botao-calculadora")
    calculadoras.forEach((elemento) => {
        elemento.onclick = () => Open_iframe(elemento.id)
    })

    //BOTÃO MOSTRA TABELA COM OS PESOS
    const botao_pesos = document.querySelector("#botao-pesos")
    botao_pesos.onclick = () => Open_pop_up_pesos()

    //BOTÃO IMPRIMIR RELATÓRIO
    const botao_imprimir = document.querySelector("#botao-imprimir")
    botao_imprimir.onclick = () => Imprimir_relatorio()

    // EVENTOS BUTTONS
    const button = document.querySelectorAll("button")
    button.forEach((element) => {
        element.onmouseover = () => Baloes(element.id)
        element.onmouseout = () => Balao_sai()
        element.tabIndex = "1"
    })

    
    // Verifica se o valor armazenado em Session Storage corresponde a uma das opções do select
    let Verificar_option = (seletor) => {
        let Valor_armazenado = Verificar_memoria(seletor.id)
        if (Valor_armazenado != null) {
            let op = seletor.options
            let valor_valido = false
            for (let i = 0; i < op.length; i++) {
                if (op[i].value === Valor_armazenado) {
                    valor_valido = true
                    break
                }
            }
            return valor_valido
        }
    }

    // EVENTOS SELECTS
    const selects = document.querySelectorAll("select")
    selects.forEach((seletor) => {
        // Configura a troca de foco com a tecla tab
        seletor.tabIndex = "2"

        // Evento onchange para o select
        seletor.onchange = () => {
            Armazenar_valor(seletor)
            Calculo()
            seletor.blur()
        }

        if (Verificar_option(seletor)) {
            seletor.value = Verificar_memoria(seletor.id)
        }

        // Evento mouseover e mouseout para o select
        seletor.onmouseover = () => Baloes(seletor.id, metodo)
        seletor.onmouseout = () => Balao_sai()

        // Eventos mouseover e mouseout para as opções do select
        const opcoes = seletor.getElementsByTagName("option")
        for (const option of opcoes) {
            option.onmouseover = (e) => {
                e.stopPropagation()
                Baloes(seletor.id, metodo)
            }
            option.onmouseout = () => Balao_sai()
        }
    })

    // SPAN RESULTADO RSS
    const span_resultado_rss = document.querySelectorAll(".resultado-rss")
    span_resultado_rss.forEach((element) => {
        element.onmouseover = () => Baloes(element.id, metodo)
        element.onmouseout = () => Balao_sai()
    })

    // EVENTOS INPUTS
    const input = document.querySelectorAll("input")
    input.forEach((element, index) => {
        element.oninput = () => Calculo()
        element.onblur = () => {
            Formatar_entry(element.id)
            Armazenar_valor(element)
        }
        element.onmouseover = () => Baloes(element.id, metodo)
        element.onmouseout = () => Balao_sai()
        element.tabIndex = "2"
        element.onkeydown = (event) => {
            if (event.key === "Enter") {
                event.preventDefault() // Impede o comportamento padrão de enviar o formulário
                // Move o foco para o próximo input
                const nextIndex = (index + 1) % input.length
                input[nextIndex].focus()
            }
        }
        if (Verificar_memoria(element.id) != null && element.type != "radio") {
            element.value = Verificar_memoria(element.id)
        }
    })

    //INPUT DOS FATORES DE PESOS E AHP NO MÉTODO DE NICHOLAS 1992
    if (metodo == "nicholas_92") {
        const menu_pesos = document.querySelector("#menu-pesos")
        menu_pesos.addEventListener("change", Mostrar_input_pesos)
        const calculadora_ahp_nicholas = document.querySelector("#calculadora-ahp-nicholas")
        calculadora_ahp_nicholas.onclick = () => Open_iframe(calculadora_ahp_nicholas.id)
        Mostrar_input_pesos()
    }

    // FECHAR POP UP
    let pop_ups = document.getElementById("fechar-pop-up")
    pop_ups.addEventListener("click", Fechar_pop_up, false)
    document.addEventListener("keydown", function (event) {
        if (event.code === "Escape") {
            Fechar_pop_up()
        }
    })

    // REMOVE A PROPRIEDADE "DRAGGABLE" DAS IMAGENS
    const imagens = document.querySelectorAll("img")
    imagens.forEach((element) => {
        element.draggable = false
    })

    // ABRE OS POP UPS DE CREDITOS REFERENCIAS E BUG REPORT
    const spans_footer = document.querySelectorAll(".span-footer-2")
    spans_footer.forEach((element) => {
        element.onclick = () => Open_iframe(element.id)
    })


    Switch_language()
    Mover_pop_up()
    Calculo()
}
