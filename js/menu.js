var svg7111 = document.querySelectorAll(".nav-menu-svg7");
var displayMenu = document.querySelector(".menu-display-onclick");
var logo1 = document.querySelector(".logo1");
var svg = document.querySelector(".nav-menu-svg");
var svg1 = document.querySelector(".nav-menu-svg1");
var svg3;













 svg7111.forEach(function(theEachMenu1,theNodeMenu1){
    theEachMenu1.addEventListener("click",function(){
        if(flag==0){
        displayMenu.style.top = "10vh";
        flag=1;
        logo1.style.opacity= "0";
        svg.style.display= "none";
        svg1.innerHTML= `<svg class="nav-menu-svg2" fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier2"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
        <div class="textMenuVal"><p>Menu</p></div>
    
        `;
        svg3 = document.querySelector(".nav-menu-svg2");
        svg3.style.display="block";
      }
      
      else{
        svg3.style.display= "none";
        displayMenu.style.top = "-100%";
        flag=0;
          logo1.style.opacity= "1";
          svg.style.display= "block";
          svg1.innerHTML=`<svg class="nav-menu-svg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
          <div class="textMenuVal"><p>Menu</p></div>
    
          `;
        }
    } )
    })