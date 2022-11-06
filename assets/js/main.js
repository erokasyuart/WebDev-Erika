const BASE_URL = `https://api.unsplash.com`;
let images = fetch (`${BASE_URL}/search/photos/?query="skincare&client id=56nlzPl65-YaTzlU_1Z-57ZvobZwvOAgPdfPUkCHO7U`);
images.then{response =>{
    //stuff
}}

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('slide-up');
      }
    });
  });
  
  observer.observe(document.querySelector('.slide-up'));