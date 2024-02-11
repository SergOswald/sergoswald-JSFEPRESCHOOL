const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioImages = document.querySelectorAll('.portfolio-img');

  function changeImages() {
      portfolioBtns.addEventListener( "click" , function(event) {
  if(event.target.classList.contains("portfolio-btn")) {
    
  portfolioImages.forEach(( img , index ) => {
      img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`    
  })
  }
  })
  }

changeImages() ;

const portfolioBtns1 = document.querySelector('.portfolio-btns');
const portfolioBtns2 = document.querySelectorAll('.portfolio-btn');
function changeClassActive() {
    portfolioBtns1.addEventListener( "click" , function(event) {
        portfolioBtns2.forEach( ( e ) => { e.classList.remove('active') } ) ;
    if(event.target.classList.contains("portfolio-btn")) {
        event.target.classList.add('active');
    }
}
    )
}

changeClassActive() ;







//const seasons = ['winter', 'spring', 'summer', 'autumn']; 



/*function preloadImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${event.target.dataset.seasons}/${i}.jpg`;
    }
  }

  preloadImages(); */

