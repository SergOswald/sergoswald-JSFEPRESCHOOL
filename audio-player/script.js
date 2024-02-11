
const audio = document.querySelector('.music');

const playBtn = document.querySelector('.play-pause') ;
const image = document.querySelector('.lemon3') ;  //картинка трека
const band = document.querySelector('.song-artist') ;  //группа
const trackName = document.querySelector('.song-title') ;  //название трека
const progressBar = document.querySelector('.progress-bar') ;
const input = document.querySelector(".progress-bar") ;

//const audio = document.getElementById('music')
const currentTime = document.querySelector('.currentTime') ; //текущее время трека
const start = document.querySelector('.currentTime') ;
const end = document.querySelector('.durationTime') ;
//const now = document.querySelector('.currentTime') ;

const backgr = document.querySelector('.lemon1') ;

let isPlay = false ;

function playAudio() {
    if(!isPlay) {
        isPlay = true ;

//        audio.currentTime = 0;
audio.play();


playBtn.src = `./assets/svg/pause.png` ;


//let audioTime = audio.currentTime;
//let audioLength = audio.duration ;
//durationTime = audioLength ;
//progressBar.max = audioLength ;
//progressBar.value = audioTime;
}else{
isPlay = false ;
audio.pause() ;

playBtn.src = `./assets/svg/play.png` ;
} ;
} ;

/*
function pauseAudio() {
audio.pause();
}

*/

function conversion (value) {
    let minute = Math.floor(value / 60) ;
    minute = minute.toString().length === 1 ? ('0' + minute) : minute ;
    let second = Math.round(value % 60) ;
    second = second.toString().length === 1 ? ('0' + second) : second ;
    return `${minute}:${second}` ;
  } ;

  audio.onloadedmetadata = function () {
    end.innerHTML = conversion(audio.duration)
    start.innerHTML = conversion(audio.currentTime)
  }

  progressBar.addEventListener('click', function (event) {
    let coordStart = this.getBoundingClientRect().left ;
    let coordEnd = event.pageX ;
    let p = (coordEnd - coordStart) / this.offsetWidth ;
    currentTime.style.width = p.toFixed(3) * 100 + '%' ;

    audio.currentTime = p * audio.duration ;
    //audio.play() ;
  }) ;

  setInterval(() => {
    start.innerHTML = conversion(audio.currentTime)
    currentTime.style.width = audio.currentTime / audio.duration.toFixed(3) * 100 + '%'
  }, 1000) ;



    let track; 

    const album = {
        'Beyonce - Don\'t Hurt Yourself.mp3': 'lemonade.png',
        'Dua Lipa - Don\'t Start Now.mp3': 'dontstartnow.png'
     // 'beyonce.mp3': 'lemonade.png',
     // 'dontstartnow.mp3': 'dontstartnow.png'

    }

    const tracks = Object.keys( album ) ;

    function preloadImages() {
        for(let i = 0; i < 1; i++) {
            const img = new Image();
            img.src = `./assets/img/${album[tracks[i]]}`;
        }
    }
    
    preloadImages();

    function switchTreck ( numTreck ) {
        currentTime.innerHTML = '0:00' ;
        audio.src = './assets/audio/' + tracks[numTreck] ;    //изменение пути к треку
        image.src = './assets/img/' + album[tracks[numTreck]] ;  //изменение картинки
        backgr.src = './assets/img/' + album[tracks[numTreck]] ; //изменение фона

        band.textContent = tracks[numTreck].split(' - ')[0] ;
        trackName.textContent = tracks[numTreck].split(' - ')[1].slice( 0 , -4 ) ;

      //  audio.currentTime = 0;
      //  audio.play();

        
    }


    function previousSong() {
        //  if (!playBtn.classList.contains('player-pause') ) {
        //      playBtn.classList.add('player-pause')
          //     player.classList.add('animation')
        //   }
           if (track > 0) {
               track--;
               switchTreck(track) ;
               
               progressBar.max = audio.duration
            //audio.play();
             //audio.pause() ;
             //currentTime.style.width = 0;
             //progressBar.value = 0 ;
             

           } else {
               track = 1;
               switchTreck(track)
             // audio.play();
              //audio.pause() ;
              //currentTime.style.width = 0;
              //progressBar.value = 0 ;
              
           }
       }


       function nextSong() {
        //  if (!playBtn.classList.contains('player-pause') ) {
        //  playBtn.classList.add('player-pause')
         // player.classList.add('animation')
          //  }
         // var track = 0 ;

          if ( track < 1 ) {
              track++;
              switchTreck( track );
              
              //audio.play();
              //audio.pause() ;
              //currentTime.style.width = 0;
              //audio.currentTime = 0 ;
              //progressBar.value = 0 ;
          } else {
              track = 0 ;
              switchTreck( track );
              
             //audio.play();
             //audio.pause() ;
             //currentTime.style.width = 0;
             
          }
        }       