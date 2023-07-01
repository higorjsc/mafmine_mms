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

// ABRE O POP UP PARA () =>{Calculo(metodo)} AHP
function Open_pop_up_ahp() {
    encoded_id = "AHP\\pop_up_ahp_" + Obter_idioma() + ".html?"
    window.open(encoded_id, "_blank", "width=650,height=750")
}

// ABRE POP UP DE CALCULO DO GSI
function Open_pop_up_ucs(id) {
    const endereco = "ucs_calculadora\\ucs_" + Obter_idioma() + ".html?" + encodeURIComponent(id)
    window.open(endereco, "_blank", "width=600, height=650")
}

// ABRE POP UP DE CALCULO DO GSI
function Open_pop_up_gsi(id) {
    const endereco = "gsi_calculadora\\pop_up_gsi_" + Obter_idioma() + ".html?" + encodeURIComponent(id)
    window.open(endereco, "_blank", "width=770,height=730")
}

// ABRE POP UP DE  CALCULO RMR
function Open_pop_up_rmr(id) {
    const endereco = "rmr_calculadora\\pop_up_rmr_" + Obter_idioma() + ".html?" + encodeURIComponent(id)
    window.open(endereco, "_blank", "width=600,height=650")
}

// MOSTRA A PLANILHA COM PESOS DO MÉTODO UBC
function Open_pop_up_pesos(metodo) {
    const tabela_nome = metodo + "_" + Obter_idioma() + ".html"
    window.open("tabelas\\" + tabela_nome, "_blank")
}

// MOSTRA O BOTÃO PARA TESTE DO AHP NO UBC E SHB
function Mostra_ahp(metodo) {

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

    //BOTÃO CALCULADORA RMR
    const botao_calculadora_rmr = document.querySelectorAll(".botao-calculadora-rmr")
    botao_calculadora_rmr.forEach((elemento) => {
        elemento.onclick = () => Open_pop_up_rmr(elemento.id)
    })

    //BOTÃO CALCULADORA GSI
    const botao_calculadora_gsi = document.querySelectorAll(".botao-calculadora-gsi")
    botao_calculadora_gsi.forEach((elemento) => {
        elemento.onclick = () => Open_pop_up_gsi(elemento.id)
    })
    
    //BOTÃO CALCULADORA UCS
    const botao_calculadora_ucs = document.querySelectorAll(".botao-calculadora-ucs")
    botao_calculadora_ucs.forEach((elemento) => {
        elemento.onclick = () => Open_pop_up_ucs(elemento.id)
    })

    //INPUT DOS FATORES DE PESOS E AHP NO MÉTODO DE NICHOLAS 1992
    if (metodo == "nicholas_92") {
        const menu_pesos = document.querySelector("#menu-pesos")
        menu_pesos.onchange = () => Mostrar_input_pesos
        const botao_ahp = document.querySelector("#botao-ahp")
        botao_ahp.onclick = Open_pop_up_ahp
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

    // Mostra_ahp(metodo)
    Switch_language(metodo)
    Calculo(metodo)
}
