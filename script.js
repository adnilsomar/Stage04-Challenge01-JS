const students= [
{
  name: "João",
  nota1: 7,
  nota2: 8,
},
{
  name: "Letícia",
  nota1: 7,
  nota2: 5,
},
{
  name: "Diego",
  nota1: 8,
  nota2: 7,
},
{
  name: "Julia",
  nota1: 8,
  nota2: 3,
}
]

function average(nota1,nota2) {
  return((nota1+nota2)/2) 
}

function media(student){
return average(student.nota1,student.nota2)
}

for(student of students){
  let studentAverage = media(student)

  if (studentAverage>=7){
    alert(`A media do(a) aluno(a) ${student.name} é: ${studentAverage}. 
    Parabens, ${student.name}! você foi aprovado(a) no curso.`
    )

  } else{

    alert(`A media do(a) aluno(a) ${student.name} é: ${studentAverage}. 
    Não foi dessa vez, ${student.name}! tente novamente.`)
  }
}
