// ========== RODAPÉ ==========
const rodape = document.createElement('footer');


// Estilos do rodapé
rodape.style.backgroundColor = '#08042d';       // Mesma cor do cabeçalho
rodape.style.color = '#ffffff';
rodape.style.textAlign = 'center';
rodape.style.padding = '5px';
rodape.style.marginTop = '0px';
rodape.style.fontSize = '16px';


rodape.style.fontFamily = 'Verdana, sans-serif';
rodape.style.lineHeight = '1';

// Criando os parágrafos do rodapé
const linha1 = document.createElement('p');
linha1.innerHTML = '&copy; Copyright 2026 - Colégio Estadual Cívico-Militar Antônio José Reis';
linha1.style.margin = '5px 0';

const linha2 = document.createElement('p');
linha2.textContent = 'Ensino Fundamental, Médio e Profissionalizante';
linha2.style.margin = '5px 0';


const linha3 = document.createElement('p');
linha3.textContent = 'Esta página é uma atividade proposta para o 2º ano, Turma B - Matemática - Ensino Médio - Disciplina de Programação';
linha3.style.margin = '5px 0';
linha3.style.color = '#cccccc';  // Tom mais suave para diferenciar

const linha4 = document.createElement('p');
linha4.textContent ='Autor: Prof Domicio Pedra';

// Montando o rodapé
rodape.appendChild(linha1);
rodape.appendChild(linha2);
rodape.appendChild(linha3);
rodape.appendChild(linha4);

// Adicionando ao body
document.body.appendChild(rodape);
