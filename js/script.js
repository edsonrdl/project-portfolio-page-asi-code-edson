//Active animation logo
const sectionInitialPresentationAsiCodeActive = document.querySelector('#container-exibi-icons');

function activeLogoAsiCodeAnimation() {
  const logoAsiCode = document.querySelector('.initial-logo-apresentation');
  logoAsiCode.classList.add('logo-Active');
}

function deactivateLogoAsiCodeAnimation() {
  const logoAsiCode = document.querySelector('.initial-logo-apresentation');
  logoAsiCode.classList.remove('logo-Active');
}

sectionInitialPresentationAsiCodeActive.addEventListener('mouseover', activeLogoAsiCodeAnimation);
sectionInitialPresentationAsiCodeActive.addEventListener('mouseout', deactivateLogoAsiCodeAnimation);


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
      clearTimeout(timeoutId);
      showIcon();
    }, 3000);
  }
};

function deactivateDisplayIcons() {
  clearInterval(intervalId);
  intervalId = null;
}

function checkVisibilityDisplayShowIcons() {
  const mySectionDisplay = document.getElementById("container-exibi-icons");
  const boundingBox = mySectionDisplay.getBoundingClientRect();

  const threshold = 0.5; 

  const isPartiallyVisible =
    boundingBox.bottom >= 0 &&
    boundingBox.right >= 0 &&
    boundingBox.top <= window.innerHeight &&
    boundingBox.left <= window.innerWidth;

  const verticalVisibility =
    boundingBox.top <= window.innerHeight * (1 - threshold) &&
    boundingBox.bottom >= window.innerHeight * threshold;

  const horizontalVisibility =
    boundingBox.left <= window.innerWidth * (1 - threshold) &&
    boundingBox.right >= window.innerWidth * threshold;

  if (isPartiallyVisible && verticalVisibility && horizontalVisibility) {
    activateDisplayIcons();
  } else {
    deactivateDisplayIcons();
  }
};

document.getElementById("container-exibi-icons").addEventListener("mouseenter", checkVisibilityDisplayShowIcons);
document.getElementById("container-exibi-icons").addEventListener("mouseleave", checkVisibilityDisplayShowIcons);
window.addEventListener("scroll", checkVisibilityDisplayShowIcons);
window.addEventListener("resize", checkVisibilityDisplayShowIcons);
window.addEventListener("load", checkVisibilityDisplayShowIcons);

//Download CV
 function downloadCv() {
  const displayCatDownload = document.querySelector('.img-cat-display');

  displayCatDownload.classList.add('img-cat-animation');
  setTimeout(() => {
    displayCatDownload.classList.remove('img-cat-animation');
  }, 4000);

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'CV_Edson_Rodrigo_PT_BR.pdf.pdf', true);
  xhr.responseType = 'blob';
  xhr.onload = function() {
      if (this.status === 200) {
          var blob = this.response;
          saveAs(blob, "CV_Edson_Rodrigo_PT_BR");
      }
  };
  xhr.send();
};
//Copiar contato 
function copyContacts(text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('Copiado: ' + text);
};

//Slide img portfolio
const slidePortfolios = document.querySelectorAll('.slide-portfolio');
let currentIndexImgagem = 0;
let intervalIdImg;
let lastHoveredElement;

function showNextImageCardPortfolio() {
  if (lastHoveredElement) {
    const elementId = lastHoveredElement.id;
    console.log('ID do elemento:', elementId);

    const slideImgPortfolioElement = document.getElementById(elementId);
    console.log('Elemento do id', slideImgPortfolioElement);

    if (slideImgPortfolioElement) {
      const slideImgPortfolioChildren = slideImgPortfolioElement.querySelectorAll('.slide-img-portfolio');
      console.log('Elemento img', slideImgPortfolioChildren);
      console.log('Elemento img indice 0', slideImgPortfolioChildren[0]);

      slideImgPortfolioChildren[currentIndexImgagem].style.opacity = 0;
      currentIndexImgagem = (currentIndexImgagem + 1) % slideImgPortfolioChildren.length;
      console.log('Atualizar o índice da próxima imagem', currentIndexImgagem);
      slideImgPortfolioChildren[currentIndexImgagem].style.opacity = 1;
    } else {
      console.error('Elemento não encontrado no DOM:', elementId);
    }
  } else {
    console.error('Elemento ou ID não definido.');
  }
}

function activateShowNextImageCardPortfolio(event) {
  lastHoveredElement = event.currentTarget;
  showNextImageCardPortfolio(); 
  if (!intervalIdImg) {
    intervalIdImg = setInterval(showNextImageCardPortfolio, 3000);
    console.log('Ativado');
  }
}

function deactivateShowNextImageCardPortfolio() {
  clearInterval(intervalIdImg);
  intervalIdImg = null;
  currentIndexImgagem = 0;
  lastHoveredElement = null;
  console.log('Desativado');
}

slidePortfolios.forEach(portfolio => {
  portfolio.addEventListener('mouseover', activateShowNextImageCardPortfolio);
  portfolio.addEventListener('mouseleave', deactivateShowNextImageCardPortfolio);
});



//Modal preview card portfolio
var modalPreview = document.getElementById("modal-portfolio-preview");
var span = document.getElementsByClassName("close")[0];
var btnPreview = document.querySelectorAll(".button-card-port-btn-preview");

btnPreview.forEach(function (button) {
  button.addEventListener('click', showModalPreviewActive);
});

function showModalPreviewActive(event) {
  const btnPreview = event.currentTarget;
  const modalPreview = btnPreview.nextElementSibling;

  if (modalPreview && modalPreview.classList.contains("modal-preview")) {
    modalPreview.style.display = "block";
  }
}

span.onclick = function () {
  modalPreview.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalPreview) {
    modalPreview.style.display = "none";
  }
};

