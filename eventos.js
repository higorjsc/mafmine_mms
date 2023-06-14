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
    // é chamada para alterar o valor do resultado do RSS
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
    window.open(encoded_id, "_blank", "width=650,height=650")
}

// ABRE POP UP DE CALCULO DO GSI
function Open_pop_up_gsi(id) {
    const endereco =
        "gsi_calculadora\\pop_up_gsi_" +
        Obter_idioma() +
        ".html?" +
        encodeURIComponent(id)
    window.open(endereco, "_blank", "width=770,height=730")
}

// ABRE POP UP DE  CALCULO RMR
function Open_pop_up_rmr(id) {
    const endereco =
        "rmr_calculadora\\pop_up_rmr_" +
        Obter_idioma() +
        ".html?" +
        encodeURIComponent(id)
    window.open(endereco, "_blank", "width=600,height=650")
}

// MOSTRA A PLANILHA COM PESOS DO MÉTODO UBC
function Open_pop_up_pesos(metodo) {
    const tabela_nome = metodo + "_" + Obter_idioma() + ".html"
    window.open("tabelas\\" + tabela_nome, "_blank")
}

function Eventos(metodo) {
    //POSICIONA O BALÃO DE AJUDA NA POSIÇÃO DO CURSOR
    var balao = document.getElementById("balao")
    document.addEventListener("mousemove", function (event) {
        //OBS: o off-set do balão é configurado na função Balao_entra() em design.js
        balao.style.top = event.clientY + "px"
        balao.style.left = event.clientX + "px"
    })

    //BOTÃO SWITCH LANGUAGE
    const switch_language = document.querySelector("#checkbox-switch")
    //false → A página inicia em português
    switch_language.checked = false
    Switch_language(metodo)
    switch_language.addEventListener("change", () => {
        Switch_language(metodo)
    })
    //label do switch
    const switch_label = document.querySelector(".switch-label") //mouseover no label, não na checkbox invisível
    switch_label.addEventListener("mouseover", () => {
        Balao_entra(metodo, "switch-language")
    })
    switch_label.addEventListener("mouseleave", Balao_sai)

    //BOTAO RMR_Q_GSI
    const checkbox = document.querySelectorAll(".checkbox-rmr-q-gsi")
    if (metodo == "ubc" || metodo == "shb") {
        checkbox.forEach((element) => {
            element.addEventListener("change", () => {
                Checkbox(element.id, metodo)
            })
        })
        const botao_rmr_q_gsi = document.getElementById("checkbox-rmr")
        //A página inicia com a opção colocada no ID acima
        botao_rmr_q_gsi.checked = true
        // Recebe a checkbox marcada no loading
        Checkbox(botao_rmr_q_gsi.id)
    }

    //BOTÃO CALCULADORA RMR
    const botao_calculadora_rmr = document.querySelectorAll(
        ".botao-calculadora-rmr"
    )
    botao_calculadora_rmr.forEach((elemento) => {
        elemento.addEventListener("mouseover", () => {
            Balao_entra(metodo, "botao-calculadora-rmr")
        })
        elemento.addEventListener("mouseleave", Balao_sai)
        elemento.addEventListener("click", () => {
            Open_pop_up_rmr(elemento.id)
        })
    })

    //BOTÃO CALCULADORA GSI
    const botao_calculadora_gsi = document.querySelectorAll(
        ".botao-calculadora-gsi"
    )
    botao_calculadora_gsi.forEach((elemento) => {
        elemento.addEventListener("mouseover", () => {
            Balao_entra(metodo, "botao-calculadora-gsi")
        })
        elemento.addEventListener("mouseleave", Balao_sai)
        elemento.addEventListener("click", () => {
            Open_pop_up_gsi(elemento.id)
        })
    })

    //INPUT DOS VALORES DO GSI
    const input_gsi = document.querySelectorAll(".input-gsi")
    input_gsi.forEach((elemento) => {
        elemento.addEventListener("blur", () => {
            Formatar_entry(elemento.id)
        })
        elemento.addEventListener("mouseover", () => {
            Balao_entra(metodo, "gsi")
        })
        elemento.addEventListener("mouseleave", Balao_sai)
        elemento.addEventListener("input", () => {
            Calculo(metodo)
        })
        elemento.addEventListener("change", () => {
            Calculo(metodo)
        })
    })

    //INPUT DOS VALORES DO Q-SYSTEM
    const input_q = document.querySelectorAll(".input-q")
    input_q.forEach((elemento) => {
        elemento.addEventListener("blur", () => {
            Formatar_entry(elemento.id)
        })
        elemento.addEventListener("mouseover", () => {
            Balao_entra(metodo, "q")
        })
        elemento.addEventListener("mouseleave", Balao_sai)
        elemento.addEventListener("input", () => {
            Calculo(metodo)
        })
    })

    //INPUT DOS FATORES DE PESOS E AHP
    //Select do Nicholas 92
    if (metodo == "nicholas_92") {
        const menu_pesos = document.querySelector("#menu-pesos")
        menu_pesos.onchange = function () {
            Calculo(metodo)
            Mostrar_input_pesos()
        }

        //caixas de input
        const input_pesos = document.querySelectorAll(".input-pesos")
        input_pesos.forEach((elemento) => {
            elemento.addEventListener("blur", () => {
                Formatar_entry(elemento.id)
            })
            elemento.addEventListener("input", () => {
                Calculo(metodo)
            })
        })
        //botao ahp
        const botao_ahp = document.querySelector("#botao-ahp")
        botao_ahp.onclick = Open_pop_up_ahp
    }

    if (metodo == "ubc" || metodo == "shb") {
        //botao ahp
        const botao_ahp = document.querySelector("#botao-ahp-ubc")
        botao_ahp.onclick = Open_pop_up_ahp
        //Container
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
        //caixas de input
        const input_pesos = document.querySelectorAll(".input-pesos-ubc")
        input_pesos.forEach((elemento) => {
            elemento.addEventListener("blur", () => {
                Formatar_entry(elemento.id)
            })
            elemento.addEventListener("input", () => {
                Calculo(metodo)
            })
        })
    }

    //MENU SUSPENSO DO RMR
    if (metodo == "ubc" || metodo == "shb") {
        const menu_suspenso_rmr = document.querySelectorAll(".menu-rmr")
        menu_suspenso_rmr.forEach((elemento) => {
            elemento.addEventListener("change", () => {
                Calculo(metodo)
            })
            elemento.addEventListener("mouseover", () => {
                Balao_entra(metodo, "rmr")
            })
            elemento.addEventListener("mouseleave", Balao_sai)
        })
    }

    //BOTÃO MOSTRA TABELA COM OS PESOS
    const botao_pesos = document.querySelector("#botao-pesos")
    botao_pesos.addEventListener("click", () => {
        Open_pop_up_pesos(metodo)
    })
    botao_pesos.addEventListener("mouseover", () => {
        Balao_entra(metodo, "botao-pesos")
    })
    botao_pesos.addEventListener("mouseleave", Balao_sai)

    // //BOTÃO IMPRIMIR RELATÓRIO
    const botao_imprimir = document.querySelector("#botao-imprimir")
    botao_imprimir.addEventListener("click", () => Imprimir_relatorio(metodo))
    botao_imprimir.addEventListener("mouseover", () => {
        Balao_entra(metodo, "botao-imprimir")
    })
    botao_imprimir.addEventListener("mouseleave", Balao_sai)

    //MENU SUSPENSO DA GEOMETRIA DO DEPÓSITO

    const menu_suspenso_geometria = document.querySelectorAll(".menu-geometria")
    menu_suspenso_geometria[0].addEventListener("mouseover", () => {
        Balao_entra(metodo, "forma-geral")
    })
    menu_suspenso_geometria[1].addEventListener("mouseover", () => {
        Balao_entra(metodo, "mergulho")
    })
    menu_suspenso_geometria[2].addEventListener("mouseover", () => {
        Balao_entra(metodo, "espessura")
    })
    menu_suspenso_geometria[3].addEventListener("mouseover", () => {
        Balao_entra(metodo, "distribuicao")
    })
    if (metodo == "ubc" || metodo == "shb") {
        menu_suspenso_geometria[4].addEventListener("mouseover", () => {
            Balao_entra(metodo, "profundidade")
        })
    }
    menu_suspenso_geometria.forEach((elemento) => {
        elemento.addEventListener("change", () => {
            Calculo(metodo)
        })
        elemento.addEventListener("mouseleave", Balao_sai)
    })

    //MENU SUSPENSO DO VALOR ECONOMICO
    const valor_minerio = document.querySelector("#valor-minerio")
    if (valor_minerio) {
        valor_minerio.addEventListener("change", () => {
            Calculo(metodo)
        })
        valor_minerio.addEventListener("mouseover", () => {
            Balao_entra(metodo, "valor-minerio")
        })
        valor_minerio.addEventListener("mouseleave", Balao_sai)
    }

    //MENU SUSPENSO FRACTURE SPACING
    if (metodo == "nicholas_81" || metodo == "nicholas_92") {

        const menu_suspenso_fracture_spacing = document.querySelectorAll(".menu-fracture-spacing")
        menu_suspenso_fracture_spacing.forEach((elemento) => {
            elemento.addEventListener("change", () => {
                Calculo(metodo)
            })
            elemento.addEventListener("mouseover", () => {
                Balao_entra(metodo, "fracture-spacing")
            })
            elemento.addEventListener("mouseleave", Balao_sai)
        })

        //MENU SUSPENSO FRACTURE STRENGHT
        const menu_suspenso_fracture_strenght = document.querySelectorAll(".menu-fracture-strenght")
        menu_suspenso_fracture_strenght.forEach((elemento) => {
            elemento.addEventListener("change", () => {
                Calculo(metodo)
            })
            elemento.addEventListener("mouseover", () => {
                Balao_entra(metodo, "frature-strenght")
            })
            elemento.addEventListener("mouseleave", Balao_sai)
        })
    }

    //INPUT DENSIDADE PROFUNDIDADE UCS
    const inputs_rss = document.querySelectorAll(".input-rss")
    inputs_rss.forEach((elemento) => {
        elemento.addEventListener("blur", () => {
            Formatar_entry(elemento.id)
        })
        elemento.addEventListener("input", () => {
            Calculo(metodo)
        })
    })

    //SPAN COM OS RESULTADOS DO RSS
    const resultado_rss = document.querySelectorAll(".resultado-rss")
    resultado_rss.forEach((elemento) => {
        elemento.addEventListener("mouseover", () => {
            Balao_entra(metodo, "rss")
        })
        elemento.addEventListener("mouseleave", Balao_sai)
    })

    Calculo(metodo)
}
