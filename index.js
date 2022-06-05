for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        playSound(this.classList[0])
        animateButton(this.classList[0])
    });
}

document.addEventListener('keydown', function(event) {
    playSound(event.key)
    animateButton(event.key)
});

function playSound(key) {
    switch(key) {
        case 'w':
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case 'a':
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case 's':
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case 'd':
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case 'j':
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case 'k':
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case 'l':
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
    }
}

function animateButton(key) {
    if(['w','a','s','d','j','k','l'].includes(key)) {
        var button = document.getElementsByClassName(key)[0]
        button.classList.add("pressed")
        setTimeout(() => {
            button.classList.remove("pressed")
        }, 100);
    }
}