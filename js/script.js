const sectionInitialPresentationAsiCodeActive = document.querySelector(
  "#container-exibi-icons"
);

function activeLogoAsiCodeAnimation() {
  const logoAsiCode = document.querySelector(".initial-logo-apresentation");
  logoAsiCode.classList.add("logo-Active");
}

function deactivateLogoAsiCodeAnimation() {
  const logoAsiCode = document.querySelector(".initial-logo-apresentation");
  logoAsiCode.classList.remove("logo-Active");
}

sectionInitialPresentationAsiCodeActive.addEventListener(
  "mouseover",
  activeLogoAsiCodeAnimation
);
sectionInitialPresentationAsiCodeActive.addEventListener(
  "mouseout",
  deactivateLogoAsiCodeAnimation
);

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("menu-nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function scrollToSectionNav(event) {
  event.preventDefault();

  const sectionId = event.currentTarget.getAttribute("data-section");

  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.querySelectorAll("[data-section]").forEach((link) => {
  link.addEventListener("click", scrollToSectionNav);
});

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
    "../imagens/icons/icon-typescript.png",
  ];

  return IconsArray[Math.floor(Math.random() * IconsArray.length)];
}

function getRandomPositionDisplay() {
  const container = document.getElementById("container-exibi-icons");
  const widthContainer = container.clientWidth;
  const heightContainer = container.clientHeight;
  const width = widthContainer - 100;
  const height = heightContainer - 100;
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  return { x, y };
}

function showIcon() {
  const imgSrc = getRandomIcon();
  const container = document.getElementById("container-exibi-icons");

  const imgElement = document.createElement("img");
  imgElement.className = "icon";
  imgElement.setAttribute("src", imgSrc);

  const position = getRandomPositionDisplay();
  imgElement.style.left = position.x + "px";
  imgElement.style.top = position.y + "px";
  imgElement.style.visibility = "visible";
  imgElement.style.width = "40px";

  container.appendChild(imgElement);

  setTimeout(() => {
    imgElement.style.visibility = "hidden";
  }, 5000);
}

function activateDisplayIcons() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      clearTimeout(timeoutId);
      showIcon();
    }, 5000);
  }
}

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
}

document
  .getElementById("container-exibi-icons")
  .addEventListener("mouseenter", checkVisibilityDisplayShowIcons);
document
  .getElementById("container-exibi-icons")
  .addEventListener("mouseleave", checkVisibilityDisplayShowIcons);
window.addEventListener("scroll", checkVisibilityDisplayShowIcons);
window.addEventListener("resize", checkVisibilityDisplayShowIcons);
window.addEventListener("load", checkVisibilityDisplayShowIcons);

function downloadCv() {
  const displayCatDownload = document.querySelector(".img-cat-display");

  displayCatDownload.classList.add("img-cat-animation");
  setTimeout(() => {
    displayCatDownload.classList.remove("img-cat-animation");
  }, 4000);

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "CV_Edson_Rodrigo_PT_BR.pdf.pdf", true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    if (this.status === 200) {
      var blob = this.response;
      saveAs(blob, "CV_Edson_Rodrigo_PT_BR");
    }
  };
  xhr.send();
}

function copyContacts(text) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert("Copiado: " + text);
}

let currentIndexImgagem = 0;
let intervalIdImg;

function showNextImageCardPortfolio() {
  const slideImgPortfolioElement =
    document.querySelectorAll(".slide-portfolio");

  const slideImg =
    slideImgPortfolioElement[
      Math.floor(Math.random() * slideImgPortfolioElement.length)
    ];

  const slideImgPortfolioChildren = slideImg.querySelectorAll(
    ".slide-img-portfolio"
  );
  slideImgPortfolioChildren[currentIndexImgagem].style.opacity = 0;
  currentIndexImgagem =
    (currentIndexImgagem + 1) % slideImgPortfolioChildren.length;
  slideImgPortfolioChildren[currentIndexImgagem].style.opacity = 1;

  if (currentIndexImgagem === slideImgPortfolioChildren.length - 1) {
    activateShowNextImageCardPortfolio();
  }
}

function activateShowNextImageCardPortfolio() {
  if (!intervalIdImg) {
    intervalIdImg = setInterval(showNextImageCardPortfolio, 3000);
  }
}
activateShowNextImageCardPortfolio();

var modalPreview = document.getElementById("modal-portfolio-preview");
var span = document.getElementsByClassName("close")[0];
var btnPreview = document.querySelectorAll(".button-card-port-btn-preview");

btnPreview.forEach(function (button) {
  button.addEventListener("click", showModalPreviewActive);
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
