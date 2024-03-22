
var textArea = document.querySelector(".addASuggestion textarea");
var cont = document.querySelector(".page4");
var full = document.querySelector(".page4 .fullScreen");
var AllELem = document.querySelectorAll(".page4 .elem");
var rachana= document.querySelector("#rachana");
var fotterSendIcon = document.querySelector(".sendSvg-mid-footer");
var fotterSendIcon1 = document.querySelector(".sendSvg-mid-footer1");
var hibro = document.querySelector(".sendSvg-mid-footer1");
var downFotter = document.querySelector(".down-footer");
var backTop = document.querySelector("#backToTop");
var navButtons = document.querySelector("#navButtons");
i=1;
j=1;

hibro.addEventListener("mouseenter",function(){
   delete (document.querySelector(".sendSvg-mid-footer"));
   console.log("entered sucesfully", i );
   i++;

  if(`${navButtons.style.display}` == "none"){
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
    }}
   
   fotterSendIcon1.innerHTML =`<a href="##"> <svg class="sendSvg-mid-footer" fill="#ff7300" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 495.003 495.003" xml:space="preserve" stroke="#ff7300"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_51_"> <path id="XMLID_53_" d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616 l-67.6-32.22V456.687z"></path> <path id="XMLID_52_" d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422 c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414 l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956 L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"></path> </g> </g></svg></a>`;
    // console.log(fotterSendIcon1.innerHTML);
})
hibro.addEventListener("mouseleave",function(){
  delete document.querySelector(".sendSvg-mid-footer");
  console.log("sucessfully leaved", j );
  j++;
  
  fotterSendIcon1.innerHTML =`<a href="##"> <svg class="sendSvg-mid-footer" fill="#f3f7f5" height="151px" width="151px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-4.95 -4.95 504.90 504.90" xml:space="preserve" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#f3f7f5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.9900059999999999"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_51_"> <path id="XMLID_53_" d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616 l-67.6-32.22V456.687z"></path> <path id="XMLID_52_" d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422 c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414 l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956 L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"></path> </g> </g></svg></a>`;
  // console.log(fotterSendIcon1.innerHTML);
})

downFotter.addEventListener("mouseenter",function(){
  delete document.querySelector(".sendSvg-mid-footer");
  fotterSendIcon1.innerHTML =`<a href="##"> <svg class="sendSvg-mid-footer" fill="#f3f7f5" height="151px" width="151px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-4.95 -4.95 504.90 504.90" xml:space="preserve" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#f3f7f5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.9900059999999999"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_51_"> <path id="XMLID_53_" d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616 l-67.6-32.22V456.687z"></path> <path id="XMLID_52_" d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422 c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414 l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956 L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"></path> </g> </g></svg></a>`;
})

var loader= document.querySelector("#loader");
 setTimeout(function(){
  loader.style.top= "-150%";
 },4000)
cont.addEventListener("mouseenter",function(){
   full.style.display= "block"
})
cont.addEventListener("mouseleave",function(){
   full.style.display= "none"
})
AllELem.forEach(function(each){

  each.addEventListener("mouseenter",function(){
      console.log(each.childNodes[5].src);
      
      full.style.backgroundImage= `url(${each.childNodes[5].src})`; 

    full.addEventListener("mouseenter",function(){
        full.style.backgroundImage= `url(${each.childNodes[5].src})`;
        hover.style.top= "0%";
    })

  } )
  each.addEventListener("mouseleave",function(){

      full.style.backgroundImage= "none";
      full.addEventListener("mouseleave",function(){
        full.style.backgroundImage= "none";
        hover.style.top= "-100%";


    })

  } )
  full.addEventListener("mouseenter",function (){

  })
});

backTop.addEventListener("click",function backToTop(){
  window.scrollTo(0,0);
});


fotterSendIcon1.addEventListener("click",function textAreaInvalid(){
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



