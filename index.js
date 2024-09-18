// 1. Acessando Propriedades de Objetos
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  cor: "preto"
};

console.log("Exercício 1:");
for (let prop in carro) {
  console.log(`${prop}: ${carro[prop]}`);
}

// 2. Verificando Propriedades
let livro = {
  titulo: "Dom Quixote",
  autor: "Miguel de Cervantes",
  anoPublicacao: 1605,
  genero: "Romance"
};

console.log("\nExercício 2:");
let hasEditora = false;
for (let prop in livro) {
  if (prop === 'editora') {
      hasEditora = true;
  }
}
if (!hasEditora) {
  livro.editora = "Desconhecida";
}
console.log(livro);

// 3. Filtrando Propriedades de Objetos
let produto = {
  nome: "Notebook",
  preco: 2500,
  garantia: 12,
  peso: 1.5
};

function filtrarPropriedades(obj, valor) {
  let novoObjeto = {};
  for (let prop in obj) {
      if (obj[prop] > valor) {
          novoObjeto[prop] = obj[prop];
      }
  }
  return novoObjeto;
}

console.log("\nExercício 3:");
console.log(filtrarPropriedades(produto, 1000));

// 4. Iterando Sobre Arrays de Objetos
let pessoas = [
  { nome: "Ana", idade: 25, cidade: "São Paulo" },
  { nome: "Bruno", idade: 30, cidade: "Rio de Janeiro" },
  { nome: "Carlos", idade: 22, cidade: "Belo Horizonte" }
];

console.log("\nExercício 4:");
for (let pessoa of pessoas) {
  console.log(`${pessoa.nome}, ${pessoa.idade} anos, de ${pessoa.cidade}`);
}

// 5. Calculando Valores em Arrays de Objetos
let alunos = [
  { nome: "João", nota1: 7, nota2: 8 },
  { nome: "Maria", nota1: 6, nota2: 9 },
  { nome: "Pedro", nota1: 8, nota2: 7 }
];

console.log("\nExercício 5:");
for (let aluno of alunos) {
  let media = (aluno.nota1 + aluno.nota2) / 2;
  console.log(`${aluno.nome} - Média: ${media}`);
}

// 6. Filtrando Arrays de Objetos
let funcionarios = [
  { nome: "Paulo", cargo: "Gerente", salario: 5000 },
  { nome: "Fernanda", cargo: "Analista", salario: 3000 },
  { nome: "Carlos", cargo: "Assistente", salario: 2000 }
];

console.log("\nExercício 6:");
for (let funcionario of funcionarios) {
  if (funcionario.salario > 2500) {
      console.log(funcionario.nome);
  }
}

// 7. Modificando Objetos em um Array
let produtos = [
  { nome: "TV", preco: 1500, desconto: 0 },
  { nome: "Celular", preco: 1000, desconto: 0 },
  { nome: "Notebook", preco: 2500, desconto: 0 }
];

console.log("\nExercício 7:");
produtos.forEach(produto => {
  produto.preco -= produto.preco * 0.10;
  console.log(`${produto.nome} - Novo Preço: R$${produto.preco}`);
});

// 8. Criando Novos Arrays a Partir de Objetos
let filmes = [
  { titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
  { titulo: "Matrix", diretor: "Wachowskis", anoLancamento: 1999 },
  { titulo: "Interstellar", diretor: "Christopher Nolan", anoLancamento: 2014 }
];

let titulos = [];
filmes.forEach(filme => {
  titulos.push(filme.titulo);
});

console.log("\nExercício 8:");
console.log(titulos);

// 9. Contabilizando Elementos com uma Condição
let clientes = [
  { nome: "Alice", idade: 28, cidade: "Curitiba" },
  { nome: "Miguel", idade: 35, cidade: "Fortaleza" },
  { nome: "Laura", idade: 32, cidade: "Manaus" }
];

let contador = 0;
clientes.forEach(cliente => {
  if (cliente.idade > 30) {
      contador++;
  }
});

console.log("\nExercício 9:");
console.log(`Clientes com mais de 30 anos: ${contador}`);

// 10. Criando Relatórios com Objetos e Arrays
let vendas = [
  { produto: "Notebook", quantidade: 2, valor: 3000 },
  { produto: "Celular", quantidade: 3, valor: 1000 },
  { produto: "TV", quantidade: 1, valor: 2000 }
];

let totalVendas = 0;
vendas.forEach(venda => {
  totalVendas += venda.quantidade * venda.valor;
});

console.log("\nExercício 10:");
console.log(`Valor total de vendas: R$${totalVendas}`);

// 11. Agrupando Elementos com forEach
let pedidos = [
  { cliente: "João", produto: "Notebook", quantidade: 1 },
  { cliente: "Maria", produto: "Celular", quantidade: 2 },
  { cliente: "João", produto: "TV", quantidade: 1 }
];

let totalPorCliente = {};
pedidos.forEach(pedido => {
  if (totalPorCliente[pedido.cliente]) {
      totalPorCliente[pedido.cliente] += pedido.quantidade;
  } else {
      totalPorCliente[pedido.cliente] = pedido.quantidade;
  }
});

console.log("\nExercício 11:");
console.log(totalPorCliente);

// 12. Atualizando um Array de Objetos
let estoque = [
  { produto: "Notebook", quantidade: 5, minimo: 10 },
  { produto: "Celular", quantidade: 3, minimo: 5 },
  { produto: "TV", quantidade: 8, minimo: 7 }
];

estoque.forEach(item => {
  if (item.quantidade < item.minimo) {
      item.quantidade *= 2;
  }
});

console.log("\nExercício 12:");
console.log(estoque);

// 13. Implementando um Carrinho de Compras
let carrinho = {
  itens: [
      { nome: "Notebook", quantidade: 1, precoUnitario: 3000 },
      { nome: "Celular", quantidade: 2, precoUnitario: 1000 }
  ]
};

let totalCarrinho = 0;
carrinho.itens.forEach(item => {
  totalCarrinho += item.quantidade * item.precoUnitario;
});

console.log("\nExercício 13:");
console.log(`Valor total do carrinho: R$${totalCarrinho}`);

// 14. Manipulando Objetos Complexos
let empresa = {
  departamentos: [
      {
          nome: "TI",
          funcionarios: ["João", "Maria"]
      },
      {
          nome: "RH",
          funcionarios: ["Carlos", "Fernanda"]
      }
  ]
};

console.log("\nExercício 14:");
for (let departamento of empresa.departamentos) {
  for (let funcionario of departamento.funcionarios) {
      console.log(`${funcionario} trabalha no departamento de ${departamento.nome}`);
  }
}

// 15. Filtrando e Somando Valores
let transacoes = [
  { tipo: "entrada", valor: 1000 },
  { tipo: "saída", valor: 500 },
  { tipo: "entrada", valor: 200 },
  { tipo: "saída", valor: 100 }
];

let saldoFinal = 0;
transacoes.forEach(transacao => {
  if (transacao.tipo === "entrada") {
      saldoFinal += transacao.valor;
  } else {
      saldoFinal -= transacao.valor;
  }
});

console.log("\nExercício 15:");
console.log(`Saldo final: R$${saldoFinal}`);
 