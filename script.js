let results = []
let exit = 0

do {
  let student = prompt('Qual o nome do(a) aluno(a)')
  let n1 = prompt('Qual a nota da primeira prova?')
  let n2 = prompt('Qual a nota da segunda prova?')
  let n3 = prompt('Qual a nota da terceira prova?')
  exit = Number(prompt('Para finalizar o cadastro de alunos, digite 1 ou 0 para continuar'))

let average = Number(n1) + Number(n2) + Number(n3) / 3

let result = average > 7

average = average.toFixed(2)

if (result) {
  results.push("A média do(a) aluno(a), " + student + " foi de: " + average + "\nParabéns! " + student + " Você foi aprovado no consurso!")
} else{
  results.push("A média do(a) aluno(a), " + student + " foi de: " + average + "\nNão foi dessa vez! " + student + " tente novamente!")
}
console.log(exit)
} while (exit === 0)

console.log(results)
results.map((x)=> alert(x))

