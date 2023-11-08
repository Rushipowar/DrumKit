
for (let i = 0; i <document.querySelectorAll('.drum').length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;

        makesound(buttonInnerHTML)  //Difine for function

        buttonAnimation(buttonInnerHTML)
     
})

document.addEventListener("keypress", function(event){
       
    makesound(event.key) //Difine for function to perform with key pressed to get in cases

    buttonAnimation(event.key)
})

   function makesound(key){

    switch (key) {  //Select the key value
        case "w":            //Select the property
             var tom1 = new Audio("sounds/tom-1.mp3");   //Add the sounds
             tom1.play();
            break;

            case "a":            //Select the property
            var tom1 = new Audio("sounds/tom-2.mp3");   //Add the sounds
            tom1.play();
           break;

           case "s":            //Select the property
           var tom1 = new Audio("sounds/tom-3.mp3");   //Add the sounds
           tom1.play();
          break;

          case "d":            //Select the property
          var tom1 = new Audio("sounds/tom-4.mp3");   //Add the sounds
          tom1.play();
         break;

         case "j":            //Select the property
         var tom1 = new Audio("sounds/snare.mp3");   //Add the sounds
         tom1.play();
        break;

        case "k":            //Select the property
        var tom1 = new Audio("sounds/kick-bass.mp3");   //Add the sounds
        tom1.play();
       break;

       case "l":            //Select the property
       var tom1 = new Audio("sounds/crash.mp3");   //Add the sounds
       tom1.play();
      break;
    
        default:
            console.log("play it")
            break;
    }
   }

   function buttonAnimation(currentkey){
      
     var activeBtn = document.querySelector("." + currentkey)  //Values of class property

     activeBtn.classList.add("pressed");

     setTimeout(function(){
        activeBtn.classList.remove("pressed");
     }, 500)
   }
      
}

