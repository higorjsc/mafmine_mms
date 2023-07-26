window.addEventListener("message", function (event) {
    if (event.data === "CallLanguage") {
        Language_page() // Chame a função do módulo do iframe
    }
})

// FUNÇÃO CHAMADA A CADA TROCA DE IDIOMA E A CADA LOAD DE PÁGINA OU POP UP
// GERENCIA OS TEXTOS QUE ESTARÃO PRESENTES EM TODAS AS PÁGINAS (NÃO APENAS UM MÉTODO ESPECÍFICO)
function Language_page(idioma_child = "none") {

    let idioma_parent = parent.document.getElementById("titulo-pagina").innerText
    idioma_parent = idioma_parent.includes("SELEÇÃO") ? "pt" : "en"

    const idiomas = {
        pt: {
            // CREDITOS
            universidade: "UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL<br>",
            laboratorio: "LABORATÓRIO DE PROCESSAMENTO MINERAL<br><br><br>",
            versao: "VERSÃO 1.0.0, dd/mm/2023",
            titulo_ferramenta: "SELEÇÃO DE MÉTODOS DE LAVRA<br>",
            inspiracao: "(INSIPIRADO NA FERRAMENTA 'MINING METHOD SELECTION' DA <a href='https://www.edumine.com/' target='_blank'>EDUMINE)</a><br><br>",
            titulo_autores: "<br>AUTORES<br>",
            autores: "SOBRENOME, N.&ensp;&ensp;&ensp;SOBRENOME, N.&ensp;&ensp;&ensp;SOBRENOME, N.<br>",
            autores_2: "SOBRENOME, N.&ensp;&ensp;&ensp;SOBRENOME, N.&ensp;&ensp;&ensp;SOBRENOME, N.<br><br>",
            titulo_apoio: "APOIO<br>",
            apoio_1: "apoio-1<br>",
            apoio_2: "apoio-2<br><br><br>",
            localizacao: "Porto Alegre, Rio Grande do Sul, Brasil,<br>",
            data: "2023.<br>",

            // REFERENCIAS
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

            // REPORTAR BUG
            span_name: "Seu nome: ",
            span_email: "Seu e-mail: ",
            span_message: "<br><br>Sua mensagem:<br>",
            botao_enviar: "ENVIAR ",

            // TITULO POP UPS
            titulo_pop_up_gsi_ob: "GSI: Corpo de minério",
            titulo_pop_up_gsi_hw: "GSI: Hanging wall",
            titulo_pop_up_gsi_fw: "GSI: Footwall",
            titulo_pop_up_rmr_ob: "RMR: Corpo de minério",
            titulo_pop_up_rmr_hw: "RMR: Hanging wall",
            titulo_pop_up_rmr_fw: "RMR: Footwall",
            titulo_pop_up_densidade_ob: "DENSIDADE: Corpo de minério",
            titulo_pop_up_densidade_hw: "DENSIDADE: Hanging wall",
            titulo_pop_up_densidade_fw: "DENSIDADE: Footwall",
            titulo_pop_up_ucs_ob: "UCS: Corpo de minério",
            titulo_pop_up_ucs_hw: "UCS: Hanging wall",
            titulo_pop_up_ucs_fw: "UCS: Footwall",
            titulo_pop_up_ahp: "AHP",
            titulo_pop_up_creditos: "CRÉDITOS",
            titulo_pop_up_referencias: "REFERENCIAS",
            titulo_pop_up_report_bug: "REPORTAR ERRO",

            // FOOTER DAS PÁGINAS PRINCIPAIS
            footer_universidade: "Universidade Federal do Rio Grande do Sul",
            footer_laboratorio: "Laboratório de Processamento Mineral",
            footer_localizacao: "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970",
            footer_contato: "Contato: email@ufrgs.com",
            creditos: "Creditos",
            referencias: "Referencias",
            bug_report: "Reportar erro"
        },
        en: {
            // CREDITOS
            universidade: "UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL<br>",
            laboratorio: "LABORATÓRIO DE PROCESSAMENTO MINERAL<br><br><br>",
            versao: "VERSÃO 1.0.0, dd/mm/2023",
            titulo_ferramenta: "SELEÇÃO DE MÉTODOS DE LAVRA<br>",
            inspiracao: "(INSIPIRADO NA FERRAMENTA 'MINING METHOD SELECTION' DA <a href='https://www.edumine.com/' target='_blank'>EDUMINE)</a><br><br>",
            titulo_autores: "<br>AUTHORS<br>",
            autores: "SOBRENOME, N.&ensp;&ensp;&ensp;SOBRENOME, N.&ensp;&ensp;&ensp;SOBRENOME, N.<br>",
            autores_2: "SOBRENOME, N.&ensp;&ensp;&ensp;SOBRENOME, N.&ensp;&ensp;&ensp;SOBRENOME, N.<br><br>",
            titulo_apoio: "APOIO<br>",
            apoio_1: "apoio-1<br>",
            apoio_2: "apoio-2<br><br><br>",
            localizacao: "Porto Alegre, Rio Grande do Sul, Brasil,<br>",
            data: "2023.<br>",

            // REFERENCIAS
            titulo_referencias: "<br>REFERENCES",
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

            // REPORTAR BUG
            span_name: "Your name: ",
            span_email: "Your e-mail: ",
            span_message: "<br><br>Your message:<br>",
            botao_enviar: "SEND ",

            // TITULOS DOS POP UPS
            titulo_pop_up_gsi_ob: "GSI: Orebody",
            titulo_pop_up_gsi_hw: "GSI: Hanging wall",
            titulo_pop_up_gsi_fw: "GSI: Footwall",
            titulo_pop_up_rmr_ob: "RMR: Orebody",
            titulo_pop_up_rmr_hw: "RMR: Hanging wall",
            titulo_pop_up_rmr_fw: "RMR: Footwall",
            titulo_pop_up_densidade_ob: "DENSIDADE: Orebody",
            titulo_pop_up_densidade_hw: "DENSIDADE: Hanging wall",
            titulo_pop_up_densidade_fw: "DENSIDADE: Footwall",
            titulo_pop_up_ucs_ob: "UCS: Orebody",
            titulo_pop_up_ucs_hw: "UCS: Hanging wall",
            titulo_pop_up_ucs_fw: "UCS: Footwall",
            titulo_pop_up_ahp: "AHP",
            titulo_pop_up_creditos: "CREDITS",
            titulo_pop_up_referencias: "REFERENCES",
            titulo_pop_up_report_bug: "REPORT ISSUE",

            // FOOTER DAS PÁGINAS PRINCIPAIS
            footer_universidade: "Universidade Federal do Rio Grande do Sul",
            footer_laboratorio: "Laboratório de Processamento Mineral",
            footer_localizacao: "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970",
            footer_contato: "Contato: email@ufrgs.com",
            creditos: "Credits",
            referencias: "References",
            bug_report: "Report issue"

        }
    }

    idioma_selecionado = idiomas[idioma_parent]
    let Escrever = (id, texto, op) => {
        const elemento = document.getElementById(id)
        if (elemento) {
            if (op === undefined) {
                elemento.innerHTML = idioma_selecionado[texto]
            } else {
                elemento.options[op].text = idioma_selecionado[texto]
            }
        }
    }
    let Escrever_parent = (id, texto, op) => {
        const elemento = parent.document.getElementById(id)
        if (elemento) {
            if (op === undefined) {
                elemento.innerHTML = idioma_selecionado[texto]
            } else {
                elemento.options[op].text = idioma_selecionado[texto]
            }
        }
    }

    // OBJETOS DO POP UP "CREDITOS"
    Escrever("universidade", "universidade")
    Escrever("laboratorio", "laboratorio")
    Escrever("titulo_ferramenta", "titulo_ferramenta")
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

    // OBJETOS DO POP UP "REFERENCIAS"
    Escrever("titulo-referencias", "titulo_referencias")
    for (i = 1; i <= 10; i++) {
        Escrever(`ref-${i}`, `ref_${i}`)
    }

    // OBJETOS DO POP UP "REPORT BUG"
    Escrever("span-name", "span_name")
    Escrever("span-email", "span_email")
    Escrever("span-message", "span_message")
    Escrever("botao-enviar", "botao_enviar")

    // TITULOS DOS POP UPS
    Escrever_parent("titulo-pop-up-gsi-ob", "titulo_pop_up_gsi_ob")
    Escrever_parent("titulo-pop-up-gsi-hw", "titulo_pop_up_gsi_hw")
    Escrever_parent("titulo-pop-up-gsi-fw", "titulo_pop_up_gsi_fw")
    Escrever_parent("titulo-pop-up-rmr-ob", "titulo_pop_up_rmr_ob")
    Escrever_parent("titulo-pop-up-rmr-hw", "titulo_pop_up_rmr_hw")
    Escrever_parent("titulo-pop-up-rmr-fw", "titulo_pop_up_rmr_fw")
    Escrever_parent("titulo-pop-up-densidade-ob", "titulo_pop_up_densidade_ob")
    Escrever_parent("titulo-pop-up-densidade-hw", "titulo_pop_up_densidade_hw")
    Escrever_parent("titulo-pop-up-densidade-fw", "titulo_pop_up_densidade_fw")
    Escrever_parent("titulo-pop-up-ucs-ob", "titulo_pop_up_ucs_ob")
    Escrever_parent("titulo-pop-up-ucs-hw", "titulo_pop_up_ucs_hw")
    Escrever_parent("titulo-pop-up-ucs-fw", "titulo_pop_up_ucs_fw")
    Escrever_parent("titulo-pop-up-ahp", "titulo_pop_up_ahp")
    Escrever_parent("titulo-pop-up-creditos", "titulo_pop_up_creditos")
    Escrever_parent("titulo-pop-up-referencias", "titulo_pop_up_referencias")
    Escrever_parent("titulo-pop-up-report_bug", "titulo_pop_up_report_bug")

    //FOOTER
    Escrever("footer-universidade", "footer_universidade")
    Escrever("footer-laboratorio", "footer_laboratorio")
    Escrever("footer-localizacao", "footer_localizacao")
    Escrever("footer-contato", "footer_contato")
    Escrever("creditos", "creditos")
    Escrever("referencias", "referencias")
    Escrever("bug_report", "bug_report")

}