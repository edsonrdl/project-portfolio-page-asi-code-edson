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
  const imgList = [
    "./assets/img/angular.png",
    "./assets/img/apache-kafka.png",
    "./assets/img/api-rest.png",
    "./assets/img/arch-mvc.png",
    "./assets/img/asp-dot-net-core.png",
    "./assets/img/aws.png",
    "./assets/img/c-sharp.png",
    "./assets/img/clean-architecture.png",
    "./assets/img/css.png",
    "./assets/img/delphi.png",
    "./assets/img/docker.png",
    "./assets/img/dot-net-core.png",
    "./assets/img/entity-framework.png",
    "./assets/img/figma.png",
    "./assets/img/firebase.png",
    "./assets/img/firebird.png",
    "./assets/img/git.png",
    "./assets/img/github.png",
    "./assets/img/gitlab.png",
    "./assets/img/hibernate.png",
    "./assets/img/html.png",
    "./assets/img/java.png",
    "./assets/img/javascript.png",
    "./assets/img/jboss.png",
    "./assets/img/jenkins.png",
    "./assets/img/mobile.png",
    "./assets/img/mongodb.png",
    "./assets/img/mysql.png",
    "./assets/img/node.png",
    "./assets/img/postgresql.png",
    "./assets/img/postman.png",
    "./assets/img/rabbitmq.png",
    "./assets/img/react-native.png",
    "./assets/img/react.png",
    "./assets/img/redis.png",
    "./assets/img/sass.png",
    "./assets/img/springboot.png",
    "./assets/img/sqlserve.png",
    "./assets/img/tomcat.png",
    "./assets/img/typescript.png"
  ];

  return imgList[Math.floor(Math.random() * imgList.length)];
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
  xhr.open("GET", "../assets/CV_Edson_Rodrigo.pdf", true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    if (this.status === 200) {
      var blob = this.response;
      saveAs(blob, "CV_Edson_Rodrigo");
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
var btnPreview = document.querySelectorAll(".button-card-port-btn-preview-modal");

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
