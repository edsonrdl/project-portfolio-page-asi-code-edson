const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('menu-nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


async function carregarJSON() {
  try {
    const response = await fetch('svg.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao carregar o arquivo JSON:', error);
    throw error;
  }
}

// Função para exibir os ícones na tela
function exibirIcones(icones) {
  const container = document.getElementById('icons-container');

  icones.forEach((icone) => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${icone.name}</h3>${icone.path}`;
    container.appendChild(div);
  });
}

// Carregar o JSON e exibir os ícones
carregarJSON().then((data) => {
  if (data && data.icons) {
    exibirIcones(data.icons);
  }
});
