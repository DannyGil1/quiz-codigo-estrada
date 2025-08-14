// ------------------
// CAPÍTULO 1
// ------------------

// Artigo 1 - Definições legais
var artigo1 = [
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

// Os outros artigos do capítulo 1 ficam aqui

var artigo2 = [
    // Questões fáceis
    {
        pergunta: "Onde são aplicáveis as normas do Código de Estrada?",
        opcoes: [
            "Apenas em vias privadas.",
            "Em todo o território nacional, nas vias de domínio público do Estado e poder local.",
            "Apenas em auto-estradas.",
            "Apenas em zonas rurais."
        ],
        resposta: 1
    },
    {
        pergunta: "As normas do Código de Estrada aplicam-se a vias privadas?",
        opcoes: [
            "Não, nunca.",
            "Sim, apenas se estiverem fechadas ao trânsito público.",
            "Sim, quando abertas ao trânsito público, salvo regulamento próprio.",
            "Apenas em casos de emergência."
        ],
        resposta: 2
    },
    {
        pergunta: "Quem pode regular o trânsito em vias privadas abertas ao público?",
        opcoes: [
            "Apenas o governo central.",
            "Os proprietários, através de acordos específicos.",
            "Apenas os peões.",
            "Nenhuma das anteriores."
        ],
        resposta: 1
    },
    {
        pergunta: "O Código de Estrada prevê exceções para vias privadas?",
        opcoes: [
            "Não, aplica-se sempre integralmente.",
            "Sim, se houver acordo com os proprietários.",
            "Apenas para veículos oficiais.",
            "Apenas em zonas urbanas."
        ],
        resposta: 1
    },
    {
        pergunta: "As normas do Código de Estrada são válidas em:",
        opcoes: [
            "Apenas nas capitais provinciais.",
            "Todo o território nacional, incluindo vias públicas estaduais e municipais.",
            "Apenas em estradas nacionais.",
            "Apenas em locais sinalizados."
        ],
        resposta: 1
    },

    // Questões médias
    {
        pergunta: "O que acontece se uma via privada aberta ao trânsito público não tiver regulamento próprio?",
        opcoes: [
            "O Código de Estrada não se aplica.",
            "Aplica-se o Código de Estrada na íntegra.",
            "Apenas as regras de velocidade são aplicadas.",
            "Apenas os agentes de autoridade podem circular."
        ],
        resposta: 1
    },
    {
        pergunta: "Qual é o âmbito territorial do Código de Estrada?",
        opcoes: [
            "Apenas nas áreas urbanas.",
            "Em todo o território nacional, incluindo vias públicas e privadas abertas ao trânsito.",
            "Apenas nas auto-estradas.",
            "Apenas em vias municipais."
        ],
        resposta: 1
    },
    {
        pergunta: "As normas do Código de Estrada podem ser modificadas em vias privadas?",
        opcoes: [
            "Nunca.",
            "Sim, através de acordos com os proprietários.",
            "Apenas para veículos de emergência.",
            "Apenas em casos de obras."
        ],
        resposta: 1
    },
    {
        pergunta: "O Código de Estrada prevê a sua aplicação em vias do domínio privado quando:",
        opcoes: [
            "Estiverem fechadas ao público.",
            "Forem utilizadas apenas por peões.",
            "Estiverem abertas ao trânsito público e não houver regulamento próprio.",
            "Apenas em feriados nacionais."
        ],
        resposta: 2
    },
    {
        pergunta: "Quem tem competência para regular o trânsito em vias públicas municipais?",
        opcoes: [
            "Apenas o governo central.",
            "O poder local, em conformidade com o Código de Estrada.",
            "Apenas os proprietários de veículos.",
            "Apenas os agentes de trânsito."
        ],
        resposta: 1
    },

    // Questões difíceis
    {
        pergunta: "Qual é a hierarquia das normas em vias privadas abertas ao trânsito público?",
        opcoes: [
            "O acordo com o proprietário prevalece sobre o Código de Estrada.",
            "O Código de Estrada prevalece sobre qualquer acordo.",
            "Apenas as regras de estacionamento se aplicam.",
            "Nenhuma norma se aplica."
        ],
        resposta: 0
    },
    {
        pergunta: "O Código de Estrada aplica-se a vias privadas utilizadas para eventos temporários (ex.: feiras)?",
        opcoes: [
            "Não, pois são temporárias.",
            "Sim, se estiverem abertas ao trânsito público e não houver regulamento próprio.",
            "Apenas se houver sinalização específica.",
            "Apenas para veículos autorizados."
        ],
        resposta: 1
    },
    {
        pergunta: "Em caso de conflito entre o Código de Estrada e um acordo em via privada, o que prevalece?",
        opcoes: [
            "Sempre o Código de Estrada.",
            "O acordo, desde que não contrarie normas de segurança do Código.",
            "A decisão do agente de trânsito no local.",
            "Nenhuma das anteriores."
        ],
        resposta: 1
    },
    {
        pergunta: "As vias do domínio privado estão totalmente isentas do Código de Estrada?",
        opcoes: [
            "Sim, sempre.",
            "Não, se estiverem abertas ao trânsito público.",
            "Apenas se forem utilizadas por veículos oficiais.",
            "Apenas em áreas rurais."
        ],
        resposta: 1
    },
    {
        pergunta: "O que acontece se uma via privada tiver regras próprias mas violar princípios básicos do Código de Estrada?",
        opcoes: [
            "As regras próprias são sempre válidas.",
            "O Código de Estrada prevalece nos aspectos de segurança.",
            "A via é imediatamente fechada.",
            "Apenas os peões podem circular."
        ],
        resposta: 1
    }
]

