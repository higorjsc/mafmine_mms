function Imprimir()
{  
    const titulo = document.getElementById('titulo_section_1').innerText
    let idioma
    let ob
    if(titulo.includes('CHARACTERISTICS')){
        idioma = 'en'
        ob = 'Orebody: '
    }else{
        idioma = 'pt'
        ob = 'Corpo de minério: '
    }
    const subtitulo_geometria = document.querySelector('#subtitulo_geometria').innerText
    const span_forma_geral = document.querySelector('#span_forma_geral').innerText
    const span_mergulho = document.querySelector('#span_mergulho').innerText
    const span_espessura = document.querySelector('#span_espessura').innerText
    const span_distribuicao = document.querySelector('#span_distribuicao').innerText
    const span_profundidade = document.querySelector('#span_profundidade').innerText

    const geometria = document.querySelectorAll('.menu_geometria')
    const rss = document.querySelectorAll('.resultado_rss')
    const rmr = document.querySelectorAll('.menu_rmr')
    const preferencias = document.querySelector('#div_section_3')



    let y = 30
    const line_spacing = 5
    const ident = 40
    const margin_left = 30

    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const dataHoraFormatada = new Date().toLocaleString(undefined, options);

    const doc = new jsPDF("p", "mm", "a4")
    
    doc.setProperties({
      title: "UBC Mining Method Selection"
    });

    doc.setFont("Roboto")
    doc.setFontSize(12)

    doc.setFontStyle("bold")
    doc.text("UBC MINING METHOD SELECTION", 30, y)
    doc.setFontSize(10)
    doc.setFontStyle("normal")
    doc.text(dataHoraFormatada, 30, y+=line_spacing)

    y+=10
    doc.setFontSize(12)
    if(idioma=='pt')
    {
      doc.text("DADOS INSERIDOS:", margin_left, y+=line_spacing)
    }else
    {
      doc.text("INPUT DATA:", margin_left, y+=line_spacing)
    }
    

    y+=10
    doc.setFontStyle("bold")
    doc.text(subtitulo_geometria, ident, y+=line_spacing)

    y+=2
    doc.setFontStyle("normal")
    doc.text(span_forma_geral + ' ' + geometria[0].selectedOptions[0].innerText, ident, y+=line_spacing)
    doc.text(span_mergulho + ' ' + geometria[1].selectedOptions[0].innerText, ident, y+=line_spacing)
    doc.text(span_espessura + ' ' + geometria[2].selectedOptions[0].innerText, ident, y+=line_spacing)
    doc.text(span_distribuicao + ' ' + geometria[3].selectedOptions[0].innerText, ident, y+=line_spacing)
    doc.text(span_profundidade + ' ' + geometria[4].selectedOptions[0].innerText, ident, y+=line_spacing)

    y+=5
    doc.setFontStyle("bold")
    doc.text("Rock Substance Strenght", ident, y+=line_spacing)

    y+=2
    doc.setFontStyle("normal")
    doc.text(ob +  rss[0].innerText, ident, y+=line_spacing)
    doc.text("Hanging Wall: "+rss[1].innerText, ident, y+=line_spacing)
    doc.text("Footwall: "+rss[2].innerText, ident, y+=line_spacing)

    y+=5
    doc.setFontStyle("bold")
    doc.text("Rock Mass Rating", ident, y+=line_spacing)

    y+=2
    doc.setFontStyle("normal")
    doc.text(ob + rmr[0].selectedOptions[0].innerText, ident, y+=line_spacing)
    doc.text("Hanging Wall: "+rmr[1].selectedOptions[0].innerText, ident, y+=line_spacing)
    doc.text("Footwall: "+rmr[2].selectedOptions[0].innerText, ident, y+=line_spacing)
    
    y+=10
    if(idioma=='pt')
    {
      doc.text("PREFERENCIAS:", margin_left, y+=line_spacing)
    }else
    {
      doc.text("EVALUATION:", margin_left, y+=line_spacing)
    }

    y+=10
    doc.setFontStyle("normal")
    doc.text(preferencias.innerText, ident, y+=line_spacing)

    const pdfData = doc.output("datauristring"); // Gera o URL do documento PDF

    // Abre o PDF em uma nova janela
    const newWindow = window.open('', '_blank');
    newWindow.document.write('<html><body><embed width="100%" height="100%" type="application/pdf" src="' + pdfData + '"></body></html>');
    newWindow.document.close();
}