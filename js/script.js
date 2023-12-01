//Active animation logo
const sectionInitialPresentationAsiCodeActive= document.querySelector('.section-initial-presentation');

function toggleLogoAsiCodeAnimation(event) {
  const logoAsiCode = document.querySelectorAll('.initial-logo-apresentation');

  logoAsiCode.forEach(initialLogo => {
    initialLogo.classList.toggle('logo-Active', event.type === 'mouseover');
  });
}

sectionInitialPresentationAsiCodeActive.addEventListener('mouseover', toggleLogoAsiCodeAnimation);
sectionInitialPresentationAsiCodeActive.addEventListener('mouseout', toggleLogoAsiCodeAnimation);


//Menu mobile
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

//Scroll Suave navegação
function scrollToSectionNav(event) {

  event.preventDefault();


  const sectionId = event.currentTarget.getAttribute('data-section');


  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.querySelectorAll('[data-section]').forEach(link => {
  link.addEventListener('click', scrollToSectionNav);
});


//Exibir icones

let intervalId; 
let timeoutId;
function getRandomIcon() {

  const IconsArray = [
    "../imagens/icons/icon-.net-framework.png",
    "../imagens/icons/icon-angula.png",
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


  return IconsArray[Math.floor(Math.random() * IconsArray.length)];
};

function getRandomPositionDisplay() {
  const container = document.getElementById('container-exibi-icons');
  const widthContainer = container.clientWidth;
  const heightContainer = container.clientHeight;
  const width = widthContainer - 100;
  const height = heightContainer - 100;
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  return { x, y };
};

function showIcon() {
  const imgSrc = getRandomIcon();
  const container = document.getElementById('container-exibi-icons');

  const imgElement = document.createElement('img');
  imgElement.className = 'icon';
  imgElement.setAttribute('src', imgSrc);

  const position = getRandomPositionDisplay();
  imgElement.style.left = position.x + 'px';
  imgElement.style.top = position.y + 'px';
  imgElement.style.visibility = 'visible';

  container.appendChild(imgElement);


  setTimeout(() => {
    imgElement.style.visibility = 'hidden';
  }, 3000);
};

function activateDisplayIcons() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      // Limpe o último timeout antes de iniciar um novo
      clearTimeout(timeoutId);
      showIcon();
    }, 3000);
  }
};

function deactivateDisplayIcons() {
  clearInterval(intervalId);
  intervalId = null;
  console.log("Desativado");
}

function checkVisibility() {
  const mySectionDisplay = document.getElementById("container-exibi-icons");
  const boundingBox = mySectionDisplay.getBoundingClientRect();

  if (
    boundingBox.top >= 0 &&
    boundingBox.left >= 0 &&
    boundingBox.bottom <= window.innerHeight &&
    boundingBox.right <= window.innerWidth
  ) {
    activateDisplayIcons();
  } else {
    deactivateDisplayIcons();
  }
}

document.getElementById("container-exibi-icons").addEventListener("mouseover", checkVisibility);
document.getElementById("container-exibi-icons").addEventListener("mouseout", deactivateDisplayIcons);
window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);
window.addEventListener("load", checkVisibility);

//Active mouseover em interrogação section portfolio
const sectionInterrogationActive = document.querySelector('.card-port-front');

function toggleInterrogationAnimation(event) {
  const interrogations = document.querySelectorAll('.interrogation');

  interrogations.forEach(interrogation => {
    interrogation.classList.toggle('interrogationActive', event.type === 'mouseover');
  });
}

sectionInterrogationActive.addEventListener('mouseover', toggleInterrogationAnimation);
sectionInterrogationActive.addEventListener('mouseout', toggleInterrogationAnimation);

//Download CV
 function downloadCv() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'CV_Edson_Rodrigo_PT_BR.pdf.pdf', true);
  xhr.responseType = 'blob';
  xhr.onload = function() {
      if (this.status === 200) {
          var blob = this.response;
          saveAs(blob, "seu_cv.pdf");
      }
  };
  xhr.send();
}