const BASE_URL = "https://api.unsplash.com";
let images = fetch (`${BASE_URL}/search/photos/?query="skincare&client_id=56nlzPl65-YaTzlU_1Z-57ZvobZwvOAgPdfPUkCHO7U`);
images.then(response =>{
    return response.json();
}).then (data =>{
    console.log(data);
})

/*https://codepen.io/jr-cologne/pen/zdYdmx
let text = document.getElementsByClassName('slide-up')
let elementHeight = text.clientHeight;
document.addEventListener('scroll', animate);

function inView(){
  let height = window.innerHeight; //window height
  let scrollY = window.scrollY || window.pageYOffset; //counts pixels that have been scrolled
  let scrollPos = scrollY + height;
  let elementPos = text.getBoundingClientRect().top + scrollY + elementHeight;
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

function animate(){
  if (inView()){
    text.classList.add('slide-up');
  }
}
*/