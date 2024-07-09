alert('Boas vindas ao jogo do número secreto!');
let numMaximo = 5000;
let secretNum = parseint(Math.random() * numMaximo + 1);
console.log(secretNum);
let inputUser;
let count = 1;

while(inputUser != secretNum){
    inputUser = prompt(`Escolha um valor entre 1 a ${numMaximo}:`);
    if(secretNum == inputUser ) {
        break;
    }else {

        if (secretNum > inputUser)
            {
                alert(`O número secreto é maior que ${inputUser}`);
            }else {
                alert(`O número secreto é menor que ${inputUser}`);
            }
            count++;
    }
}

let palavraTentativa = count > 1 ? 'tentativas ' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto ${inputUser} com ${count} ${palavraTentativa}`);
