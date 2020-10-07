function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return; // stops the function from running all together
    audio.currentTime = 0; // rewinds sound to the start so it replays every time you press key
    audio.play();
    key.classList.add('playing');
};

function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // skips it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playSound);