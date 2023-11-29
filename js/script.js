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


function getRandomIcon() {
  
  const imgsArray = [
    "../imagens/icons/icons8-.net-framework-48.png",
    "../imagens/icons/icons8-angular-50.png",
    "../imagens/icons/icons8-c-sharp-logo-50.png",
    "../imagens/icons/icons8-css-50.png",
    "../imagens/icons/icons8-docker-50.png",
    "../imagens/icons/icons8-html-50.png",
    "../imagens/icons/icons8-java-50.png",
    "../imagens/icons/icons8-javascript-50.png",
    "../imagens/icons/icons8-microsoft-sql-server-48.png",
    "../imagens/icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-25.png",
    "../imagens/icons/icons8-mysql-50.png",
    "../imagens/icons/icons8-node-js-32.png",
    "../imagens/icons/icons8-postman-api-64.png",
    "../imagens/icons/icons8-python-50.png",
    "../imagens/icons/icons8-spring-boot-48.png",
    "../imagens/icons/icons8-typescript-50.png"
  ];


  return imgsArray[Math.floor(Math.random() * imgsArray.length)];
}

function getRandomPosition() {
  const container = document.getElementById('container-exibi-icons');
  const widthContainer = container.clientWidth;
  const heightContainer = container.clientHeight;
  const width =widthContainer-70;
  const height =heightContainer-70;
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  return { x, y };
}

function showIcon() {
  const imgSrc = getRandomIcon();
  const container = document.getElementById('container-exibi-icons');


  const imgElement = document.createElement('img');
  imgElement.className = 'icon';
  imgElement.setAttribute('src', imgSrc);


  const position = getRandomPosition();
  imgElement.style.left = position.x + 'px';
  imgElement.style.top = position.y + 'px';
  imgElement.style.visibility = 'visible';


  container.appendChild(imgElement);


  setTimeout(() => {
    imgElement.style.visibility = 'hidden';
  }, 2000);
}

setInterval(showIcon, 3000);
