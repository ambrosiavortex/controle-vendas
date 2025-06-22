import prompt from "prompt-sync";
const input = prompt();

export function chamarInput() {
  let y = input();
  return y;
}

export function mostrarMenu1() {
  let opcao = fazerEscolha();
  while (true) {
    if ((menu = 0)) {
      break;
    } else if ((menu = 1)) {
      registrarVenda();
    } else if ((menu = 2)) {
      cancelarVenda();
    } else if ((menu = 3)) {
      listarVendasdia();
    } else if ((menu = 4)) {
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

  return opcao;
}

export function registrarVenda() {
    console.log(`\n
        -------REGISTRAR UMA NOVA VENDA-------
        Pressione [ENTER]`);
    chamarInput();
    console.log(`\n 
        - Siga as instruções para registrar uma venda.
        - Digite "Cancelar" a qualquer momento para voltar ao menu anterior.
          Pressione [ENTER]`);
    chamarInput();
    
    console.log(`Nome do cliente/empresa: `);
    let nomeCliente = chamarInput();
        if(nomeCliente = 'cancelar'){
            console.log(`Retornando ao menu anterior...`);
            return 0;
        }

    console.log(`Data do pedido (formato: dia/mês/ano):  `);
    let data = chamarInput();
        if(data = 'cancelar'){
            console.log(`Retornando ao menu anterior...`);
            return 0;
        }

    console.log(`Produto vendido (exemplo: Torta de morango, Bolo, Cookies...)`){
    let produto = chamarInput();
        if(produto = 'cancelar'){
            console.log(`Retornando ao menu anterior...`);
            return 0;
        }
    }


}
