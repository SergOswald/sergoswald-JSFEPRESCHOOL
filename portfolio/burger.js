const  burger = document.querySelector(".hamburger_unvisited");
const burger1 = document.querySelector(".menu_bg");

burger.addEventListener( "click" , () => { 
    burger1.style.setProperty( "--right-menu_bg" , 0 );

   } )

   const  close1 = document.querySelector(".menu_krest");

   close1.addEventListener( "click" , () => { 
    burger1.style.setProperty( "--right-menu_bg" , -620 );

   } )