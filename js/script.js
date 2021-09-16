let nome = document.querySelector('input#txtNome')
let salarioFixo = document.querySelector('input#txtSalario')
let quantidadeVendas = document.querySelector('input#txtVendas')

function calcularComissao(comissao) {
    let comissao = quantidadeVendas * 0.15
}

function calcularSalarioMensal(salarioMensal) {
    let salarioMensal = salarioFixo + comissao
}