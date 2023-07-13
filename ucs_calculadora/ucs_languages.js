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
            td_rocha_andesito: "Andesito",
            td_rocha_anortosito: "Anortosito",
            td_rocha_basalto: "Basalto",
            td_rocha_diabasio: "Diabásio",
            td_rocha_diorito: "Diorito",
            td_rocha_gabro: "Gabro",
            td_rocha_granito: "Granito",
            td_rocha_granodiorito: "Granodiorito",
            td_rocha_monzenito: "Monzenito",
            td_rocha_nefelina_sienito: "Nefelina sienito",
            td_rocha_norito: "Norito",
            td_rocha_pegmatito: "Pegmatito",
            td_rocha_riolito: "Riolito",
            td_rocha_sienito: "Sienito",
            td_rocha_rochas_ultrabasicas: "Rochas ultrabásicas",
            td_rocha_carvao: "Carvão",
            td_rocha_argilito: "Argilito",
            td_rocha_conglomerado: "Conglomerado",
            td_rocha_coral: "Coral Chalk",
            td_rocha_dolomito: "Dolomito",
            td_rocha_calcario: "Calcário",
            td_rocha_lamito: "Lamito",
            td_rocha_folhelho: "Folhelho",
            td_rocha_arenito: "Arenito",
            td_rocha_siltito: "Siltito",
            td_rocha_tufo: "Tufo",
            td_rocha_anfibolito: "Anfibolito",
            td_rocha_anfibolito_gnaisse: "Anfibolito Gnaisse",
            td_rocha_augen_gnaisse: "Augen Gnaisse",
            td_rocha_folhelho_negro: "Folhelho Negro",
            td_rocha_granada_micaxisto: "Granada Micaxisto",
            td_rocha_granito_gnaisse: "Granito-gnaisse",
            td_rocha_granulito: "Granulito",
            td_rocha_gnaisse: "Gnaisse",
            td_rocha_gnaisse_granito: "Gnaisse-granito",
            td_rocha_xisto_verde: "Xisto-verde",
            td_rocha_greenstone: "Greenstone",
            td_rocha_grauvaque: "Grauvaque",
            td_rocha_marmore: "Mármore",
            td_rocha_mica_gnaisse: "Mica-gnaisse",
            td_rocha_mica_quartizito: "Mica-quartzito",
            td_rocha_mica_xisto: "Micaxisto",
            td_rocha_milonita: "Milonita",
            td_rocha_filito: "Filito",
            td_rocha_arenito_quartzoso: "Arenito Quartzoso",
            td_rocha_quartzito: "Quartzito",
            td_rocha_filito_quartizitico: "Filito-quartzítico",
            td_rocha_serpentinito: "Serpentinito",
            td_rocha_slate: "Slate",
            td_rocha_talco_xisto: "Talco-xisto",
   
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
            td_rocha_andesito: "Andesito",
            td_rocha_anortosito: "Anortosito",
            td_rocha_basalto: "Basalto",
            td_rocha_diabasio: "Diabásio",
            td_rocha_diorito: "Diorito",
            td_rocha_gabro: "Gabro",
            td_rocha_granito: "Granito",
            td_rocha_granodiorito: "Granodiorito",
            td_rocha_monzenito: "Monzenito",
            td_rocha_nefelina_sienito: "Nefelina sienito",
            td_rocha_norito: "Norito",
            td_rocha_pegmatito: "Pegmatito",
            td_rocha_riolito: "Riolito",
            td_rocha_sienito: "Sienito",
            td_rocha_rochas_ultrabasicas: "Rochas ultrabásicas",
            td_rocha_carvao: "Carvão",
            td_rocha_argilito: "Argilito",
            td_rocha_conglomerado: "Conglomerado",
            td_rocha_coral: "Coral Chalk",
            td_rocha_dolomito: "Dolomito",
            td_rocha_calcario: "Calcário",
            td_rocha_lamito: "Lamito",
            td_rocha_folhelho: "Folhelho",
            td_rocha_arenito: "Arenito",
            td_rocha_siltito: "Siltito",
            td_rocha_tufo: "Tufo",
            td_rocha_anfibolito: "Anfibolito",
            td_rocha_anfibolito_gnaisse: "Anfibolito Gnaisse",
            td_rocha_augen_gnaisse: "Augen Gnaisse",
            td_rocha_folhelho_negro: "Folhelho Negro",
            td_rocha_granada_micaxisto: "Granada Micaxisto",
            td_rocha_granito_gnaisse: "Granito-gnaisse",
            td_rocha_granulito: "Granulito",
            td_rocha_gnaisse: "Gnaisse",
            td_rocha_gnaisse_granito: "Gnaisse-granito",
            td_rocha_xisto_verde: "Xisto-verde",
            td_rocha_greenstone: "Greenstone",
            td_rocha_grauvaque: "Grauvaque",
            td_rocha_marmore: "Mármore",
            td_rocha_mica_gnaisse: "Mica-gnaisse",
            td_rocha_mica_quartizito: "Mica-quartzito",
            td_rocha_mica_xisto: "Micaxisto",
            td_rocha_milonita: "Milonita",
            td_rocha_filito: "Filito",
            td_rocha_arenito_quartzoso: "Arenito Quartzoso",
            td_rocha_quartzito: "Quartzito",
            td_rocha_filito_quartizitico: "Filito-quartzítico",
            td_rocha_serpentinito: "Serpentinito",
            td_rocha_slate: "Slate",
            td_rocha_talco_xisto: "Talco-xisto",
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
    Escrever("td_rocha_andesito", "td_rocha_andesito")
    Escrever("td_rocha_anortosito", "td_rocha_anortosito")
    Escrever("td_rocha_basalto", "td_rocha_basalto")
    Escrever("td_rocha_diabasio", "td_rocha_diabasio")
    Escrever("td_rocha_diorito", "td_rocha_diorito")
    Escrever("td_rocha_gabro", "td_rocha_gabro")
    Escrever("td_rocha_granito", "td_rocha_granito")
    Escrever("td_rocha_granodiorito", "td_rocha_granodiorito")
    Escrever("td_rocha_monzenito", "td_rocha_monzenito")
    Escrever("td_rocha_nefelina_sienito", "td_rocha_nefelina_sienito")
    Escrever("td_rocha_norito", "td_rocha_norito")
    Escrever("td_rocha_pegmatito", "td_rocha_pegmatito")
    Escrever("td_rocha_riolito", "td_rocha_riolito")
    Escrever("td_rocha_sienito", "td_rocha_sienito")
    Escrever("td_rocha_rochas_ultrabasicas", "td_rocha_rochas_ultrabasicas")
    Escrever("td_rocha_carvao", "td_rocha_carvao")
    Escrever("td_rocha_argilito", "td_rocha_argilito")
    Escrever("td_rocha_conglomerado", "td_rocha_conglomerado")
    Escrever("td_rocha_coral", "td_rocha_coral")
    Escrever("td_rocha_calcario", "td_rocha_dolomito")
    Escrever("td_rocha_lamito", "td_rocha_lamito")
    Escrever("td_rocha_folhelho", "td_rocha_folhelho")
    Escrever("td_rocha_arenito", "td_rocha_arenito")
    Escrever("td_rocha_siltito", "td_rocha_siltito")
    Escrever("td_rocha_tufo", "td_rocha_tufo")
    Escrever("td_rocha_anfibolito", "td_rocha_anfibolito")
    Escrever("td_rocha_anfibolito_gnaisse", "td_rocha_anfibolito_gnaisse")
    Escrever("td_rocha_augen_gnaisse", "td_rocha_augen_gnaisse")
    Escrever("td_rocha_folhelho_negro", "td_rocha_folhelho_negro")
    Escrever("td_rocha_granada_micaxisto", "td_rocha_granada_micaxisto")
    Escrever("td_rocha_granito_gnaisse", "td_rocha_granito_gnaisse")
    Escrever("td_rocha_granulito", "td_rocha_granulito")
    Escrever("td_rocha_gnaisse", "td_rocha_gnaisse")
    Escrever("td_rocha_granito_gnaisse", "td_rocha_granito_gnaisse")
    Escrever("td_rocha_granulito", "td_rocha_granulito")
    Escrever("td_rocha_gnaisse", "td_rocha_gnaisse")
    Escrever("td_rocha_gnaisse_granito", "td_rocha_gnaisse_granito")
    Escrever("td_rocha_greenstone", "td_rocha_greenstone")
    Escrever("td_rocha_grauvaque", "td_rocha_grauvaque")
    Escrever("td_rocha_marmore", "td_rocha_marmore")
    Escrever("td_rocha_mica_gnaisse", "td_rocha_mica_gnaisse")
    Escrever("td_rocha_mica_quartizito", "td_rocha_mica_quartizito")
    Escrever("td_rocha_mica_xisto", "td_rocha_mica_xisto")
    Escrever("td_rocha_milonita", "td_rocha_milonita")
    Escrever("td_rocha_filito", "td_rocha_filito")
    Escrever("td_rocha_arenito_quartzoso", "td_rocha_arenito_quartzoso")
    Escrever("td_rocha_quartzito", "td_rocha_quartzito")
    Escrever("td_rocha_filito_quartizitico", "td_rocha_filito_quartizitico")
    Escrever("td_rocha_serpentinito", "td_rocha_serpentinito")
    Escrever("td_rocha_slate", "td_rocha_slate")
    Escrever("td_rocha_talco_xisto", "td_rocha_talco_xisto")
}