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
    "../imagens/icons/icon-.net-framework.png",
    "../imagens/icons/icon-angular.png",
    "../imagens/icons/icon-c-sharp-logo.png",
    "../imagens/icons/icon-css.png",
    "../imagens/icons/icon-docker.png",
    "../imagens/icons/icon-html-5.png",
    "../imagens/icons/icon-java.png",
    "../imagens/icons/icon-javascript.png",
    "../imagens/icons/icon-mongodb.png",
    "../imagens/icons/icon-mysql.png",
    "../imagens/icons/icon-node-js.png",
    "../imagens/icons/icon-postgres.png",
    "../imagens/icons/icon-postman.png",
    "../imagens/icons/icon-python.png",
    "../imagens/icons/icon-sass.png",
    "../imagens/icons/icon-spring-boot.png",
    "../imagens/icons/icon-sql-server.png",
    "../imagens/icons/icon-typescript.png"
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
