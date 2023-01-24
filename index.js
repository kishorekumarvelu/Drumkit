var numberofb=document.querySelectorAll(".drum").length;
for(var i=0; i<numberofb ;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function() {
  
   var buttoninnerHTML=this.innerHTML;
   makesound(buttoninnerHTML);
   buttonanimation(buttoninnerHTML);
}
);
}
document.addEventListener("keydown",function(event)
{
 makesound(event.key); 
 buttonanimation(event.key);
});

function makesound(key)
{
   switch(key)
   {
      case "w":
         var tom3=new Audio("sounds/tom-3.mp3") ;
         tom3.play();
         break;

      case "a":
         var snare=new Audio("sounds/snare.mp3") ;
         snare.play();
         break;

      case "s":
        
         var tom1=new Audio("sounds/tom-1.mp3") ;
         tom1.play();
         break;

      case "d":
         var kick=new Audio("sounds/kick-bass.mp3") ;
         kick.play();
         break;

      case "j":
         var tom2=new Audio("sounds/tom-2.mp3") ;
         tom2.play();
         break;

      case "k":
         var crash=new Audio("sounds/crash.mp3") ;
         crash.play();
         break;

      case "l":
        
         var tom4=new Audio("sounds/tom-4.mp3") ;
         tom4.play();
         break;
      case "n":
        
            var tom4=new Audio("sounds/tom-4.mp3") ;
            tom4.play();
            break;
      default:console.log(buttonclick)
         
   }
}
 function buttonanimation(currentkey)
 {
   var activebutton=document.querySelector("."+currentkey);
   activebutton.classList.add("pressed");

   setTimeout(function()
   {
      activebutton.classList.remove("pressed");
   },100);
 }
