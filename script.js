// AULA OBJETOS

//crienado um objeto
const estudante={
    nome:"Edson",
    sobrenome:"Carneiro",
    numeroMatricula:123456,
    notasDoSemestre:[8, 5.5, 10]
}

console.log(estudante);
estudante.modulo= "git e terminal"
console.log(estudante);

console.log("NOME", estudante.nome);
console.log("SEGUNDA NOTA", estudante.notasDoSemestre[1]);
console.log("MODULO",estudante["modulo"]);

const novoEstudante={...estudante}
novoEstudante.nome= "Astrodev"
novoEstudante.notasDoSemestre=[...estudante.notasDoSemestre, 9]
novoEstudante["modulo"]= "introduçao a web"

//criando array de objetos

const estudantesLabenu=[]
estudantesLabenu.push(estudante, novoEstudante)


console.log("NOVO ESTUDANTE", novoEstudante);

//EXERCICIO DE FIXAÇÃO

const carrinho = {nome : "Edson",
formaDePagamento: "Credito",
endereço : "rua a"
}

const compras= {produto:"cerveja",
preço :6.00,
quantidade : 1}

carrinho.compras

console.log(carrinho);
