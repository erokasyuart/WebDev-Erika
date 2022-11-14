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

const BASE_URL = "https://api.unsplash.com";
fetch (`${BASE_URL}/search/photos/?query="skincare&client_id=56nlzPl65-YaTzlU_1Z-57ZvobZwvOAgPdfPUkCHO7U`)
.then(response => response.json())
.then (data =>{
  console.log(data);
  for(let i=0;i<images.length;i++){
    images[i].src = data["results"][i]["urls"]["regular"]
  }
})

function isInViewport(item) {
  let bounding = item.getBoundingClientRect(),
      myElementHeight = item.offsetHeight;

  if(bounding.top >= -myElementHeight
      && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
      return true;
  } else {
      return false;
  }
}

const movingText = document.querySelectorAll(".up");
console.log('movingText', movingText);

for(let i=0; i<movingText.length;i++){
  window.addEventListener("scroll", function(){
      if(isInViewport(movingText[i])) {
        movingText[i].classList.add("slide-up"); 
    }
  })
};

