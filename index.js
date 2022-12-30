function handleClick() {
    makeSound(this.innerHTML);
    buttonPressed(this.innerHTML);
}

function makeSound (letter) {
    switch (letter) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-2.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log(letter)
    }
}

function buttonPressed(button) {

    var toChange = document.querySelector("." + button);

    toChange.classList.add("pressed");

    setTimeout(function(){
        toChange.classList.remove("pressed");
    }, 200)

}

drumButtons = document.querySelectorAll(".drum")

for (var i = 0; i<drumButtons.length; i++){
    drumButtons[i].addEventListener("click", handleClick);
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonPressed(event.key);
})