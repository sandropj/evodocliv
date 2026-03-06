let registros = JSON.parse(localStorage.getItem("registros")) || []

function salvar(){

let peso = document.getElementById("peso").value
let imc = document.getElementById("imc").value
let disp = document.getElementById("disposicao").value
let data = document.getElementById("data").value

let registro = {peso,imc,disp,data}

registros.push(registro)

localStorage.setItem("registros",JSON.stringify(registros))

document.getElementById("pesoAtual").innerText = peso + " kg"
document.getElementById("imcAtual").innerText = imc
document.getElementById("dispAtual").innerText = disp

atualizarGrafico()

}

function atualizarGrafico(){

let labels = registros.map(r=>r.data)
let pesos = registros.map(r=>r.peso)

let ctx = document.getElementById("pesoChart")

new Chart(ctx,{
type:"line",
data:{
labels:labels,
datasets:[{
label:"Peso",
data:pesos,
borderColor:"#c39b3b"
}]
}
})

}

atualizarGrafico()
