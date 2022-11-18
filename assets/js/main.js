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

let all = [];
let skincare =[];
let honey = [];
let packs = [];
let kawakawa = [];
let manuka = [];
let harakeke = [];

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

for (let i=0; i<images.length; i++){
  all.push(document.querySelectorAll(".all"))
  honey.push(document.querySelectorAll(".honey"))
  skincare.push(document.querySelectorAll(".skincare"))
  packs.push(document.querySelectorAll(".packs"))
  manuka.push(document.querySelectorAll(".manuka"))
  harakeke.push(document.querySelectorAll(".harakeke"))
}

const radioButtons = document.querySelectorAll('input');
for (const radioButton of radioButtons){
  radioButton.addEventListener('change',function(e){
    if (document.getElementById('skincare').checked == true){
      console.log("skincare button");
      
      }
  });

}

            