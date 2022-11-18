//images array to assign each class with it's own unique image
let images = [
  document.querySelector(".img1"),
  document.querySelector(".img2"),
  document.querySelector(".img3"),
  document.querySelector(".img4"),
  document.querySelector(".img5"),
  document.querySelector(".img6"),
  document.querySelector(".img7"),
  document.querySelector(".img8"),
  document.querySelector(".img9"),
  document.querySelector(".img10")
];


//API
const BASE_URL = "https://api.unsplash.com"; //Unsplash website
fetch (`${BASE_URL}/search/photos/?query="skincare&client_id=56nlzPl65-YaTzlU_1Z-57ZvobZwvOAgPdfPUkCHO7U`)
.then(response => response.json())
.then (data =>{
  for (let i=0; i<images.length;i++){
    images[i].src = data["results"][i]["urls"]["regular"]
  }
})

//checking if the item is in view to trigger animation
let isInViewport = (item) => {
  let bounding = item.getBoundingClientRect(),
  myElementHeight = item.offsetHeight;
  
  if(bounding.top >= -myElementHeight
    && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
      return true;
    } else {
      return false;
    }
  }
  
  //for text that slides up animation
  const movingText = document.querySelectorAll(".up");
  console.log('movingText', movingText);
  
  for(let i=0; i<movingText.length;i++){
    window.addEventListener("scroll", function(){
      if(isInViewport(movingText[i])) {
        movingText[i].classList.add("slide-up"); 
      }
    })
  };
  
  //For shipping animation from left to right
  const movingRight = document.querySelectorAll(".right-animation");
  console.log('movingRight', movingRight);
  
  for(let i=0; i<movingRight.length;i++){
    window.addEventListener("scroll", function(){
      if(isInViewport(movingRight[i])) {
        movingRight[i].classList.add("slide-right"); 
      }
    })
  };
  
  //all the images that have that class
  let all = document.querySelectorAll(".all");
  let skincare = document.querySelectorAll(".skincare");
  let honey = document.querySelectorAll(".honey");
  let packs = document.querySelectorAll(".packs");
  let kawakawa = document.querySelectorAll(".kawakawa");
  let manuka = document.querySelectorAll(".manuka");
  let harakeke = document.querySelectorAll(".harakeke");

const radioButtons = document.querySelectorAll('input');
for (const radioButton of radioButtons){
  radioButton.addEventListener('change',function(e){
    //skincare button
    if (document.getElementById('skincare').checked == true){
      for (let i = 0; i < skincare.length; i++){
        all[i].style.visibility = "hidden";
        skincare[i].style.visibility = "visible";
      }
    }
    //honey button
    if (document.getElementById('honey').checked == true){
      for (let i = 0; i < honey.length; i++){
        all[i].style.visibility = "hidden";
        honey[i].style.visibility = "visible";
      }
    }
    //packs button
    if (document.getElementById('packs').checked == true){
      for (let i = 0; i < packs.length; i++){
        all[i].style.visibility = "hidden";
        packs[i].style.visibility = "visible";
      }
    }
    //kawakawa button
    if (document.getElementById('kawakawa').checked == true){
      for (let i = 0; i < kawakawa.length; i++){
        all[i].style.visibility = "hidden";
        kawakawa[i].style.visibility = "visible";
      }
    }
    //manuka button
    if (document.getElementById('manuka').checked == true){
      for (let i = 0; i < manuka.length; i++){
        all[i].style.visibility = "hidden";
        manuka[i].style.visibility = "visible";
      }
    }
    //harakeke button
    if (document.getElementById('harakeke').checked == true){
      for (let i = 0; i < harakeke.length; i++){
        all[i].style.visibility = "hidden";
        harakeke[i].style.visibility = "visible";
      }
    }
  }
)}


            