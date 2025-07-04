import prompt from 'prompt-sync';
const input = prompt();

export function chamarInput() {
  let y = input();
  return y;
}

//função que  
export function mostrarMenu1() {
  let menu = fazerEscolha();
  while (true) {
    if (menu == 0) {
      break;
    } else if (menu == 1) {
      registrarVenda();
    } else if (menu == 2) {
      cancelarVenda();
    } else if (menu == 3) {
      listarVendasdia();
    } else if (menu == 4) {
      listarVendasperiodo();
    }
  }
}

//função que introduz o progama pro usuário
export function introduzirPrograma() {
  console.log(
    `\n---------------CONTROLE DE VENDAS DA CONFEITARIA-----------

    Aperte [ENTER] para continuar o programa `
  );
  chamarInput();
}

//array que guarda os pedidos, incialmente vazia
let pedidos = [];

//função em que o usuário faz a escolha
export function fazerEscolha() {
  console.log(`\n
        Quando o menu aparecer, insira o número da opção a ser executada. 
        Pressione [ENTER] `);
  chamarInput();
  console.log(`\n
        1. Registrar venda.
        2. Cancelar venda.
        3. Listar vendas por dia.
        4. Listar vendas por período.
        0. Sair.`);

  let opcao = chamarInput();

  if (opcao == 1) {
    registrarVenda();
  }
}

export function registrarVenda() {
  console.log(`\n
        ----REGISTRAR UMA NOVA VENDA-------
      `);
  console.log(`\n 
        - Siga as instruções para registrar uma venda.
        - Digite 'Cancelar' a qualquer momento para voltar ao menu anterior.
          Pressione [ENTER]`);
  chamarInput();

  while (true) {
    console.log(`Nome do cliente/empresa: `);
    let nomeCliente = chamarInput();
    if (nomeCliente == 'cancelar') {
      console.log(`Retornando ao menu anterior...`);
      return 0;
    }

    console.log(`Data do pedido (formato: dia/mês):  `);
    let data = chamarInput();

    console.log(`Ano em que o pedido foi feito: `);
    let ano = chamarInput();

    if (dia == 'cancelar') {
      console.log(`Retornando ao menu anterior...`);
      return 0;
    }

    console.log(
      `Produto vendido (exemplo: Torta de morango, Bolo, Cookies...)`
    );
    let produto = chamarInput();
    if (produto == 'cancelar') {
      console.log(`Retornando ao menu anterior...`);
      return 0;
    }

    console.log(`Retirar no local? (sim/não): `);
    let entrega = chamarInput();
    if (entrega == 'cancelar') {
      console.log(`Retornando ao menu anterior...`);
      return 0;
    }

    console.log(`Insira o valor total do pedido: `);
    let preco = chamarInput();
    if (preco == 'cancelar') {
      console.log(`Retornando ao menu anterior...`);
      return 0;
    }

    let endereco = '';
    if (entrega == 'nao') {
      process.stdout.write(
        `Insira o endereço em que a entrega deve ser feita: `
      );
      endereco = chamarInput();
    } else if (entrega == 'sim') {
      console.log(`Retirada no local`);
    }

    if (entrega == 'cancelar') {
      console.log(`Retornando ao menu anterior...`);
      return 0;

      console.log(`Cadastrando pedido...`);

      let novoPedido = {
        nome: nomeCliente,
        data: data,
        ano: ano,
        produto: produto,
        entrega: endereco,
        preco: preco,
      };

      pedidos.push(novoPedido);

      console.log(pedidos);
    }
  }
}

export function cancelarPedido() {
  console.log(`\n
    ----CANCELAMENTO DE PEDIDO------
            [ENTER] `);
  chamarInput();

  for (let i = 0; i < pedidos.length; i++) {
    console.log(`${i + 1}. ${pedidos[i]}`);
  }
  process.stdout.write(`Qual pedido deseja cancelar? `);
  let num = chamarInput();

  pedidos.splice(num + 1, 1);
  console.log(`Cancelando pedido ${num}...`);

  for (let i = 0; i < pedidos.length; i++) {
    console.log(`${i + 1}. ${pedidos[i]}`);
  }
}

export function listarVendasdia() {
  console.log(`\n-----LISTAR VENDAS POR DIA---------`)

  process.stdout.write(
    `Insira a data que deseja conferir as vendas (dia/mês): `
  );
  let data = chamarInput();
  for (let x = 0; x < pedidos.length; x++) {
    if (data == pedidos[y].data) {
      console.log(
        `${x + 1}. ${pedidos[x].nome} - ${pedidos[x].data}/${pedidos[x].ano} R$${pedidos[x].preço}`
      );
    }
  }

export function listarVendasperiodo(){
  console.log(`\n-----LISTAR VENDAS POR PERIODO-------`);
  
  process.stdout.write(
    `Insira o período por mês e ano:  `
  );
  process.stdout.write(`Mês: `);
  let mes = chamarInput();
  
}
}
