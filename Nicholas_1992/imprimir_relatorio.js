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

    const geometria = document.querySelectorAll('.menu_geometria')
    const rss = document.querySelectorAll('.resultado_rss')
    const subtitulo_fracture_spacing = document.querySelector('#subtitulo_fracture_spacing').innerText
    const subtitulo_fracture_strenght = document.querySelector('#subtitulo_fracture_strenght').innerText
    const fracture_spacing = document.querySelectorAll('.menu_fracture_spacing')
    const fracture_strenght = document.querySelectorAll('.menu_fracture_strenght')
    const preferencias = document.querySelector('#div_section_3')

    let y = 30
    const line_spacing = 5
    const ident = 40
    const margin_left = 30

    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const dataHoraFormatada = new Date().toLocaleString(undefined, options);

    const doc = new jsPDF("p", "mm", "a4")
    
    doc.setProperties({
      title: "Nicholas (1992) Mining Method Selection"
    });

    doc.setFont("Roboto")
    doc.setFontSize(12)

    doc.setFontStyle("bold")
    doc.text("Nicholas (1981) Mining Method Selection", 30, y)
    doc.setFontSize(10)
    doc.setFontStyle("normal")
    doc.text(dataHoraFormatada, 30, y+=line_spacing)

    y+=10
    doc.setFontSize(12)
    doc.setFontStyle("bold")
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

    y+=5
    doc.setFontStyle("bold")
    doc.text("Rock Substance Strenght", ident, y+=line_spacing)

    y+=2
    doc.setFontStyle("normal")
    doc.text(ob + rss[0].innerText, ident, y+=line_spacing)
    doc.text("Hanging Wall: "+rss[1].innerText, ident, y+=line_spacing)
    doc.text("Footwall: "+rss[2].innerText, ident, y+=line_spacing)

    y+=5
    doc.setFontStyle("bold")
    doc.text(subtitulo_fracture_spacing, ident, y+=line_spacing)

    y+=2
    doc.setFontStyle("normal")
    doc.text(ob + fracture_spacing[0].selectedOptions[0].innerText, ident, y+=line_spacing)
    doc.text("Hanging Wall: " + fracture_spacing[1].selectedOptions[0].innerText, ident, y+=line_spacing)
    doc.text("Footwall: " + fracture_spacing[2].selectedOptions[0].innerText, ident, y+=line_spacing) 
    
    y+=5
    doc.setFontStyle("bold")
    doc.text(subtitulo_fracture_strenght, ident, y+=line_spacing)

    y+=2
    doc.setFontStyle("normal")
    doc.text(ob + fracture_strenght[0].selectedOptions[0].innerText, ident, y+=line_spacing)
    doc.text("Hanging Wall: " + fracture_strenght[1].selectedOptions[0].innerText, ident, y+=line_spacing)
    doc.text("Footwall: " + fracture_strenght[2].selectedOptions[0].innerText, ident, y+=line_spacing)
    
    y+=5
    doc.setFontStyle("bold")
    if(idioma=='pt')
    {
      doc.text("Multiplicadores de Peso:", ident, y+=line_spacing)
    }else
    {
      doc.text("Weighting Factors", ident, y+=line_spacing)
    }
    y+=2
    doc.setFontStyle("normal")
    const select_fatores = document.getElementById('menu_pesos').value
    const input_pesos = document.getElementsByClassName('input_pesos').value
    if(Number(select_fatores) == 1){
         doc.text('Geometria: ' + '1.00', ident, y+=line_spacing)
         doc.text(ob + '1.33', ident, y+=line_spacing)
         doc.text('Hanging Wall: ' + '1.33', ident, y+=line_spacing)
         doc.text('Footwall: ' + '1.33', ident, y+=line_spacing)
    }else if(Number(select_fatores) == 1){
         doc.text('Geometria: ' + '1.00', ident, y+=line_spacing)
         doc.text(ob + '0.75', ident, y+=line_spacing)
         doc.text('Hanging Wall: ' + '0.60', ident, y+=line_spacing)
         doc.text('Footwall: ' + '0.38', ident, y+=line_spacing)
    }else if(Number(select_fatores) == 1){
         doc.text('Geometria: ' + '1.00', ident, y+=line_spacing)
         doc.text(ob + '1.00', ident, y+=line_spacing)
         doc.text('Hanging Wall: ' + '0.80', ident, y+=line_spacing)
         doc.text('Footwall: ' + '0.50', ident, y+=line_spacing)
    }else{
        doc.text('Geometria: ' + input_pesos[0], ident, y+=line_spacing)
        doc.text(ob + '1.33', + input_pesos[1],  ident, y+=line_spacing)
        doc.text('Hanging Wall: ' + input_pesos[2], ident, y+=line_spacing)
        doc.text('Footwall: ' + input_pesos[3], ident, y+=line_spacing)
    }

    y+=10
    doc.setFontStyle("bold")
    if(idioma=='pt')
    {
      doc.text("PREFERENCIAS:", margin_left, y+=line_spacing)
    }else
    {
      doc.text("RANKING:", margin_left, y+=line_spacing)
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