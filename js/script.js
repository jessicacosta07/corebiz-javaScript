function exibir() {
    let nome = document.querySelector('input#txtNome').value
    let salarioFixo = document.querySelector('input#txtSalario').value
    let quantidadeVendas = document.querySelector('input#txtVendas').value
    let resultado = document.querySelector('div#resultado')

    let comissao = parseFloat(quantidadeVendas * 0.15).toFixed(2)
    let salarioMensal = (parseFloat(salarioFixo) + parseFloat(comissao)).toFixed(2)

    if (nome.length == 0 || salarioFixo.length == 0 || quantidadeVendas.length == 0) {
        resultado.innerHTML = 'Por favor, preencha os campos!'
    } else if (salarioFixo < 0 || quantidadeVendas < 0) {
        resultado.innerHTML = 'Verifique os dados informados, informe valores maior que 0!'
    } else {
        resultado.innerHTML += `<p>Olá ${nome}, sua comissão é ${comissao} reais e salário mensal de ${salarioMensal} reais</p>`
    }
}