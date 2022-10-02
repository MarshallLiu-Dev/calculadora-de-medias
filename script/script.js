/*arredondar a nota para cima nesse programa para a proxima aula, 
falar quanto ele precisa para ser aprovado reprovado ou recuperação
*/ 

let nome = prompt("Digite seu nome");
let n1 = prompt("Digite a nota da n1");
let n2 = prompt("Digite a nota da n2");
let media; 

media = (((n1*2) + (n2*3))/5);
 if(media >= 7){
    alert(`Olá, ${nome}  sua média é:  ${media}${Math.round()}  e você foi aprovado`);
 }  else if(media < 7 && media >=5){
    alert(`Olá, ${nome}  sua média é: ${media}${Math.round()} e você via pra aulas de recuperação `)
 }
 else{
    alert(`Olá, ${nome}  sua média é:  ${media}${Math.round()}  e você foi reprovado`)
 }

