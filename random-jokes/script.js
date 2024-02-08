const fras1 = document.querySelector('.frasa');
const image = document.querySelector('.picter');

const btn1 = document.querySelector( ".btn > span" );
const txt1 = document.querySelector( ".give" );

const album = {
  'Kalinousky1': 'KL1.jpg',
  'Kalinousky2': 'KL2.jpg',
  'Kalinousky3': 'KL3.jpg',
  'Kalinousky4': 'KL4.jpg',
  'Kalinousky5': 'KL5.jpg',
  'Kalinousky6': 'KL6.jpg'
}

const tracks = Object.keys( album );

let track ;

function play() {
  getQuotes();
  //getData()
  getClick() ;
    
  if (track > 0) {
    track--;
    switchIm(track) ;
  }else{
    track = 5 ;
    switchIm(track) ;
  };
} ;

async function getQuotes() {  
  const quotes =  ( btn1.innerHTML === "RU" ) ? 'data.json' : 'dataru.json' ;
  const res = await fetch(quotes);
  const data = await res.json(); 
  showData(data);
};

function showData(data) {
  let a = Math.floor( Math.random() * 300 ) ;
  fras1.textContent =  ( btn1.innerHTML === "RU" ) ? data[ a ].text + " -" + data[ a ].author : data.value[ a ].joke ;
};

function getClick() {    
  var audio = new Audio();
  audio.src = './assets/audio/button_cl_01.mp3';
  audio.autoplay = true;
  return true;
};

function switchIm( numTreck ) {
  image.src = './assets/img/' + album[tracks[numTreck]] ;  //изменение картинки
//  backgr.src = './assets/img/' + album[tracks[numTreck]] ; //изменение фона
};

function enru() {
  btn1.innerHTML = (btn1.innerHTML === "RU" ) ? btn1.innerHTML = "BE" : btn1.innerHTML = "RU" ;
  txt1.innerHTML = (btn1.innerHTML === "RU" ) ? txt1.innerHTML = "Дай мне параду, Кастусь" : txt1.innerHTML = "Дай мне совет, Константин" ;
};

// async function getData() {
//   const url1 = 'https://api.icndb.com/jokes/random' ;
//   const url2 = "https://type.fit/api/quotes" ;
//   const url3 = "https://favqs.com/api/qotd" ;
//   const url4 = "https://www.breakingbadapi.com/api/quotes" ;
//   const res = await fetch( url4 );
//   const data = await res.json();
//    // console.log( data );
//    // console.log( data.value.joke );
//   showData(data);    
// };

// function preloadImages() {
//   for(let i = 0; i < 6 ; i++) {
//     const img = new Image();
//     img.src = `./assets/img/${album[tracks[i]]}` ;
//       //  console.log( img.src ) ;
//   };
// };

// preloadImages() ;




// function showData1(data) {
  
//   fras1.textContent = data.value.joke ; 
//    // fras1.textContent = data[10].quote ; 
// }

// function getRandomSet( min , max , n ) { 
//     var res = new Set();
//     while (res.size < n) res.add(Math.floor(Math.random() * ( max - min + 1)) + min );
//     console.log( Array.from( res )[ 25 ] )
//     return Array.from( res )[ 25 ];
    
// }