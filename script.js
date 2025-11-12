const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsDiv = document.getElementById("buttons");

// Create buttons dynamically
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopAudio();
        document.getElementById(sound).play();
    });

    buttonsDiv.appendChild(btn);

    // Add audio tag dynamically
    const audio = document.createElement("audio");
    audio.id = sound;
    audio.src = `sounds/${sound}.mp3`;
    document.body.appendChild(audio);
});

// STOP button
const stopBtn = document.createElement("button");
stopBtn.innerText = "stop";
stopBtn.classList.add("stop");

stopBtn.addEventListener("click", stopAudio);

buttonsDiv.appendChild(stopBtn);

// Function to pause all audio
function stopAudio() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}

