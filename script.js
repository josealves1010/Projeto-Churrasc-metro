// 1. Conectando as caixinhas do HTML com o JavaScript
const inputHomens = document.getElementById('homens');
const inputMulheres = document.getElementById('mulheres');
const inputCriancas = document.getElementById('criancas');
const botaoCalcular = document.getElementById('btn-calcular');
const painelResultado = document.getElementById('resultado');


// 2. Criando a função que calcula tudo
// 2. Criando a função que calcula tudo
function calcularChurrasco() {
    // Pegamos os valores que o usuário digitou e transformamos em Números
    const qtdHomens = Number(inputHomens.value);
    const qtdMulheres = Number(inputMulheres.value);
    const qtdCriancas = Number(inputCriancas.value);

    // Calculamos o total de adultos
    const totalAdultos = qtdHomens + qtdMulheres;

    // CONTAS:
    // Carne: (400g por adulto) + (200g por criança)
    const totalCarne = (totalAdultos * 400) + (qtdCriancas * 200);

    // Bebidas (sem ser cerveja): (400ml por adulto) + (300ml por criança)
    const totalBebidas = (totalAdultos * 400) + (qtdCriancas * 300);

    // Mostramos o resultado na tela usando o innerHTML
    // O totalBebidas / 1000 serve para transformar Mililitros (ml) em Litros (L)
    painelResultado.innerHTML = `
        <p>Você vai precisar de: <strong>${totalCarne / 1000} kg</strong> de carne.</p>
        <p>E também de: <strong>${totalBebidas / 1000} L</strong> de refrigerante/água.</p>
    `;
}

botaoCalcular.addEventListener('click', calcularChurrasco);