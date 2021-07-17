const scrollToTopButton = document.getElementById("scrollToTop");
  
const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = "block";
    } 
    else {
        scrollToTopButton.style.display = "none";
    }
};

window.addEventListener("scroll", scrollFunction);

const scrollToTop = () => {
    const distanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (distanceFromTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, distanceFromTop - distanceFromTop / 10);
    }
};

scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
}
