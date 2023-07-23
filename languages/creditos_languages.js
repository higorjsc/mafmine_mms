window.addEventListener("message", function (event) {
    if (event.data === "CallLanguage") {
        Language_creditos() // Chame a função do módulo do iframe
    }
})

function Language_creditos() {
    let idioma_janela = parent.document.getElementById("titulo-pagina").innerText
    idioma_janela = idioma_janela.includes("SELEÇÃO") ? "pt" : "en"

    const idiomas = {
        pt: {
            titulo_ferramenta: "SELEÇÃO DE MÉTODOS DE LAVRA",
            inspiracao: "Insipirado na 'Online Toll: Mining Method Selection' da <a href='https://www.edumine.com/'>EduMine</a>",
            titulo_creditos: "<br>CRÉDITOS",
            autores: "Autores: Campos, H. Cardozo, F.",
            orientacao: "Orientador: Campos, H. Cardozo, F.",
            universidade: "Universidade: Universidade Federal do Rio Grande do Sul (UFRGS)",
            orgao: "Orgão: Laboratório de Processamento Mineral (LAPROM)",
            localizacao: "Local: Porto Alegre, Rio Grande do Sul, Brasil.",
            data_publicacao: "Publicado em: 2023",
            desenvolvedor: "Programação: Campos, H.",
            versao: "Versão: 1.0",

            titulo_referencias: "<br>REFERENCIAS",
            ref_1: "- " + "BIENIAWSKI, Z. T. Engineering Rock Mass Classifications: A Complete Manual for Engineers and Geologists in Mining, Civil, and Petroleum Engineering. [S. l.]: John Wiley & Sons, 1989. ",
            ref_2: "<br>- " + "NICHOLAS, D.E. Method Selection - A Numerical Aproach. Em: DESIGN AND OPERATION OF CAVING AND SUBLEVEL STOPING MINE. Stewart, Daniel R.ed. New York: Society of Mining Engineers of the American Institute of Mining, Metallurgical, and Petroleum Engineers, 1981. ",
            ref_3: "<br>- " + "NICHOLAS, D.E. Selection Procedure. Em: MINING ENGINEERING HANDBOOK. 2nd. ed. Littleton, Colorado: Society for Mining, Metallurgy, and Exploration, Inc., 1992. v. 2, p. 2090–2106. ",
            ref_4: "<br>- " + "HOEK, E.; CARTER, T. G.; DIEDERICHS, M. S. Quantification of the geological strength index chart. Em: 47TH US ROCK MECHANICS / GEOMECHANICS SYMPOSIUM 2013, 2013. US Rock Mech. / Geomech. Symp. [S. l.: s. n.], 2013. p. 1757–1764.",
            ref_5: "<br>- " + "PALMSTRÖM, A. Combining the RMR, Q, and RMi classification systems. Tunnelling and Underground Space Technology, [s. l.], v. 24, n. 4, p. 491–492, 2009. ",
            ref_6: "<br>- " + "RIBEIRO, M. C. de C. R.; ALVES, A. da S. Aplicação do método Analytic Hierarchy Process (AHP) com a mensuração absoluta num problema de seleção qualitativa. Sistemas & Gestão, [s. l.], v. 11, n. 3, p. 270–281, 2016. ",
            ref_7: "<br>- " + "SAATY, T. L. How to make a decision: The Analytic Hierarchy Process. [s. l.], ",
            ref_8: "<br>- " + "SHAHRIAR, K. et al. A New Numerical Method And AHP For Mining Method Selection. Em: , 2007. Proc. 4th Int. Symp, on ‘High performance mine production. [S. l.: s. n.], 2007. p. 289–306.",
            ref_9: "<br>- " + "TENZER, R. et al. A digital rock density map of New Zealand. Computers & Geosciences, [s. l.], v. 37, n. 8, p. 1181–1191, 2011. ",
            ref_10: "<br>- " + "T.L. MILLER; R. PAKALNIS; R. POULIN. UBC Mining Method Selection. University of british Columbia, Vancouver, B.C., Canada, [s. l.], 1995 <br/><br/>",
        },
        en: {

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

    Escrever("titulo-creditos", "titulo_creditos")
    Escrever("inspiracao", "inspiracao")
    Escrever("autores", "autores")
    Escrever("orientacao", "orientacao")
    Escrever("universidade", "universidade")
    Escrever("orgao", "orgao")
    Escrever("localizacao", "localizacao")
    Escrever("data-publicacao", "data_publicacao")
    Escrever("desenvolvedor", "desenvolvedor")
    Escrever("versao", "versao")

    Escrever("titulo-referencias", "titulo_referencias")
    // REFERENCIAS
    for (i = 1; i <= 10; i++) {
        Escrever(`ref-${i}`, `ref_${i}`)
    }

}