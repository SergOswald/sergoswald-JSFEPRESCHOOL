const dark1 = document.querySelector( ".darkteam" );
const dark2 = document.querySelector( "body" );

dark1.addEventListener( "click" , () => { 
    dark2.style.setProperty( "--body-color" , '#fff' );
    dark2.style.setProperty( "--gold-color" , '#000' );
    dark2.style.setProperty( "--text-color" , '#000' );
} ) ;

/*
const dark3 = document.querySelector( ".darkteam" );

dark3.addEventListener( "click" , () => { 
    dark2.style.setProperty( "--body-color" , '#000' );
    dark2.style.setProperty( "--gold-color" , '#BDAE82' );
    dark2.style.setProperty( "--text-color" , '#fff' );
} ) ;


*/



 
   

