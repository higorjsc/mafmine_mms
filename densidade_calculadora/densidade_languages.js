window.addEventListener("message", function (event) {
    if (event.data === "CallLanguage") {
        Language() // Chame a função do módulo do iframe
    }
})

function Language() {

    let idioma_janela = parent.document.getElementById("titulo-pagina").innerText
    idioma_janela = idioma_janela.includes("SELEÇÃO") ? "pt" : "en"

    const idiomas = {
        "pt": {
            span_help: "CLIQUE NO VALOR DESEJADO",
            titulo_tabela_rochas: "TABELA DE MASSAS ESPECÍFCIAS: &ensp;&ensp;",
            select_tipo_rocha_0: "Rochas Ígneas",
            select_tipo_rocha_1: "Rochas Sedimentares",
            select_tipo_rocha_2: "Rochas Metamórficas",
            th_rocha_titulo: "Rocha",
            td_minimo_titulo: "Mínimo<br>(Kg/m³)",
            td_medio_titulo: "Médio<br>(Kg/m³)",
            td_maximo_titulo: "Máximo<br>(Kg/m³)",
            td_rocha_andesito: "Rocha",
            td_rocha_basalto: "Basalto",
            td_rocha_dacito: "Dacito",
            td_rocha_diorito: "Diorito",
            td_rocha_diabasio: "Diabásio",
            td_rocha_gabro: "Gabro",
            td_rocha_granito: "Granito",
            td_rocha_granodiorito: "Granodiorito",
            td_rocha_riolito: "Riolito",
            td_rocha_brecha_vulcanica: "Brecha Vulcânica",
            td_rocha_sienito: "Sienito",
            td_rocha_ignimbrite: "Ignimbrito",
            td_rocha_lamprophyre: "Lamprófiro",
            td_rocha_peridotite: "Peridotito",
            td_rocha_phonolite: "Fonólito",
            td_rocha_pumice: "Púmice",
            td_rocha_pyroxenite: "Piroxenito",
            td_rocha_spilite: "Espilita",
            td_rocha_trachyte: "Traquito",
            td_rocha_argilito: "Argilito",
            td_rocha_brecha: "Brecha",
            td_rocha_coal: "Carvão",
            td_rocha_conglomer: "Conglomerado",
            td_rocha_limestone: "Calcário",
            td_rocha_mudstone: "Lamita",
            td_rocha_sandstone: "Arenito",
            td_rocha_siltstone: "Siltito",
            td_rocha_tuff: "Tufo",
            td_rocha_diatomite: "Diatomita",
            td_rocha_lignite: "Lignita",
            td_rocha_anfibolito: "Anfibolito",
            td_rocha_gneiss: "Gnaisse",
            td_rocha_granulite: "Granulito",
            td_rocha_marble: "Mármore",
            td_rocha_greenschist: "Xisto-verde",
            td_rocha_quartzite: "Quartzito",
            td_rocha_schist: "Xisto",
            td_rocha_serpent: "Serpentinito",
            td_rocha_greywack: "Grauvaque",
            td_rocha_mylonite: "Milonita",
            td_rocha_hornfels: "Hornfels",
        },
        "en": {
            span_help: "CLIQUE NO VALOR DESEJADO",
            titulo_tabela_rochas: "TABELA DE MASSAS ESPECÍFCIAS: &ensp;&ensp;",
            select_tipo_rocha_0: "Rochas Ígneas",
            select_tipo_rocha_1: "Rochas Sedimentares",
            select_tipo_rocha_2: "Rochas Metamórficas",
            th_rocha_titulo: "Rocha",
            td_minimo_titulo: "Mínimo<br>(Kg/m³)",
            td_medio_titulo: "Médio<br>(Kg/m³)",
            td_maximo_titulo: "Máximo<br>(Kg/m³)",
            td_rocha_andesito: "Rocha",
            td_rocha_basalto: "Basalto",
            td_rocha_dacito: "Dacito",
            td_rocha_diorito: "Diorito",
            td_rocha_diabasio: "Diabásio",
            td_rocha_gabro: "Gabro",
            td_rocha_granito: "Granito",
            td_rocha_granodiorito: "Granodiorito",
            td_rocha_riolito: "Riolito",
            td_rocha_brecha_vulcanica: "Brecha Vulcânica",
            td_rocha_sienito: "Sienito",
            td_rocha_ignimbrite: "Ignimbrito",
            td_rocha_lamprophyre: "Lamprófiro",
            td_rocha_peridotite: "Peridotito",
            td_rocha_phonolite: "Fonólito",
            td_rocha_pumice: "Púmice",
            td_rocha_pyroxenite: "Piroxenito",
            td_rocha_spilite: "Espilita",
            td_rocha_trachyte: "Traquito",
            td_rocha_argilito: "Argilito",
            td_rocha_brecha: "Brecha",
            td_rocha_coal: "Carvão",
            td_rocha_conglomer: "Conglomerado",
            td_rocha_limestone: "Calcário",
            td_rocha_mudstone: "Lamita",
            td_rocha_sandstone: "Arenito",
            td_rocha_siltstone: "Siltito",
            td_rocha_tuff: "Tufo",
            td_rocha_diatomite: "Diatomita",
            td_rocha_lignite: "Lignita",
            td_rocha_anfibolito: "Anfibolito",
            td_rocha_gneiss: "Gnaisse",
            td_rocha_granulite: "Granulito",
            td_rocha_marble: "Mármore",
            td_rocha_greenschist: "Xisto-verde",
            td_rocha_quartzite: "Quartzito",
            td_rocha_schist: "Xisto",
            td_rocha_serpent: "Serpentinito",
            td_rocha_greywack: "Grauvaque",
            td_rocha_mylonite: "Milonita",
            td_rocha_hornfels: "Hornfels",
        }
    }

    idioma_selecionado = idiomas[idioma_janela]
    let Escrever = (id, texto, op) => {
        const elemento = document.getElementById(id)
        if (op === undefined) {
            elemento.innerHTML = idioma_selecionado[texto]
        } else {
            elemento.options[op].text = idioma_selecionado[texto]
        }
    }

    Escrever("span-help", "span_help")
    Escrever("titulo-tabela-rochas", "titulo_tabela_rochas")
    Escrever("select-tipo-rocha", "select_tipo_rocha_0")
    Escrever("select-tipo-rocha", "select_tipo_rocha_1")
    Escrever("select-tipo-rocha", "select_tipo_rocha_2")
    Escrever("th-rocha-titulo", "th_rocha_titulo")
    Escrever("td-minimo-titulo", "td_minimo_titulo")
    Escrever("td-medio-titulo", "td_medio_titulo")
    Escrever("td-maximo-titulo", "td_maximo_titulo")
    Escrever("td-rocha-andesito", "td_rocha_andesito")
    Escrever("td-rocha-basalto", "td_rocha_basalto")
    Escrever("td-rocha-dacito", "td_rocha_dacito")
    Escrever("td-rocha-diorito", "td_rocha_diorito")
    Escrever("td-rocha-diabasio", "td_rocha_diabasio")
    Escrever("td-rocha-gabro", "td_rocha_gabro")
    Escrever("td-rocha-granito", "td_rocha_granito")
    Escrever("td-rocha-granodiorito", "td_rocha_granodiorito")
    Escrever("td-rocha-riolito", "td_rocha_riolito")
    Escrever("td-rocha-brecha_vulcanica", "td_rocha_brecha_vulcanica")
    Escrever("td-rocha-sienito", "td_rocha_sienito")
    Escrever("td-rocha-ignimbrite", "td_rocha_ignimbrite")
    Escrever("td-rocha-lamprophyre", "td_rocha_lamprophyre")
    Escrever("td-rocha-peridotite", "td_rocha_peridotite")
    Escrever("td-rocha-phonolite", "td_rocha_phonolite")
    Escrever("td-rocha-pumice", "td_rocha_pumice")
    Escrever("td-rocha-pyroxenite", "td_rocha_pyroxenite")
    Escrever("td-rocha-spilite", "td_rocha_spilite")
    Escrever("td-rocha-trachyte", "td_rocha_trachyte")
    Escrever("td-rocha-argilito", "td_rocha_argilito")
    Escrever("td-rocha-brecha", "td_rocha_brecha")
    Escrever("td-rocha-coal", "td_rocha_coal")
    Escrever("td-rocha-conglomer", "td_rocha_conglomer")
    Escrever("td-rocha-limestone", "td_rocha_limestone")
    Escrever("td-rocha-mudstone", "td_rocha_mudstone")
    Escrever("td-rocha-sandstone", "td_rocha_sandstone")
    Escrever("td-rocha-siltstone", "td_rocha_siltstone")
    Escrever("td-rocha-tuff", "td_rocha_tuff")
    Escrever("td-rocha-diatomite", "td_rocha_diatomite")
    Escrever("td-rocha-lignite", "td_rocha_lignite")
    Escrever("td-rocha-anfibolito", "td_rocha_anfibolito")
    Escrever("td-rocha-gneiss", "td_rocha_gneiss")
    Escrever("td-rocha-granulite", "td_rocha_granulite")
    Escrever("td-rocha-marble", "td_rocha_marble")
    Escrever("td-rocha-greenschist", "td_rocha_greenschist")
    Escrever("td-rocha-quartzite", "td_rocha_quartzite")
    Escrever("td-rocha-schist", "td_rocha_schist")
    Escrever("td-rocha-serpent", "td_rocha_serpent")
    Escrever("td-rocha-greywack", "td_rocha_greywack")
    Escrever("td-rocha-mylonite", "td_rocha_mylonite")
    Escrever("td-rocha-hornfels", "td_rocha_hornfels")
}