let indicePergunta = 0;
let pontuacao = 0;
let questoes = [];

// Embaralhar array
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Iniciar quiz
function iniciarQuiz(listaQuestoes, callbackFinal) {
  questoes = listaQuestoes;
  indicePergunta = 0;
  pontuacao = 0;
  mostrarPergunta(callbackFinal);
}

// Mostrar pergunta
function mostrarPergunta(callbackFinal) {
  const perguntaElemento = document.getElementById("pergunta");
  const opcoesElemento = document.getElementById("opcoes");
  const botaoProxima = document.getElementById("proxima");

  botaoProxima.disabled = true;
  opcoesElemento.innerHTML = "";

  if (indicePergunta < questoes.length) {
    let perguntaAtual = questoes[indicePergunta];
    perguntaElemento.textContent = perguntaAtual.pergunta;

    perguntaAtual.opcoes.forEach((opcao, index) => {
      const botao = document.createElement("button");
      botao.textContent = opcao;
      botao.classList.add("opcao");
      botao.onclick = () => selecionarOpcao(index, perguntaAtual.correta, perguntaAtual.opcoes, botaoProxima);
      opcoesElemento.appendChild(botao);
    });

    botaoProxima.onclick = () => {
      indicePergunta++;
      mostrarPergunta(callbackFinal);
    };
  } else {
    callbackFinal(pontuacao, questoes.length);
  }
}

// Selecionar opção (aceita índice ou texto como correta)
function selecionarOpcao(indiceSelecionado, correta, listaOpcoes, botaoProxima) {
  const botoes = document.querySelectorAll(".opcao");

  // Determinar índice correto
  let indiceCorreto;
  if (typeof correta === "number") {
    indiceCorreto = correta;
  } else {
    indiceCorreto = listaOpcoes.findIndex(opcao => opcao.toLowerCase() === correta.toLowerCase());
  }

  botoes.forEach((botao, index) => {
    botao.disabled = true;
    if (index === indiceCorreto) {
      botao.classList.add("correta");
    } else if (index === indiceSelecionado) {
      botao.classList.add("errada");
    }
  });

  if (indiceSelecionado === indiceCorreto) {
    pontuacao++;
  }

  botaoProxima.disabled = false;
}

// Função para mostrar o resultado no container estilizado
function mostrarResultado(pontos, total) {
  document.getElementById("quiz").style.display = "none";
  const resultadoContainer = document.getElementById("resultado-container");
  resultadoContainer.style.display = "block";

  document.getElementById("resultado").textContent =
    `Você acertou ${pontos} de ${total} questões.`;
}
