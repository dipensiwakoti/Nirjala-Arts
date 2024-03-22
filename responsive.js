var menu = document.querySelector("#SVGRepo_iconCarrier");
var sendButton77 = document.querySelector("#XMLID_51_");
var displayMenu = document.querySelector(".menu-display-onclick");
var svg1 = document.querySelector(".nav-menu-svg1");
var svg7 = document.querySelector(".nav-menu-svg7");
var svg = document.querySelector(".nav-menu-svg");
var wrapper = document.querySelector("#wrapper");
var video2= document.querySelector(".video2");
var page2= document.querySelector(".page2");
var page3= document.querySelector("#page3");
var page4= document.querySelector(".page4");
var belowNav = document.querySelector("#bellowNav");
var logo1 = document.querySelector(".logo1");
var overlay = document.querySelector(".page4Resposive .overlay");
var page4Element = document.querySelectorAll(".page4Resposive .elem ");
var svg3;
var elementEachPage4;
var elementEachPage4_2nd;
var nodeEach;
var nodeEach_2nd;
var aA=0;
var bB=0;
var cC=0;
var dD=0;
var eE=0;
var zZ;

var flag=0;
var overlaY=1;
 belowNav.addEventListener("click",function(){
   var f = displayMenu.style.top="-100%";
   if(f=="-100%"){
    flag=0;
    svg1.innerHTML=`<svg class="nav-menu-svg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
      <div class="textMenuVal"><p>Menu</p></div>
      `;
   }

   else{
    flag=1;
    svg1.innerHTML= `<svg class="nav-menu-svg2" fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier2"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
    <div class="textMenuVal"><p>Menu</p></div>

    `;
   }
  belowNav.style.filter= "blur(0px)";
  video2.style.filter= "blur(0px)";
  page2.style.filter= "blur(0px)";
  page3.style.filter= "blur(0px)";
  page4.style.filter= "blur(0px)";
  logo1.style.opacity= "1";

 })
 page2.addEventListener("click",function(){
  displayMenu.style.top="-100%";
  belowNav.style.filter= "blur(0px)";
  video2.style.filter= "blur(0px)";
  page2.style.filter= "blur(0px)";
  page3.style.filter= "blur(0px)";
  page4.style.filter= "blur(0px)";
  logo1.style.opacity= "1";

 })
 video2.addEventListener("click",function(){
  displayMenu.style.top="-100%";
  belowNav.style.filter= "blur(0px)";
  video2.style.filter= "blur(0px)";
  page2.style.filter= "blur(0px)";
  page3.style.filter= "blur(0px)";
  page4.style.filter= "blur(0px)";
  logo1.style.opacity= "1";

 })

svg7.addEventListener("click",function(){
    if(flag==0){
    displayMenu.style.top = "10vh";
    flag=1;
    // svg.style.animation = "threeDot .7s ease infinite";

    belowNav.style.filter= "blur(2px)";
    video2.style.filter= "blur(2px)";
    page2.style.filter= "blur(2px)";
    page3.style.filter= "blur(2px)";
    page4.style.filter= "blur(2px)";
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
      belowNav.style.filter= "blur(0px)";
      video2.style.filter= "blur(0px)";
      page2.style.filter= "blur(0px)";
      page3.style.filter= "blur(0px)";
      page4.style.filter= "blur(0px)";
      logo1.style.opacity= "1";
      svg.style.display= "block";
      svg1.innerHTML=`<svg class="nav-menu-svg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
      <div class="textMenuVal"><p>Menu</p></div>

      `;
    }
} )
page4Element.forEach(function(elementEachPage4,nodeEach) {
   elementEachPage4.addEventListener("click",function(elementEachPage4_2nd,nodeEach_2nd){
  console.log(elementEachPage4.id);
  console.log(elementEachPage4.class);
   zZ= document.querySelector(`.${elementEachPage4.class}.overlay`);
             if(elementEachPage4.id == 0){
          zZ.style.top="0%";
            elementEachPage4.id =1;
        }
        else{
          zZ.top="-100%";
          elementEachPage4.id = 0;

        }
      })
    });

    sendButton77.addEventListener("click",function textAreaInvalid(){
      var e = document.querySelector(".addASuggestion textarea").value.trim().length;
      if(e == 0){
        textArea.placeholder = "Please fill the form !";
    }
    if(e>0){
      textArea.value = "";
      textArea.placeholder = "Form sucessfully Submitted!";
      textArea.style.color = "orangered";
    
     setTimeout(function(){
    
       textArea.style.color = "black";
       textArea.placeholder = "add some sugg....";
    
    
     },2000)
    }
    });
  // var elementEachPage4.id);
  // elementEachPage4.forEach(function(elementEachPage4_2nd,nodeEach_2nd){
       
  //        console.log(elementEachPage4_2nd);

  // })
  // console.log(elementEachPage4[0],nodeEach);
  // elementEachPage4.addEventListener("click",function(){

    
        // if(){
        //   overlay.style.top="0%";

        // }
        // else{
        //   overlay.top="-100%";
        // }

  // })
  

page4Element.addEventListener("click",function(){
        if(overlaY==1){
  overlay.style.top="0%";
overlaY=0;
}

  else{
    overlay.style.top ="-100%";
    overlaY=1;
  }
})

// cont.addEventListener("click",function(){
//   full.style.display= "block"
// })
// cont.addEventListener("mouseleave",function(){
//   full.style.display= "none"
// })
// AllELem.forEach(function(each){

//  each.addEventListener("click",function(){
//      console.log(each.childNodes[5].src);
     
//      full.style.backgroundImage= `url(${each.childNodes[5].src})`; 

//    full.addEventListener("click",function(){
//        full.style.backgroundImage= `url(${each.childNodes[5].src})`;
//        hover.style.top= "0%";
//    })

//  } )
//  each.addEventListener("mouseleave",function(){

//      full.style.backgroundImage= "none";
//      full.addEventListener("mouseleave",function(){
//        full.style.backgroundImage= "none";
//        hover.style.top= "-100%";


//    })

//  } )
//  } )



