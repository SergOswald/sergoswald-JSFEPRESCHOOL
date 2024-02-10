const bckgrclr = document.querySelector('.foot') ;
const area = document.querySelector( ".resh3x3" ) ;
const soder = document.querySelector( ".modalRez3" ) ;
const modal = document.getElementById( "modalRez2" ) ;
//const modal1 = document.getElementById( "modalRez1" ) ;
const closebtn = document.querySelector( ".close1" ) ;
const modrez = document.querySelector( ".modalRez" ) ;
const box1 = document.querySelector( ".box" ) ;

const plr11 = document.querySelector( ".plr1") ;
const plr22 = document.querySelector( ".plr2") ;

const btn1 = document.querySelector( ".btnair > span" ) ;

let nex = 0 ;

/*
function playAudio() {
    if(!isPlay) {
        isPlay = true ;

//        audio.currentTime = 0;
audio.play();

}else{
isPlay = false ;
audio.pause() ;

} ;
} ;
*/

var ar1 = [] ;
var ar2 = [] ;
var ar11 = [] ;
var ar22 = [] ;

area.addEventListener( "click" , e => {

    if( e.target.innerHTML === "" ) {

        if( e.target.className = "box" ) {
            nex % 2 === 0 ? e.target.innerHTML = "X" : e.target.innerHTML = "0" ;
            nex++ ;

            if( btn1.innerHTML === "SOUND ON" ) {
                getClick() ;
            } ;
                getXO( nex ) ;
                  
        } ;

    } ;
     
} ) ;


function getXO( nex ) {
let result = "" ;    
const boxes = document.getElementsByClassName( 'box' ) ;
const arr = [ 
[ 0 , 1 , 2 ] , [ 3 , 4 , 5 ] , [ 6 , 7 , 8 ] ,
[ 0 , 3 , 6 ] , [ 1 , 4 , 7 ] , [ 2 , 5 , 8 ] , 
[ 0 , 4 , 8 ] , [ 2 , 4 , 6 ]
] ;
    var flag = false;
    for( var i = 0 ; i < arr.length ; i++ ) {
        if( boxes[ arr[ i ][ 0 ] ].innerHTML === "X" && boxes[ arr[ i ][ 1 ] ].innerHTML === "X" && boxes[ arr[ i ][ 2 ] ].innerHTML === "X" ) {
            result = "X" ;
            preResult( result , nex ) ;
            flag = true ;
        } ;
        
        if( boxes[ arr[ i ][ 0 ] ].innerHTML === "0" && boxes[ arr[ i ][ 1 ] ].innerHTML === "0" && boxes[ arr[ i ][ 2 ] ].innerHTML === "0" ) { 
            result = "0" ;  
            preResult( result , nex ) ;
            flag = true ;
        } ;
       
        if ( nex === 9 ) {
            result = "NOBODY" ;  
            preResult( result , nex ) ;
    
        } ;
    } ;
    
   
} ;



function preResult( winner , i ) {
    soder.innerHTML = `${winner} WON !\nCOUNT STEPS ${i}` ;
    
    modrez.style.display = "block" ;

    if( winner === "X" ) {
        ar1 = ar11.unshift( 1 ) ;
    } ;

    if( winner === "0" ) {
        ar2 = ar22.unshift( 1 ) ;
    } ;
    
    scop(  ar11.length , ar22.length  ) ;
} ;



function scop(  k1 , k2 ) {
    plr11.innerHTML = `Player "X": ${k1}` ;
    plr22.innerHTML = `Player "0": ${k2}` ;

} ;


const box12 = document.querySelectorAll( ".box" ) ;

modalRez1.addEventListener( "click" , closeMod ) ;
closebtn.addEventListener( "click" , closeMod ) ;


function closeMod() {
    modrez.style.display = "none" ;
    box12.forEach(el => el.innerHTML = "");
    nex = 0 ;
    let k1 = ar11.length ; 
    let k2 = ar22.length ; 
    console.log( k1 + k2 ) ;
    if( k1 + k2 > 9 ) {
        location.reload() ;
    } ;
  
} ;


function getClick() {
    var audio = new Audio();
    audio.src = './assets/audio/button_cl_01.mp3';
    audio.autoplay = true;
    return true;
} ;

function soundonoff() {
    btn1.innerHTML = ( btn1.innerHTML === "SOUND ON" ) ? btn1.innerHTML = "SOUND OFF" : btn1.innerHTML = "SOUND ON" ;

  
} ;
    




