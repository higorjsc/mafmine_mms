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
            titulo_tabela_rochas: "UNIAXIAL COMPRESSIVE STRENGHT: &ensp;&ensp;",
            select_tipo_rocha_0: "Rochas Ígneas",
            select_tipo_rocha_1: "Rochas Sedimentares",
            select_tipo_rocha_2: "Rochas Metamórficas",
            th_rocha_titulo: "Rocha",
            td_minimo_titulo: "Mínimo<br>(MPa)",
            td_medio_titulo: "Médio<br>(MPa)",
            td_maximo_titulo: "Máximo<br>(MPa)",
            td_rocha-andesito: "Andesito",
            td_rocha-anortosito: "Anortosito",
            td_rocha-basalto: "Basalto",
            td_rocha-diabasio: "Diabásio",
            td_rocha-diorito: "Diorito",
            td_rocha-gabro: "Gabro",
            td_rocha-granito: "Granito",
            td_rocha-granodiorito: "Granodiorito",
            td_rocha-monzenito: "Monzenito",
            td_rocha-nefelina_sienito: "Nefelina sienito",
            td_rocha-norito: "Norito",
            td_rocha-pegmatito: "Pegmatito",
            td_rocha-riolito: "Riolito",
            td_rocha-sienito: "Sienito",
            td_rocha-rochas_ultrabasicas: "Rochas ultrabásicas",
            td_rocha-rochas_ultrabasicas: "Carvão",
            td_rocha-rochas_ultrabasicas: "Argilito",
            td_rocha-rochas_ultrabasicas: "Conglomerado",
            td_rocha-rochas_ultrabasicas: "Coral Chalk",
            td_rocha-rochas_ultrabasicas: "Dolomito",
            td_rocha-rochas_ultrabasicas: "Calcário",
            td_rocha-rochas_ultrabasicas: "Lamito",
            td_rocha-rochas_ultrabasicas: "Folhelho",
            td_rocha-rochas_ultrabasicas: "Arenito",
            td_rocha-rochas_ultrabasicas: "Siltito",
            td_rocha-rochas_ultrabasicas: "Tufo",
            td_rocha-rochas_ultrabasicas: "Anfibolito",
            td_rocha-rochas_ultrabasicas: "Anfibolito Gnaisse",
            td_rocha-rochas_ultrabasicas: "Folhelho Negro",
            td_rocha-rochas_ultrabasicas: "Granada Micaxisto",
            td_rocha-rochas_ultrabasicas: "Granito-gnaisse",
            td_rocha-rochas_ultrabasicas: "Granulito",
            td_rocha-rochas_ultrabasicas: "Gnaisse",
            td_rocha-rochas_ultrabasicas: "Gnaisse-granito",
            td_rocha-rochas_ultrabasicas: "Xisto-verde",
            td_rocha-rochas_ultrabasicas: "Greenstone",
            td_rocha-rochas_ultrabasicas: "Grauvaque",
            td_rocha-rochas_ultrabasicas: "Mármore",
            td_rocha-rochas_ultrabasicas: "Mica-gnaisse",
            td_rocha-rochas_ultrabasicas: "Mica-quartzito",
            td_rocha-rochas_ultrabasicas: "Micaxisto",
            td_rocha-rochas_ultrabasicas: "Milonita",
            td_rocha-rochas_ultrabasicas: "Filito",
            td_rocha-rochas_ultrabasicas: "Arenito Quartzoso",
            td_rocha-rochas_ultrabasicas: "Quartzito",
            td_rocha-rochas_ultrabasicas: "Filito-quartzítico",
            td_rocha-rochas_ultrabasicas: "Serpentinito",
            td_rocha-rochas_ultrabasicas: "Slate",
            td_rocha-rochas_ultrabasicas: "Talco-xisto",
   
        },
        "en": {
            span_help: "CLICK ON VALUE",
            titulo_tabela_rochas: "UNIAXIAL COMPRESSIVE STRENGHT: &ensp;&ensp;",
            select_tipo_rocha_0: "Igneous Rocks",
            select_tipo_rocha_1: "Sedimentary Rocks",
            select_tipo_rocha_2: "Metamorphic Rocks",
            th_rocha_titulo: "Rock",
            td_minimo_titulo: "Low<br>(MPa)",
            td_medio_titulo: "Average<br>(MPa)",
            td_maximo_titulo: "High<br>(MPa)",
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
    Escrever("select-tipo-rocha", "select_tipo_rocha_0", 0)
    Escrever("select-tipo-rocha", "select_tipo_rocha_1", 1)
    Escrever("select-tipo-rocha", "select_tipo_rocha_2", 2)
    Escrever("th-rocha-titulo", "th_rocha_titulo")
    Escrever("td-minimo-titulo", "td_minimo_titulo")
    Escrever("td-medio-titulo", "td_medio_titulo")
    Escrever("td-maximo-titulo", "td_maximo_titulo")
}