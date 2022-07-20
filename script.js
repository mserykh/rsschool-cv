const scrollToTopButton = document.getElementById("scrollToTop");
const burgerButton = document.querySelector(".page-header__burger");
const menu = document.querySelector(".page-header-nav");
const siteNav = document.querySelector(".site-navigation");
const downloadButton = document.querySelector(".btn--download");
const downloadIcon = downloadButton.querySelector(".download-arrow");

const handleScroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.style.display = "block";
  } 
  else {
    scrollToTopButton.style.display = "none";
  }
};

const scrollToTop = () => {
  const distanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (distanceFromTop > 0) {
    window.scrollTo(0, 0);
  }
};

function toggleMobileNav() {
  burgerButton.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
}

function closeNav() {
  body.classList.remove("lock");
  burgerButton.classList.remove("active");
  menu.classList.remove("active");
}

function animateDownloadButton() {
  downloadIcon.classList.add("animate-download");

  setTimeout(function() {
    downloadIcon.classList.remove("animate-download");
  }, 1000);
}

document.addEventListener("scroll", handleScroll);
scrollToTopButton.addEventListener("click", function(e) {
  e.preventDefault();
  scrollToTop();
});

burgerButton.addEventListener("click", toggleMobileNav);
siteNav.addEventListener("click", closeNav);
downloadButton.addEventListener("click", animateDownloadButton);
