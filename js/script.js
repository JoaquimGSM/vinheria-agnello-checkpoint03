const vinhos = [
    {
        nome: 'Porto',
        tipo: 'Tinto',
        safra: 2017,
        estoque: 17
    },
    {
        nome: 'Santa Carolina Rosé',
        tipo: 'Rosé',
        safra: 2019,
        estoque: 12
    },
    {
        nome: 'Casillero',
        tipo: 'Tinto',
        safra: 2020,
        estoque: 15
    },
    {
        nome: 'Santa Helena',
        tipo: 'Branco',
        safra: 2021,
        estoque: 20
    }
];

// Adicionando um novo vinho
function adicionarVinho(nome, tipo, safra, estoque) {
    vinhos.push({
        nome: nome,
        tipo: tipo,
        safra: safra,
        estoque: estoque
    });

    console.log("                                ");
    console.log(`Vinho ${nome} adicionado com sucesso!`);
    console.log("                                ");
    console.log("                                ");
}

adicionarVinho("Pérgola", "Tinto", 2022, 3);

// Listando os vinhos
function listarVinhos() {
    console.log('____Lista de Vinhos____');

    vinhos.forEach((vinho) => {
        console.log(`Nome: ${vinho.nome}`);
        console.log(`Tipo: ${vinho.tipo}`);
        console.log(`Safra: ${vinho.safra}`);
        console.log(`Estoque: ${vinho.estoque}`);
        console.log('-----------//------------');
    });
}

listarVinhos();

// Verificando estoque baixo com filter
function verificarEstoqueVinho() {
    const verificarEstoque = vinhos.filter((vinho) => {
        return vinho.estoque < 5;
    });

    console.log("                                ");
    console.log("                                ");
    console.log('____Vinhos com estoque baixo____');

    if (verificarEstoque.length > 0) {
        console.log('Os seguintes vinhos estão com estoque baixo:');

        verificarEstoque.forEach((vinho) => {
            console.log(`Nome: ${vinho.nome}`);
            console.log(`Tipo: ${vinho.tipo}`);
            console.log(`Safra: ${vinho.safra}`);
            console.log(`Estoque: ${vinho.estoque}`);
            console.log("                                ");
        });
    } else {
        console.log("                                ");
        console.log('Nenhum vinho está com estoque baixo no momento');
        console.log("                                ");
    }
}

verificarEstoqueVinho();

// Calculando total de vinhos em estoque com reduce
function totalVinhosEmEstoque() {
    const total = vinhos.reduce((acumulador, vinho) => {
        return acumulador + vinho.estoque;
    }, 0);

    console.log("                                ");
    console.log('_Estoque total da vinícola_');
    console.log(`Total de vinhos em estoque: ${total}`);
    console.log("                                ");
}

totalVinhosEmEstoque();

// Exibindo nomes em caixa alta com map
function exibirNomesCaixaAlta() {
    const nomesCaixaAlta = vinhos.map((vinho) => {
        return vinho.nome.toUpperCase();
    });

    
    console.log("                                ");
    console.log('_NOMES DOS VINHOS EM CAIXA ALTA_');
    console.log("                                ");

    nomesCaixaAlta.forEach((nome) => {
        console.log(nome);
    });
}

exibirNomesCaixaAlta();