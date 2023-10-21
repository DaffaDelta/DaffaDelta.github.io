function buttonOpener() {
    closeOpener();
    playPause();
}

function closeOpener() {
    document.getElementById("myOpener").style.display = "none";
}

var aud = document.getElementById("ASong").children[0];
var isPlaying = False;
aud.pause();

function playPause() {
    if (isPlaying) {
        aud.pause();
    } else {
        aud.play();
    }
    isPlaying = !isPlaying;
}
