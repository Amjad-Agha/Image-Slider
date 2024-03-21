let images = Array.from(document.querySelectorAll(".slider .image img"));
let previousButton = document.querySelector(".previous");
let paginations = document.querySelector(".paginations");
let nextButton = document.querySelector(".next");
let currentSlideNum = document.querySelector(".slide-number");
let currentSlide = 1;
let slideNums = images.length;
for(let i = 1; i <= slideNums; i++){
  let li = document.createElement("li");
  i == 1 ? li.classList.add("active") :"";
  li.append(i);
  li.setAttribute("data-index",i);
  paginations.append(li);
}
checkSlide();
// set array of paginations
let my_lis = document.querySelectorAll(".paginations li");
// to change the slide when click on paginations
my_lis.forEach((li) =>{
  // add click event on paginations
  li.addEventListener("click",()=>{
    removeActive();
    // set new value to currentSlide variable
    li.classList.add("active");
    currentSlide = document.querySelector(".paginations .active").getAttribute("data-index");
    addActiveOnImg();
    checkSlide();
    removeAddDisabled();
  })
})


nextButton.onclick = ()=>{
  removeAddDisabled()
  if(currentSlide == slideNums){
    return false;
  }else {
    removeActive();
    currentSlide +=1;
    removeAddDisabled()
    addActiveOnPag();
    addActiveOnImg();
    checkSlide();
  }
}
previousButton.onclick = ()=>{
  removeAddDisabled()
  if(currentSlide == 1){
    return false;
  }else {
    removeActive();
    currentSlide -=1;
    removeAddDisabled()
    addActiveOnPag();
    addActiveOnImg();
    checkSlide();
  }
}

function checkSlide() {
  currentSlideNum.innerHTML = "";
  // show current slide
  currentSlideNum.append(`slide #${currentSlide} of ${slideNums}`)

}

// removing active class
function removeActive() {
  // removing active class from all paginations
  my_lis.forEach((li)=>{
    li.classList.remove("active");
  })
  // removing active class from all images
  images.forEach((img)=>{
    img.classList.remove("active");
  })
}
// adding active class on required pagination
function addActiveOnPag(){
  my_lis[currentSlide - 1].classList.add("active");
}
// adding active class on required image
function addActiveOnImg() {
  images[currentSlide - 1].classList.add("active");

}
function removeAddDisabled() {
  currentSlide != slideNums ? nextButton.classList.remove("disabled"):nextButton.classList.add("disabled");
  currentSlide != 1 ? previousButton.classList.remove("disabled"):previousButton.classList.add("disabled");
}
// document.addEventListener("click",removeAddDisabled())
// next.addEventListener("click",() =>{
//   document.querySelector(".slide li.active + li").classList.add("active");
//   document.querySelector(".slide li.active").classList.remove("active");
  

// })