// ------------------
// CAPÍTULO 1
// ------------------

// Artigo 1 - Definições legais
const artigo1 = [
    // Fáceis
    {
        pergunta: "O que é considerado 'via pública' no Código de Estrada?",
        opcoes: [
            "Via de comunicação terrestre afecta ao trânsito público",
            "Via de comunicação privada",
            "Via de comunicação aérea",
            "Via de comunicação marítima"
        ],
        resposta: "Via de comunicação terrestre afecta ao trânsito público",
        dificuldade: "facil"
    },
    {
        pergunta: "O que é uma 'auto-estrada'?",
        opcoes: [
            "Via pública com cruzamentos de nível",
            "Via pública destinada a trânsito rápido, sem cruzamentos de nível",
            "Via pública exclusiva para peões",
            "Via pública com acesso livre a propriedades marginais"
        ],
        resposta: "Via pública destinada a trânsito rápido, sem cruzamentos de nível",
        dificuldade: "facil"
    },
    {
        pergunta: "O que define um 'caminho'?",
        opcoes: [
            "Via pública destinada a trânsito rápido",
            "Via pública especialmente destinada ao trânsito local em zonas rurais",
            "Via pública com separação física de faixas",
            "Via pública exclusiva para veículos pesados"
        ],
        resposta: "Via pública especialmente destinada ao trânsito local em zonas rurais",
        dificuldade: "facil"
    },
    {
        pergunta: "O que é uma 'faixa de rodagem'?",
        opcoes: [
            "Parte da via destinada a peões",
            "Parte da via especialmente destinada ao trânsito de veículos",
            "Parte da via destinada a estacionamento",
            "Parte da via destinada a obras"
        ],
        resposta: "Parte da via especialmente destinada ao trânsito de veículos",
        dificuldade: "facil"
    },
    {
        pergunta: "O que é um 'passeio'?",
        opcoes: [
            "Superfície da via pública destinada a veículos",
            "Superfície da via pública especialmente destinada ao trânsito de peões",
            "Superfície da via pública destinada a estacionamento",
            "Superfície da via pública destinada a obras"
        ],
        resposta: "Superfície da via pública especialmente destinada ao trânsito de peões",
        dificuldade: "facil"
    },

    // Médias
    {
        pergunta: "O que é uma 'via de sentido reversível'?",
        opcoes: [
            "Via de trânsito afecta alternadamente a um ou outro sentido de trânsito",
            "Via de trânsito exclusiva para veículos pesados",
            "Via de trânsito destinada apenas a peões",
            "Via de trânsito com acesso restrito"
        ],
        resposta: "Via de trânsito afecta alternadamente a um ou outro sentido de trânsito",
        dificuldade: "media"
    },
    {
        pergunta: "O que é um 'corredor de circulação'?",
        opcoes: [
            "Via de trânsito reservada a veículos de certa espécie ou afectos a determinados transportes",
            "Via de trânsito exclusiva para peões",
            "Via de trânsito destinada a estacionamento",
            "Via de trânsito com acesso livre"
        ],
        resposta: "Via de trânsito reservada a veículos de certa espécie ou afectos a determinados transportes",
        dificuldade: "media"
    },
    {
        pergunta: "O que é um 'cruzamento'?",
        opcoes: [
            "Zona de junção ou bifurcação de vias públicas",
            "Zona de intersecção de vias públicas ao mesmo nível",
            "Zona de estacionamento de veículos",
            "Zona de trânsito rápido"
        ],
        resposta: "Zona de intersecção de vias públicas ao mesmo nível",
        dificuldade: "media"
    },
    {
        pergunta: "O que é uma 'rotunda'?",
        opcoes: [
            "Praça formada por cruzamento ou entroncamento, onde o trânsito se processa em sentido giratório",
            "Via pública com acesso restrito",
            "Via pública exclusiva para peões",
            "Via pública destinada a trânsito rápido"
        ],
        resposta: "Praça formada por cruzamento ou entroncamento, onde o trânsito se processa em sentido giratório",
        dificuldade: "media"
    },
    {
        pergunta: "O que é um 'parque de estacionamento'?",
        opcoes: [
            "Local exclusivamente destinado ao estacionamento de veículos",
            "Local destinado ao trânsito de peões",
            "Local destinado a obras",
            "Local destinado a trânsito rápido"
        ],
        resposta: "Local exclusivamente destinado ao estacionamento de veículos",
        dificuldade: "media"
    },

    // Difíceis
    {
        pergunta: "O que é um 'ilhéu direccional'?",
        opcoes: [
            "Zona restrita da via pública, interdita à circulação de veículos, destinada a orientar o trânsito",
            "Zona de estacionamento de veículos",
            "Zona de trânsito rápido",
            "Zona de acesso a propriedades"
        ],
        resposta: "Zona restrita da via pública, interdita à circulação de veículos, destinada a orientar o trânsito",
        dificuldade: "dificil"
    },
    {
        pergunta: "O que são 'veículos afectos à prestação de serviço urgente'?",
        opcoes: [
            "Veículos de transporte colectivo",
            "Veículos particulares",
            "Ambulâncias e veículos de bombeiros",
            "Veículos agrícolas"
        ],
        resposta: "Ambulâncias e veículos de bombeiros",
        dificuldade: "dificil"
    },
    {
        pergunta: "O que é uma 'via equiparada a via pública'?",
        opcoes: [
            "Via de comunicação terrestre do domínio privado aberta ao trânsito público",
            "Via de comunicação terrestre do domínio público",
            "Via de comunicação aérea",
            "Via de comunicação marítima"
        ],
        resposta: "Via de comunicação terrestre do domínio privado aberta ao trânsito público",
        dificuldade: "dificil"
    },
    {
        pergunta: "O que é uma 'via reservada a automóveis e motociclos'?",
        opcoes: [
            "Via pública onde vigoram as normas que disciplinam o trânsito em auto-estrada",
            "Via pública exclusiva para peões",
            "Via pública com acesso livre a propriedades marginais",
            "Via pública destinada a trânsito lento"
        ],
        resposta: "Via pública onde vigoram as normas que disciplinam o trânsito em auto-estrada",
        dificuldade: "dificil"
    },
    {
        pergunta: "O que é uma 'pista especial'?",
        opcoes: [
            "Via pública ou via de trânsito especialmente destinada ao trânsito de peões, animais ou certa espécie de veículos",
            "Via pública destinada a trânsito rápido",
            "Via pública com acesso restrito",
            "Via pública exclusiva para veículos pesados"
        ],
        resposta: "Via pública ou via de trânsito especialmente destinada ao trânsito de peões, animais ou certa espécie de veículos",
        dificuldade: "dificil"
    }
];

// Os outros artigos do capítulo 1 ficam aqui:
const artigo2 = [];
const artigo3 = [];
const artigo4 = [];
const artigo5 = [];
const artigo6 = [];
const artigo7 = [];
