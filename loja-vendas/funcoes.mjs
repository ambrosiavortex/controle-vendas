import prompt from "prompt-sync";
const input = prompt();

export function chamarInput() {
  let y = input();
  return y;
}

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

export function introduzirPrograma() {
  console.log(
    `\n---------------CONTROLE DE VENDAS DA CONFEITARIA-----------

    Aperte [ENTER] para continuar o programa `
  );
  chamarInput();
}

let pedidos = [];

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
        - Digite "Cancelar" a qualquer momento para voltar ao menu anterior.
          Pressione [ENTER]`);
  chamarInput();

  while (true) {

  console.log(`Nome do cliente/empresa: `);
  let nomeCliente = chamarInput();
  if (nomeCliente == "cancelar") {
    console.log(`Retornando ao menu anterior...`);
    return 0;
  }

  console.log(`Data do pedido (formato: dia/mês/ano):  `);
  console.log(`Dia: `);
  let dia = Number(chamarInput());
  console.log(`Mês: `);
  let mes = Number(chamarInput());
  console.log(`Ano: `)
  let ano = Number(chamarInput());

  if (dia == "cancelar") {
    console.log(`Retornando ao menu anterior...`);
    return 0;
  }

  console.log(`Produto vendido (exemplo: Torta de morango, Bolo, Cookies...)`);
  let produto = chamarInput();
  if (produto == "cancelar") {
    console.log(`Retornando ao menu anterior...`);
    return 0;
  }

  console.log(`Retirar no local? (sim/não) `);
  let entrega = chamarInput();
  if (entrega == "cancelar") {
    console.log(`Retornando ao menu anterior...`);
    return 0;
  }

  let endereco = "";
  if (entrega == "nao") {
    console.log(`Insira o endereço em que a entrega deve ser feita: `);
    endereco = chamarInput();
  }else if(entrega == "sim"){
    console.log(`Retirada no local`);
  }

  console.log(`Cadastrando pedido...`);

  let novoPedido = {
    nome: nomeCliente,
    data: [dia, mes, ano],
    produto: produto,
    entrega: endereco,
  };

  pedidos.push(novoPedido);

  console.log(pedidos);

  }
}

export function cancelarPedido(){
  console.log(`\n
    ----CANCELAMENTO DE PEDIDO------
            [ENTER] `);
  chamarInput();

  for(let i = 0; i < pedidos.length; i++){
    console.log(`${i+1}. ${pedidos[i]}`);
  }
  console.log(`Qual pedido deseja cancelar? `);
  let num = chamarInput();

  pedidos.splice(num+1, 1);
  console.log(`Cancelando pedido ${num}...`);

  for(let i = 0; i < pedidos.length; i++){
    console.log(`${i+1}. ${pedidos[i]}`);
  }

}