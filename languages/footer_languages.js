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
            universidade: "UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL<br>",
            laboratorio: "LABORATÓRIO DE PROCESSAMENTO MINERAL<br><br><br>",
            versao: "VERSÃO 1.0.0, dd/mm/2023",
            titulo_ferramenta: "SELEÇÃO DE MÉTODOS DE LAVRA<br>",
            inspiracao: "(INSIPIRADO NA FERRAMENTA 'MINING METHOD SELECTION' DA <a href='https://www.edumine.com/' target='_blank'>EDUMINE)</a><br>",
            titulo_autores: "<br>AUTORES<br>",
            autores: "SOBRENOME, N.&ensp;&ensp;&ensp;SOBRENOME, N.&ensp;&ensp;&ensp;SOBRENOME, N.<br>",
            autores_2: "SOBRENOME, N.&ensp;&ensp;&ensp;SOBRENOME, N.&ensp;&ensp;&ensp;SOBRENOME, N.<br><br>",
            titulo_apoio: "APOIO<br>",
            apoio_1: "apoio-1<br>",
            apoio_2: "apoio-2<br><br><br>",
            localizacao: "Porto Alegre, Rio Grande do Sul, Brasil,<br>",
            data: "2023.<br>",
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

    Escrever("universidade", "universidade")
    Escrever("laboratorio", "laboratorio")
    Escrever("titulo-ferramenta", "titulo_ferramenta")
    Escrever("inspiracao", "inspiracao")
    Escrever("titulo-autores", "titulo_autores")
    Escrever("autores", "autores")
    Escrever("autores-2", "autores_2")
    Escrever("localizacao", "localizacao")
    Escrever("data", "data")
    Escrever("titulo-apoio", "titulo_apoio")
    Escrever("apoio-1", "apoio_1")
    Escrever("apoio-2", "apoio_2")
    Escrever("versao", "versao")

}

function Language_referencias() {
    let idioma_janela = parent.document.getElementById("titulo-pagina").innerText
    idioma_janela = idioma_janela.includes("SELEÇÃO") ? "pt" : "en"

    const idiomas = {
        pt: {
            titulo_referencias: "<br>REFERENCIAS",
            ref_1: "BIENIAWSKI, Z. T. Engineering Rock Mass Classifications: A Complete Manual for Engineers and Geologists in Mining, Civil, and Petroleum Engineering. [S. l.]: John Wiley & Sons, 1989. ",
            ref_2: "NICHOLAS, D.E. Method Selection - A Numerical Aproach. Em: DESIGN AND OPERATION OF CAVING AND SUBLEVEL STOPING MINE. Stewart, Daniel R.ed. New York: Society of Mining Engineers of the American Institute of Mining, Metallurgical, and Petroleum Engineers, 1981. ",
            ref_3: "NICHOLAS, D.E. Selection Procedure. Em: MINING ENGINEERING HANDBOOK. 2nd. ed. Littleton, Colorado: Society for Mining, Metallurgy, and Exploration, Inc., 1992. v. 2, p. 2090–2106. ",
            ref_4: "HOEK, E.; CARTER, T. G.; DIEDERICHS, M. S. Quantification of the geological strength index chart. Em: 47TH US ROCK MECHANICS / GEOMECHANICS SYMPOSIUM 2013, 2013. US Rock Mech. / Geomech. Symp. [S. l.: s. n.], 2013. p. 1757–1764.",
            ref_5: "PALMSTRÖM, A. Combining the RMR, Q, and RMi classification systems. Tunnelling and Underground Space Technology, [s. l.], v. 24, n. 4, p. 491–492, 2009. ",
            ref_6: "RIBEIRO, M. C. de C. R.; ALVES, A. da S. Aplicação do método Analytic Hierarchy Process (AHP) com a mensuração absoluta num problema de seleção qualitativa. Sistemas & Gestão, [s. l.], v. 11, n. 3, p. 270–281, 2016. ",
            ref_7: "SAATY, T. L. How to make a decision: The Analytic Hierarchy Process. [s. l.], ",
            ref_8: "SHAHRIAR, K. et al. A New Numerical Method And AHP For Mining Method Selection. Em: , 2007. Proc. 4th Int. Symp, on ‘High performance mine production. [S. l.: s. n.], 2007. p. 289–306.",
            ref_9: "TENZER, R. et al. A digital rock density map of New Zealand. Computers & Geosciences, [s. l.], v. 37, n. 8, p. 1181–1191, 2011. ",
            ref_10: "T.L. MILLER; R. PAKALNIS; R. POULIN. UBC Mining Method Selection. University of british Columbia, Vancouver, B.C., Canada, [s. l.], 1995 <br/><br/>",
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

    Escrever("titulo-referencias", "titulo_referencias")
    // REFERENCIAS
    for (i = 1; i <= 10; i++) {
        Escrever(`ref-${i}`, `ref_${i}`)
    }

}

function Bug_languages(idioma_janela) {
    const idiomas = {
        pt: {
            universidade: "UFRGS Universidade Federal do Rio Grande do Sul",
            laboratorio: "LAPROM Laboratório de Processamento Mineral",
            localizacao: "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970",
            contato: "Contato: email@ufrgs.com",
        },
        en: {
            universidade: "UFRGS Universidade Federal do Rio Grande do Sul",
            laboratorio: "LAPROM Laboratório de Processamento Mineral",
            localizacao: "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970",
            contato: "Contato: email@ufrgs.com",

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

    //FOOTER
    Escrever("universidade", "universidade")
    Escrever("laboratorio", "laboratorio")
    Escrever("localizacao", "localizacao")
    Escrever("contato", "contato")

}

function Language_footer(idioma_janela) {
    const idiomas = {
        pt: {
            universidade: "UFRGS Universidade Federal do Rio Grande do Sul",
            laboratorio: "LAPROM Laboratório de Processamento Mineral",
            localizacao: "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970",
            contato: "Contato: email@ufrgs.com",
        },
        en: {
            universidade: "UFRGS Universidade Federal do Rio Grande do Sul",
            laboratorio: "LAPROM Laboratório de Processamento Mineral",
            localizacao: "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970",
            contato: "Contato: email@ufrgs.com",

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

    //FOOTER
    Escrever("universidade", "universidade")
    Escrever("laboratorio", "laboratorio")
    Escrever("localizacao", "localizacao")
    Escrever("contato", "contato")

}