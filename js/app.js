let registros = JSON.parse(localStorage.getItem("registros")) || []
let exames = JSON.parse(localStorage.getItem("exames")) || []

function salvarProntuario(){

let prontuario={
nome:document.getElementById("nome").value,
nascimento:document.getElementById("nascimento").value,
condicao:document.getElementById("condicao").value
}

localStorage.setItem("prontuario",JSON.stringify(prontuario))

alert("Prontuário salvo")

}

function salvarRegistro(){

let registro={
data:document.getElementById("data").value,
peso:parseFloat(document.getElementById("peso").value),
imc:parseFloat(document.getElementById("imc").value)
}

registros.push(registro)

localStorage.setItem("registros",JSON.stringify(registros))

atualizarGrafico()

}

function salvarExame(){

let exame={
glicose:parseFloat(document.getElementById("glicose").value),
pcr:parseFloat(document.getElementById("pcr").value)
}

exames.push(exame)

localStorage.setItem("exames",JSON.stringify(exames))

avaliarMetabolico(exame)

}

function avaliarMetabolico(exame){

let painel=document.getElementById("painelMetabolico")

painel.innerHTML=""

painel.innerHTML += "Glicose: " + exame.glicose + "<br>"
painel.innerHTML += "PCR: " + exame.pcr + "<br>"

}

function atualizarGrafico(){

let labels=registros.map(r=>r.data)
let peso=registros.map(r=>r.peso)

new Chart(document.getElementById("pesoChart"),{

type:"line",

data:{
labels:labels,
datasets:[{
label:"Peso",
data:peso,
borderColor:"#c39b3b"
}]
}

})

}