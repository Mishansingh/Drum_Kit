// document.querySelector("button").addEventListener("click",function(){
//     alert("i got clicked");
// });

// function handleClick(){
//     alert("hello!");
// }
// for(var i=0;i<7;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         alert("i got clicked");
//     });
// }



//this will respond to the press of the key on screen
var noOfButton=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}
//this will respond to key press on keyboard
document.addEventListener("keydown",function(event){
   makeSound(event.key);
});

function makeSound(key){
   
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "a":
            var tom1=new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;

            case "s":
            var tom1=new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;

            case "d":
            var tom1=new Audio("sounds/crash.mp3");
            tom1.play();
            break;

            case "j":
            var tom1=new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;

            case "k":
            var tom1=new Audio("sounds/snare.mp3");
            tom1.play();
            break;

            case "l":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        default:
            break;
    }
}
function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");

    setTimeout( function(){
        activeButton.classList.remove("pressed");} ,100)
    

}