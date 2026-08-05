// 1. Banco de dados com as 10 receitas do site
const receitasObjeto = {
    "bolo-caneca": {
        titulo: "Bolo de Caneca de Chocolate",
        ingredientes: [
            { base: 1, unidade: "unidade(s)", nome: "ovo" },
            { base: 3, unidade: "colheres de sopa", nome: "açúcar" },
            { base: 4, unidade: "colheres de sopa", nome: "farinha de trigo" },
            { base: 2, unidade: "colheres de sopa", nome: "achocolatado" },
            { base: 2, unidade: "colheres de sopa", nome: "óleo" },
            { base: 4, unidade: "colheres de sopa", nome: "leite" },
            { base: 1, unidade: "pitada", nome: "fermento em pó" }
        ],
        preparo: [
            "Coloque o ovo na caneca e bata bem com um garfo.",
            "Adicione o açúcar, o óleo, o leite e o achocolatado. Mexa bem.",
            "Acrescente a farinha de trigo e o fermento, misturando até ficar homogêneo.",
            "Leve ao micro-ondas por 3 minutos em potência alta."
        ]
    },
    "panqueca": {
        titulo: "Panqueca Americana Fofinha",
        ingredientes: [
            { base: 1, unidade: "xícara", nome: "farinha de trigo" },
            { base: 1, unidade: "colher de sopa", nome: "açúcar" },
            { base: 1, unidade: "colher de sopa", nome: "fermento em pó" },
            { base: 1, unidade: "unidade(s)", nome: "ovo batido" },
            { base: 1, unidade: "xícara", nome: "leite" },
            { base: 2, unidade: "colheres de sopa", nome: "manteiga derretida" }
        ],
        preparo: [
            "Misture a farinha, o açúcar e o fermento em uma tigela.",
            "Em outro recipiente, misture o ovo, o leite e a manteiga derretida.",
            "Junte os líquidos aos secos e mexa apenas até homogeneizar.",
            "Aqueça uma frigideira antiaderente untada e coloque porções da massa.",
            "Vire quando surgirem bolhas na superfície e doure o outro lado."
        ]
    },
    "omelete": {
        titulo: "Omelete Cremoso de Ervas",
        ingredientes: [
            { base: 2, unidade: "unidade(s)", nome: "ovos inteiros" },
            { base: 2, unidade: "colheres de sopa", nome: "leite ou creme de leite" },
            { base: 1, unidade: "colher de sopa", nome: "manteiga" },
            { base: 1, unidade: "pitada", nome: "sal e pimenta-do-reino" },
            { base: 1, unidade: "colher de sopa", nome: "cheiro-verde picado" }
        ],
        preparo: [
            "Bata os ovos vigorosamente com o leite, sal, pimenta e cheiro-verde até espumar.",
            "Derreta a manteiga em uma frigideira em fogo médio.",
            "Despeje os ovos e vá puxando as bordas cozidas para o centro com uma espátula.",
            "Quando o centro estiver úmido mas firme, dobre o omelete ao meio e sirva."
        ]
    },
    "mousse": {
        titulo: "Mousse de Limão Rápido",
        ingredientes: [
            { base: 1, unidade: "lata", nome: "leite condensado" },
            { base: 1, unidade: "caixinha", nome: "creme de leite" },
            { base: 0.5, unidade: "xícara", nome: "suco puro de limão" }
        ],
        preparo: [
            "Coloque o leite condensado e o creme de leite no liquidificador.",
            "Bata por 1 minuto para misturar bem.",
            "Com o liquidificador ligado, adicione o suco de limão aos poucos até engrossar.",
            "Despeje em um refratário e leve à geladeira por pelo menos 2 horas."
        ]
    },
    "macarrao": {
        titulo: "Macarrão Alho e Óleo Clássico",
        ingredientes: [
            { base: 100, unidade: "gramas", nome: "macarrão espaguete" },
            { base: 3, unidade: "dentes", nome: "alho fatiados" },
            { base: 3, unidade: "colheres de sopa", nome: "azeite de oliva" },
            { base: 1, unidade: "pitada", nome: "sal e pimenta calabresa" }
        ],
        preparo: [
            "Cozinhe o macarrão em água fervente com sal até ficar al dente.",
            "Enquanto isso, doure o alho fatiado no azeite em fogo baixo.",
            "Escorra o macarrão e jogue-o direto na frigideira com o azeite de alho.",
            "Adicione a pimenta calabresa, misture tudo por 1 minuto e sirva."
        ]
    },
    "torrada-abacate": {
        titulo: "Torrada com Abacate (Avocado Toast)",
        ingredientes: [
            { base: 1, unidade: "fatia", nome: "pão de forma integral ou artesanal" },
            { base: 0.25, unidade: "unidade", nome: "abacate ou avocado maduro" },
            { base: 0.5, unidade: "colher de chá", nome: "suco de limão" },
            { base: 1, unidade: "fio", nome: "azeite de oliva" },
            { base: 1, unidade: "pitada", nome: "sal e pimenta-do-reino" }
        ],
        preparo: [
            "Toste a fatia de pão em uma frigideira ou torradeira até ficar crocante.",
            "Em um prato, amasse o abacate com o suco de limão, sal e pimenta.",
            "Espalhe o abacate amassado sobre a torrada quente.",
            "Finalize com um fio de azeite por cima e sirva imediatamente."
        ]
    },
    "brigadeiro": {
        titulo: "Brigadeiro de Panela Tradicional",
        ingredientes: [
            { base: 1, unidade: "lata", nome: "leite condensado" },
            { base: 1, unidade: "colher de sopa", nome: "manteiga sem sal" },
            { base: 3, unidade: "colheres de sopa", nome: "chocolate em pó (ou cacau)" }
        ],
        preparo: [
            "Em uma panela, junte o leite condensado, a manteiga e o chocolate em pó.",
            "Leve ao fogo baixo, mexendo sempre com uma espátula para não grudar.",
            "Cozinhe até a mistura engrossar e desgrudar totalmente do fundo da panela.",
            "Despeje em um prato untado com manteiga e espere esfriar antes de comer."
        ]
    },
    "crepioca": {
        titulo: "Crepioca de Frango com Queijo",
        ingredientes: [
            { base: 1, unidade: "unidade", nome: "ovo inteiro" },
            { base: 2, unidade: "colheres de sopa", nome: "goma de tapioca pronta" },
            { base: 1, unidade: "colher de sopa", nome: "requeijão cremoso" },
            { base: 2, unidade: "colheres de sopa", nome: "frango desfiado cozido" },
            { base: 1, unidade: "fatia", nome: "queijo muçarela picado" }
        ],
        preparo: [
            "Em uma caneca ou tigela, bata bem o ovo com a goma de tapioca e o requeijão.",
            "Aqueça uma frigideira antiaderente (não precisa untar) em fogo baixo.",
            "Despeje a massa e mude a frigideira de lado para espalhar bem.",
            "Quando a parte de baixo dourar, vire a massa, coloque o frango e o queijo, feche ao meio e espere o queijo derreter."
        ]
    },
    "batata-rustica": {
        titulo: "Batata Rústica no Forno",
        ingredientes: [
            { base: 2, unidade: "unidade(s)", nome: "batatas grandes higienizadas" },
            { base: 2, unidade: "colheres de sopa", nome: "azeite de oliva" },
            { base: 1, unidade: "colher de chá", nome: "páprica doce ou defumada" },
            { base: 1, unidade: "ramo", nome: "alecrim fresco" },
            { base: 1, unidade: "pitada", nome: "sal grosso ou refinado" }
        ],
        preparo: [
            "Corte as batatas em formato de gomos (estilo canoa) mantendo a casca.",
            "Coloque os gomos em uma assadeira e seque-os bem com papel toalha.",
            "Regue com o azeite e adicione a páprica, o alecrim e o sal, misturando bem com as mãos.",
            "Asse em forno preaquecido a 200°C por cerca de 35 a 40 minutos até ficarem douradas e crocantes."
        ]
    },
    "strogonoff": {
        titulo: "Strogonoff de Frango Delicioso",
        ingredientes: [
            { base: 200, unidade: "gramas", nome: "peito de frango em cubos" },
            { base: 0.5, unidade: "unidade", nome: "cebola picada" },
            { base: 1, unidade: "colher de sopa", nome: "manteiga" },
            { base: 2, unidade: "colheres de sopa", nome: "ketchup" },
            { base: 1, unidade: "colher de sopa", nome: "mostarda" },
            { base: 0.5, unidade: "caixinha", nome: "creme de leite" }
        ],
        preparo: [
            "Em uma panela, derreta a manteiga e refogue a cebola até ficar transparente.",
            "Adicione o frango em cubos e doure bem todos os lados.",
            "Acrescente o ketchup e a mostarda, misturando por 2 minutos.",
            "Desligue o fogo, misture o creme de leite delicadamente e sirva com arroz e batata palha."
        ]
    }
};

// 2. Detectar qual receita carregar com base na URL (?id=...)
const parametros = new URLSearchParams(window.location.search);
const receitaId = parametros.get('id');

// Se estivermos na página receita.html, renderiza as informações
if (document.getElementById('titulo-receita')) {
    const receitaAtual = receitasObjeto[receitaId] || receitasObjeto["bolo-caneca"];

    // Atualiza o título na aba e na página
    document.title = `${receitaAtual.titulo} - Chef Digital`;
    document.getElementById('titulo-receita').textContent = receitaAtual.titulo;

    // Injeta a lista de ingredientes estruturada para o cálculo
    const listaIngredientes = document.getElementById('lista-ingredientes');
    receitaAtual.ingredientes.forEach(ing => {
        const itemLi = document.createElement('li');
        itemLi.innerHTML = `<span class="qtd" data-base="${ing.base}">${ing.base}</span> <span class="unidade">${ing.unidade}</span> de ${ing.nome}`;
        listaIngredientes.appendChild(itemLi);
    });

    // Injeta os passos do modo de preparo
    const listaPreparo = document.getElementById('lista-preparo');
    receitaAtual.preparo.forEach(passo => {
        const itemLi = document.createElement('li');
        itemLi.textContent = passo;
        listaPreparo.appendChild(itemLi);
    });
}

// 3. Sistema dinâmico de porções (Multiplicador)
const inputPorcoes = document.getElementById('porcoes');
if (inputPorcoes) {inputPorcoes.addEventListener('input', function() {
    const fator = parseInt(this.value) || 1;
    const listaQuantidades = document.querySelectorAll('.qtd');

    listaQuantidades.forEach(item => {
        const valorBase = parseFloat(item.getAttribute('data-base'));
        item.textContent = valorBase * factor;
    });
});
}