function Checkbox(x)
{
    const checkbox_x = document.getElementById(x)
    const checkboxes = document.querySelectorAll('.checkbox_rmr_q_gsi')

    if(checkbox_x.checked) //desmarca 2 checkbox quando uma é marcada
    {
      checkboxes.forEach(element=> {
          if(element != checkbox_x){
            element.checked = false
          }
      });
    }else //garante que pelo menos uma checkbox esteja sempre marcada
    {
      checkboxes.forEach(element => {
          element.checked = false
      });
      checkbox_x.checked = true
    }

    function Hide(id) //Esconde as divs Q, RMR e GSI quando desmarcadas
    {
       const elementos = document.querySelectorAll(`.${id}`)
        elementos.forEach(element => {
          element.style.display = 'none'
        });
    }

    function Show(id) //Mostra as divs Q, RMR e GSI quando marcadas
    {
      const elementos = document.querySelectorAll(`.${id}`)
      elementos.forEach(element => {
        element.style.display = 'block'
      });
    }

    if(checkboxes[0].checked) //Verifica qual parâmetro (Q, RMR ou GSI) deve ser exibido e esconde os demais
    {
      Show('rmr'); 
      Hide('gsi');
      Hide('q')
    }else if(checkboxes[1].checked){
      Show('gsi')
      Hide('rmr')
      Hide('q')
    }else if(checkboxes[2].checked){
      Show('q')
      Hide('rmr')
      Hide('gsi')
    }else{
      Show('rmr')
      Hide('gsi')
      Hide('q')
    }

  Calculo() //A função calculo é chamada porque os valores não são vinculados uns aos outros
}

function Mudar_imagem()
{
  const forma_geral = document.getElementById('forma_geral').value
  const mergulho = document.getElementById('mergulho').value
  const espessura = document.getElementById('espessura').value
  const distribuicao = document.getElementById('distribuicao').value
  const profundidade = document.getElementById('profundidade').value

  const ilustracao = document.getElementById('ilustracao') //Obtém o elemento <img> da seção 2
  const nome_imagem = forma_geral + '_' + distribuicao + '.png' //Monta a string com o nome da imagem a ser exibida
  ilustracao.src = "UBC\\Imagens\\" + nome_imagem  //Adiciona o diretório ao elemento <img> da seção 2

  const superficie = document.getElementById('superficie')
  superficie.style.display = 'block'

  let transformacoes = '' //String para evitar que os parâmetros de transform se sobreponham

  if (profundidade == 'intermediaria') { //OBS: respeitar a sequência: 1º translate  2º rotate  3º scale
    transformacoes += 'translate(0px, 45%)'
  } else if (profundidade == 'profunda') {
      transformacoes += 'translate(0px, 45%)'
      superficie.style.display = 'none'
  }

  if (mergulho == 'intermediario') { //OBS: respeitar a sequência: 1º translate  2º rotate  3º scale
    transformacoes += 'rotate(30deg) '
  } else if (mergulho == 'inclinado') {
    transformacoes += 'rotate(60deg) '
  }

  if (espessura == 'muito_estreito') { //OBS: respeitar a sequência: 1º translate  2º rotate  3º scale
    transformacoes += 'scale(0.6) '
  } else if (espessura == 'estreito') {
    transformacoes += 'scale(0.7) '
  } else if (espessura == 'intermediario') {
    transformacoes += 'scale(0.8) '
  } else if (espessura == 'espesso') {
    transformacoes += 'scale(0.9) '
  } else if (espessura == 'muito_espesso') {
    transformacoes += 'scale(1) '
  }
  ilustracao.style.transform = transformacoes   //Aplica a animação criada pelos parâmetros profundidade, mergulho e espessura

}
   
function Formatar_entry(entry) //Recebe um texto específico informando o parâmetro. Não há conflito com idiomas.
{  
    const entry_rss = document.getElementById(entry)
    const entry_rss_valor = entry_rss.value

    if(entry_rss_valor!= 0) //Verifica se o input está vazio ou nulo
    {
      let numero = parseFloat(entry_rss_valor.match(/\d+(\.\d{0,2})?/)[0]); //Retira do input APENAS um texto númerico com 2 casas decimais

        if(entry.includes('densidade')){    //Se o input for DENSIDADE, 'kg/m³' é adicionado ao texto númerico
            entry_rss.value = numero.toString() + ' kg/m³'
        }else if (entry.includes('profundidade')){
            entry_rss.value = numero.toString() + ' m'  //Se o input for PROFUNDIDADE, 'm' é adicionado ao texto númerico
        }else if (entry.includes('ucs')){
            entry_rss.value = numero.toString() + ' Mpa'  //Se o input for UCS, 'Mpa' é adicionado ao texto númerico
        }else if(entry.includes('gsi') || entry.includes('q')){
            entry_rss.value = numero.toFixed(2).toString()  //Se o input for GSI ou Q, duas casas decimais são adicionados ao texto númerico
        }
    }
}


function Balao_entra(entry)
{
  let titulo = document.getElementById('titulo_section_1').innerText
  let messages = {}
  if(titulo.includes('CHARACTERISTICS')) //Verifica se o titulo da seção 1 está em ingles
  {
    messages = {
      'forma_geral': '\n- Equi-dimensional: all dimensions are onthe same\n order of magnitude\n\n- Platy-tabular: two dimensions are many times the\nthickness, which does not usually exceed 35m \n\n- Irregular: dimensions vary over short distances\n\n',
      'mergulho': '\n- Flat: inclination bellow 20º\n\n- Intermediate: inclination between 20º-50º\n\n- Steep: more than 55º of inclination\n\n',
      'espessura': '\n-Very narrow: bellow 3m thick\n\n-Narrow: between 3m and 10m thick\n\n- Intermediate: between 10m an 30m thick\n\n- Thick: between 30m and 100m thick\n\n- Very Thick: more than 100m thick\n\n',
      'distribuicao': '\n- Uniforme:the grade at any point does not vary\n significantly from the mean grade for that deposit\n\n- Gradational: grade values have zonal characteristics, and\n the grades change gradually from one to another.\n\n- Erratic:  grade values change radically over short distances\n\n',
      'profundidade': '\n- Shallow: between 0 m and 100 m\n\n- Intermediate: between 100 m and 600 m\n\n- Deep: more than 600 m\n\n',
      'rss': '\nUCS (Pa)\n_________________________\n\nDensity(N/m³) x Depth(m)\n\n',
      'rmr': '\nRMR classification by Bieniawski (1989) \n\n',
      'gsi': '\nGSI to RMR conversion\n\nCeballos e Olalla (2014):\nRMR = (GSI - 11,63) / 1,13\n\n',
      'q': '\nQ to RMR conversion\n\nBieniawski (1989):\nRMR = 9 x ln(Q) + 44\n\n',
      'botao_calculadora_rmr': 'Calculate RMR',
      'botao_calculadora_gsi': 'Calculate GSI',
      'botao_pesos': 'Check weights',
      'botao_imprimir': 'Print report',
      'switch_language': 'Change to portuguese'
    };
  }else //caso o titulo da seção 1 esteja em português
  {
    messages = {
      'forma_geral': '\n- Massivo: todas as dimensões são da\n mesma ordem de magnitude\n\n- Tabular: duas das dimensões são muito\n maiores que a espessur\n\n- Irregular: dimensões variam\n a pequenas distâncias\n\n',
      'mergulho': '\n- Plano: <20º de inclinação \n\n- Intermediário: 20º-50º de inclinação\n\n- Inclinado: > 55º de inclinação\n\n',
      'espessura': '\n- Muito Estreito: inferior a 3m\n\n-Estreito: entre 3m e 10m\n\n- Intermediário: entre 10m e 30m\n\n- Espesso: entre 30m e 100m\n\n- Muito espesso: superior a 100m\n\n',
      'distribuicao': '\n- Uniforme: o teor em qualquer ponto não\n varia muito da média global\n\n- Gradacional: os teores mudam gradualmente\nde uma "zona" do depósito para outra\n\n- Errático: teores variam radicalmente \nem curtas distâncias\n\n',
      'profundidade': '\n- Rasa: entre 0 m e 100 m\n\n- Intermediária: entre 100 m e 600 m\n\n- Profunda: superior a 600 m\n\n',
      'rss': '\nUCS (Pa)\n_________________________\n\nDensidade(N/m³) x Profundidade(m)\n\n',
      'rmr': '\n Classificação RMR de Bieniawski (1989) \n\n',
      'gsi': '\nConversão GSI→RMR \n\nCeballos e Olalla (2014):\nRMR = (GSI - 11,63) / 1,13\n\n',
      'q': '\nConversão Q→RMR \n\nBieniawski (1989):\nRMR = 9 x ln(Q) + 44\n\n',
      'botao_calculadora_rmr': 'Calcular RMR',
      'botao_calculadora_gsi': 'Calcular GSI',
      'botao_pesos': 'Verificar Pesos',
      'botao_imprimir': 'Imprimir relatório',
      'switch_language': 'Mudar para inglês'
    };
  }

  const positions = {
    'botao': { x: -110, y: -100 },
    'botao_pesos': { x: 50, y: -20 },
    'botao_imprimir': { x: 50, y: -50 },
    'switch_language': { x: 30, y: -40 }

  };

  balao.innerText = messages[entry];
  balao.style.display = 'block';

  if (positions[entry]) {
    const { x, y } = positions[entry];
    balao.style.transform = `translate(${x}px, ${y}px)`;
  } else {
    balao.style.transform = 'translate(100px,-100px)';
  }
}

function Balao_sai()
{
    const balao = document.getElementById('balao')
    balao.style.display = 'none'
}



