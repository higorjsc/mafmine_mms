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
            td_rocha_shale: "Folhelho",
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
            span_referencia: ""
                + "<strong>Fonte: </strong>"
                + "<a href='https://doi.org/10.1016/j.tust.2008.12.002' target='_blank'>Palmstöm, 2009.</a>"
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
            td_rocha_andesito: "Andesite",
            td_rocha_anortosito: "Anorthosite",
            td_rocha_basalto: "Basalt",
            td_rocha_diabasio: "Diabase (dolerite)",
            td_rocha_diorito: "Diorite",
            td_rocha_gabro: "Gabbro",
            td_rocha_granito: "Granite",
            td_rocha_granodiorito: "Granodiorite",
            td_rocha_monzenito: "Monzenite",
            td_rocha_nefelina_sienito: "Nepheline Syenite",
            td_rocha_norito: "Norite",
            td_rocha_pegmatito: "Pegmatite",
            td_rocha_riolito: "Rhyolite",
            td_rocha_sienito: "Sienite",
            td_rocha_rochas_ultrabasicas: "Ultrabasic rock",
            td_rocha_carvao: "Coal",
            td_rocha_argilito: "Claystone",
            td_rocha_conglomerado: "Conglomerate",
            td_rocha_coral: "Coral Chalk",
            td_rocha_dolomito: "Dolomite",
            td_rocha_calcario: "Limestone",
            td_rocha_lamito: "Mudstone",
            td_rocha_shale: "Shale",
            td_rocha_arenito: "Sandstone",
            td_rocha_siltito: "Siltstone",
            td_rocha_tufo: "Tuff",
            td_rocha_anfibolito: "Amphibolite",
            td_rocha_anfibolito_gnaisse: "Amphibolitic Gneiss",
            td_rocha_augen_gnaisse: "Augen Gneiss",
            td_rocha_folhelho_negro: "Black Shale",
            td_rocha_granada_micaxisto: "Garnet Mica Schist",
            td_rocha_granito_gnaisse: "Granite Gneiss",
            td_rocha_granulito: "Granulite",
            td_rocha_gnaisse: "Gneiss",
            td_rocha_gnaisse_granito: "Gneiss Granite",
            td_rocha_xisto_verde: "Greenschist",
            td_rocha_greenstone: "Greenstone",
            td_rocha_grauvaque: "Greywacke",
            td_rocha_marmore: "Marble",
            td_rocha_mica_gnaisse: "Mica Gneiss",
            td_rocha_mica_quartizito: "Mica Quartzite",
            td_rocha_mica_xisto: "Mica Schist",
            td_rocha_milonita: "Mylonite",
            td_rocha_filito: "Phyllite",
            td_rocha_arenito_quartzoso: "Quartz Sandstone",
            td_rocha_quartzito: "Quartzite",
            td_rocha_filito_quartizitico: "Quartzitic Phyllite",
            td_rocha_serpentinito: "Serpentinite",
            td_rocha_slate: "Slate",
            td_rocha_talco_xisto: "Talc Schist",
            span_referencia: ""
                + "<strong>Source: </strong>"
                + "<a href='https://doi.org/10.1016/j.tust.2008.12.002' target='_blank'>Palmstöm, 2009.</a>"
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
    Escrever("td-rocha-andesito", "td_rocha_andesito")
    Escrever("td-rocha-anortosito", "td_rocha_anortosito")
    Escrever("td-rocha-basalto", "td_rocha_basalto")
    Escrever("td-rocha-diabasio", "td_rocha_diabasio")
    Escrever("td-rocha-diorito", "td_rocha_diorito")
    Escrever("td-rocha-gabro", "td_rocha_gabro")
    Escrever("td-rocha-granito", "td_rocha_granito")
    Escrever("td-rocha-granodiorito", "td_rocha_granodiorito")
    Escrever("td-rocha-monzenito", "td_rocha_monzenito")
    Escrever("td-rocha-nefelina_sienito", "td_rocha_nefelina_sienito")
    Escrever("td-rocha-norito", "td_rocha_norito")
    Escrever("td-rocha-pegmatito", "td_rocha_pegmatito")
    Escrever("td-rocha-riolito", "td_rocha_riolito")
    Escrever("td-rocha-sienito", "td_rocha_sienito")
    Escrever("td-rocha-rochas_ultrabasicas", "td_rocha_rochas_ultrabasicas")
    Escrever("td-rocha-carvao", "td_rocha_carvao")
    Escrever("td-rocha-argilito", "td_rocha_argilito")
    Escrever("td-rocha-conglomerado", "td_rocha_conglomerado")
    Escrever("td-rocha-coral", "td_rocha_coral")
    Escrever("td-rocha-dolomito", "td_rocha_dolomito")
    Escrever("td-rocha-calcario", "td_rocha_calcario")
    Escrever("td-rocha-lamito", "td_rocha_lamito")
    Escrever("td-rocha-shale", "td_rocha_shale")
    Escrever("td-rocha-arenito", "td_rocha_arenito")
    Escrever("td-rocha-siltito", "td_rocha_siltito")
    Escrever("td-rocha-tufo", "td_rocha_tufo")
    Escrever("td-rocha-anfibolito", "td_rocha_anfibolito")
    Escrever("td-rocha-anfibolito_gnaisse", "td_rocha_anfibolito_gnaisse")
    Escrever("td-rocha-augen_gnaisse", "td_rocha_augen_gnaisse")
    Escrever("td-rocha-folhelho_negro", "td_rocha_folhelho_negro")
    Escrever("td-rocha-granada_micaxisto", "td_rocha_granada_micaxisto")
    Escrever("td-rocha-granito_gnaisse", "td_rocha_granito_gnaisse")
    Escrever("td-rocha-granulito", "td_rocha_granulito")
    Escrever("td-rocha-gnaisse", "td_rocha_gnaisse")
    Escrever("td-rocha-granito_gnaisse", "td_rocha_granito_gnaisse")
    Escrever("td-rocha-granulito", "td_rocha_granulito")
    Escrever("td-rocha-gnaisse", "td_rocha_gnaisse")
    Escrever("td-rocha-gnaisse_granito", "td_rocha_gnaisse_granito")
    Escrever("td-rocha-greenstone", "td_rocha_greenstone")
    Escrever("td-rocha-grauvaque", "td_rocha_grauvaque")
    Escrever("td-rocha-marmore", "td_rocha_marmore")
    Escrever("td-rocha-mica_gnaisse", "td_rocha_mica_gnaisse")
    Escrever("td-rocha-mica_quartizito", "td_rocha_mica_quartizito")
    Escrever("td-rocha-mica_xisto", "td_rocha_mica_xisto")
    Escrever("td-rocha-milonita", "td_rocha_milonita")
    Escrever("td-rocha-filito", "td_rocha_filito")
    Escrever("td-rocha-arenito_quartzoso", "td_rocha_arenito_quartzoso")
    Escrever("td-rocha-quartzito", "td_rocha_quartzito")
    Escrever("td-rocha-filito_quartizitico", "td_rocha_filito_quartizitico")
    Escrever("td-rocha-serpentinito", "td_rocha_serpentinito")
    Escrever("td-rocha-slate", "td_rocha_slate")
    Escrever("td-rocha-talco_xisto", "td_rocha_talco_xisto")
    Escrever("span-referencia", "span_referencia")
}