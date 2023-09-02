
function Imprimir_relatorio() {

    let idioma = Obter_idioma() //pt ou en
    let metodo = Obter_metodo()
    
    //Define os possíveis titulos
    let titulo = {
        "nicholas_81": "Nicholas (1981) Mining Method Selection Procedure",
        "nicholas_92": "Nicholas (1992) Mining Method Selection Procedure",
        "ubc": "UBC (1995) Mining Method Selection Procedure",
        "shb": "Shahriar and Bakhtavar (2007) Mining Method Selection Procedure"
    }

    //Define os textos fixos com base no idioma
    let ob = idioma == "pt" ? "Corpo de minério: " : "Orebody: "
    let geo = idioma == "pt" ? "Geometria: " : "Geometry: "
    let hw = "Hanging wall: "
    let fw = "Footwall: "
    let titulo_user_input = idioma == "pt" ? "DADOS INSERIDOS: " : "INPUT DATA: "
    let titulo_resultados = idioma == "pt" ? "PREFERENCIAS: " : "RANKING: "

    //OBTÉM A DATA E HORA TUAL
    const options = { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
    const dataHoraFormatada = new Date().toLocaleString(undefined, options)

    //OBTÉM O ELEMENTO E RETORNA O TEXTO A SER ESCRITO
    function Texto(id) {
        const elemento = document.getElementById(id).innerText
        return elemento
    }

    function Texto_select(id) {
        const elemento = document.getElementById(id).selectedOptions[0].innerText
        return elemento
    }
    function Texto_input(id) {
        const elemento = document.getElementById(id).value
        return elemento
    }

    //DEFINI A FORMATAÇÃO DO PDF
    const identacao = 40
    const line_spacing = 5
    const left_margin = 30
    let y_coord = 20


    //INICIA O PDF
    const doc = new jsPDF("p", "mm", "a4")
    doc.setProperties({
        title: titulo[metodo]
    })

    doc.setFont("Roboto")
    doc.setFontSize(12)
    doc.setFontStyle("bold")

    doc.text(titulo[metodo], left_margin, y_coord)
    doc.setFontSize(10)
    doc.setFontStyle("normal")
    doc.text(dataHoraFormatada, left_margin, y_coord += line_spacing)

    y_coord += 4
    doc.setFontSize(12)
    doc.setFontStyle("bold")
    doc.text(titulo_user_input, left_margin, y_coord += line_spacing)

    y_coord += 4
    doc.setFontStyle("bold")
    doc.text(Texto("subtitulo-geometria"), identacao, y_coord += line_spacing)

    y_coord += 2
    doc.setFontStyle("normal")
    doc.text(Texto("span-forma-geral") + " " + Texto_select("forma-geral"), identacao, y_coord += line_spacing)
    doc.text(Texto("span-mergulho") + " " + Texto_select("mergulho"), identacao, y_coord += line_spacing)
    doc.text(Texto("span-espessura") + " " + Texto_select("espessura"), identacao, y_coord += line_spacing)
    doc.text(Texto("span-distribuicao") + " " + Texto_select("distribuicao"), identacao, y_coord += line_spacing)
    if (metodo == "ubc" || metodo == "shb") {
        doc.text(Texto("span-profundidade") + " " + Texto_select("profundidade"), identacao, y_coord += line_spacing)
    }
    if (metodo == "shb") {
        y_coord += 5
        doc.setFontStyle("bold")
        doc.text(Texto("subtitulo-valor-minerio"), identacao, y_coord += line_spacing)
        y_coord += 2
        doc.setFontStyle("normal")
        doc.text(Texto("span-valor-minerio") + " " + Texto_select("valor-minerio"), identacao, y_coord += line_spacing)
    }

    y_coord += 4
    doc.setFontStyle("bold")
    doc.text(Texto("subtitulo-rss"), identacao, y_coord += line_spacing)

    y_coord += 2
    doc.setFontStyle("normal")
    doc.text(ob + Texto("resultado-rss-ob"), identacao, y_coord += line_spacing)
    doc.text(hw + Texto("resultado-rss-hw"), identacao, y_coord += line_spacing)
    doc.text(fw + Texto("resultado-rss-fw"), identacao, y_coord += line_spacing)

    if (metodo == "nicholas_81" || metodo == "nicholas_92") {
        //FRACUTRE SPACING
        y_coord += 4
        doc.setFontStyle("bold")
        doc.text(Texto("subtitulo-fracture-spacing"), identacao, y_coord += line_spacing)
        y_coord += 2
        doc.setFontStyle("normal")
        doc.text(ob + Texto_select("fracture-spacing-ob", 1), identacao, y_coord += line_spacing)
        doc.text(hw + Texto_select("fracture-spacing-hw", 1), identacao, y_coord += line_spacing)
        doc.text(fw + Texto_select("fracture-spacing-fw", 1), identacao, y_coord += line_spacing)

        // FRACUTRE STRENGHT
        y_coord += 4
        doc.setFontStyle("bold")
        doc.text(Texto("subtitulo-fracture-strenght"), identacao, y_coord += line_spacing)
        y_coord += 2
        doc.setFontStyle("normal")
        doc.text(ob + Texto_select("fracture-strenght-ob"), identacao, y_coord += line_spacing)
        doc.text(hw + Texto_select("fracture-strenght-hw", 1), identacao, y_coord += line_spacing)
        doc.text(fw + Texto_select("fracture-strenght-fw"), identacao, y_coord += line_spacing)
    }
    if (metodo == "ubc" || metodo == "shb") {
        y_coord += 4
        doc.setFontStyle("bold")
        doc.text(Texto("subtitulo-rmr"), identacao, y_coord += line_spacing)
        y_coord += 2
        doc.setFontStyle("normal")
        doc.text(ob + Texto_select("rmr-ob"), identacao, y_coord += line_spacing)
        doc.text(hw + Texto_select("rmr-hw", 1), identacao, y_coord += line_spacing)
        doc.text(fw + Texto_select("rmr-fw"), identacao, y_coord += line_spacing)
    }

    //PESOS

    if (metodo == "nicholas_92") {
        y_coord += 4
        doc.setFontStyle("bold")
        doc.text(Texto("h2-fatores-peso"), identacao, y_coord += line_spacing)
        y_coord += 2
        doc.setFontStyle("normal")
        const select_fatores = document.getElementById("menu-pesos").value
        if (select_fatores == "1") {
            doc.text(geo + "1.00", identacao, y_coord += line_spacing)
            doc.text(ob + "1.33", identacao, y_coord += line_spacing)
            doc.text(hw + "1.33", identacao, y_coord += line_spacing)
            doc.text(fw + "1.33", identacao, y_coord += line_spacing)
        } else if (select_fatores == "2") {
            doc.text(geo + "1.00", identacao, y_coord += line_spacing)
            doc.text(ob + "0.75", identacao, y_coord += line_spacing)
            doc.text(hw + "0.60", identacao, y_coord += line_spacing)
            doc.text(fw + "0.38", identacao, y_coord += line_spacing)
        } else if (select_fatores == "3") {
            doc.text(geo + "1.00", identacao, y_coord += line_spacing)
            doc.text(ob + "1.00", identacao, y_coord += line_spacing)
            doc.text(hw + "0.80", identacao, y_coord += line_spacing)
            doc.text(fw + "0.50", identacao, y_coord += line_spacing)
        } else {
            doc.text(geo + Texto_input("input-peso-geo"), identacao, y_coord += line_spacing)
            doc.text(ob + Texto_input("input-peso-ob"), identacao, y_coord += line_spacing)
            doc.text(hw + Texto_input("input-peso-hw"), identacao, y_coord += line_spacing)
            doc.text(fw + Texto_input("input-peso-fw"), identacao, y_coord += line_spacing)
        }
    }

    //RESULTADOS
    y_coord += 4
    doc.setFontStyle("bold")
    doc.text(titulo_resultados, left_margin, y_coord += line_spacing)

    y_coord += 4
    doc.setFontStyle("normal")
    doc.text(Texto("div-section-3"), identacao, y_coord += line_spacing)

    const pdfData = doc.output("datauristring") // Gera o URL do documento PDF

    // Abre o PDF em uma nova janela
    const newWindow = window.open("", "_blank")
    newWindow.document.write("<html><body><embed width=\"100%\" height=\"100%\" type=\"application/pdf\" src=\"" + pdfData + "\"></body></html>")
    newWindow.document.close()
}
