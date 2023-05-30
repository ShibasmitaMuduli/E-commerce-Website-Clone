/***displayimage***/
function clickImg(watchImg){
    var display = document.getElementById("imagebox")
    display.src = watchImg.src
}
/*const straps = document.querySelectorAll(".straps")
const display = document.getElementById("imagebox");
window.addEventListener('DOMContentLoaded', () => {
    straps[0].parentElement.classList.add('.display');
});
straps.forEach((image) => {
    image.addEventListener('mousehover', () => {
        display.src = image.src;
    });
});*/

/***readmore***/
const parentContainer = document.querySelector(".read_more")
parentContainer.addEventListener('click',event => {
    const current = event.target;
    const isReadMoreBtn = current.className.includes("read_more_btn");
    if(!isReadMoreBtn) return;
    const currentText = event.target.parentNode.querySelector(".more_text");
    currentText.classList.toggle("more_text--show")
    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
})


/***btn***/
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const form = document.getElementById('form');

  if (form.style.visibility === 'hidden') {
    form.style.visibility = 'visible';
  } else {
    form.style.visibility = 'hidden';
  }
});