
function handleAnimation(key){

  document.querySelector("."+key).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("."+key).classList.remove("pressed");
  }, 100);

}

function handleInteraction(key){

  switch (key) {
    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    handleAnimation(key);
    break;

    case "a":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    handleAnimation(key);

    break;

    case "s":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    handleAnimation(key);

    break;

    case "d":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    handleAnimation(key);

    break;

    case "j":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    handleAnimation(key);

    break;

    case "k":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    handleAnimation(key);

    break;

    case "l":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    handleAnimation(key);

    break;

    default: console.log(key);

  }

}

for(var i = 0; i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var clickEvent = this.innerHTML;
    handleInteraction(clickEvent);
  });
}

document.addEventListener("keydown",function(event){
  var keyPressEvent = event.key;
  handleInteraction(keyPressEvent);
});
