let images = [
  document.querySelector(".img1"),
  document.querySelector(".img2")
];

const BASE_URL = "https://api.unsplash.com";
let fetching = fetch (`${BASE_URL}/search/photos/?query="skincare&client_id=56nlzPl65-YaTzlU_1Z-57ZvobZwvOAgPdfPUkCHO7U`);
fetching.then(response =>{
    return response.json();
}).then (data =>{
  console.log(data);
  for (let i=0; i<images.length;i++){
    images[i].src = [results][i][links][html]
  }
})

function isInViewport(item) {

  var bounding = item.getBoundingClientRect(),
      myElementHeight = item.offsetHeight,
      myElementWidth = item.offsetWidth;

  if(bounding.top >= -myElementHeight
      && bounding.left >= -myElementWidth
      && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
      && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
      return true;
  } else {
      return false;
  }
}

const monster = document.querySelectorAll(".products");
console.log('monster', monster);
/* Window Scrolling */
for(let i=0; i<monster.length;i++){

window.addEventListener("scroll", function(){
    if(isInViewport(monster[i])) {
      console.log("yes");
      monster[i].classList.add("slide-up"); 
   }

  })
};

