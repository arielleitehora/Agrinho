// Código para trocar a cor de fundo ao clicar no botão
const cores = ['color1', 'color2', 'color3', 'color4', 'color5'];
let indiceCor = 0;

const btn = document.getElementById('mudarCor');

btn.addEventListener('click', () => {
  // Remove todas as classes de cores
  document.body.classList.remove(...cores);
  // Incrementa o índice para a próxima cor
  indiceCor = (indiceCor + 1) % cores.length;
  // Adiciona a nova cor
  document.body.classList.add(cores[indiceCor]);
});