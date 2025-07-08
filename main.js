/*const intext = document.getElementById("textinput");
const result = document.getElementById("submit");
result.addEventListener("click", () => {
    const speechsynth = window.speechSynthesis;
    const err = document.querySelector(".error");
    const tex = intext.value;
    if(!speechsynth.speaking && !tex.trim().length){
        err.textContent = "Text missing";
    }
    if(!speechsynth.speaking && tex.trim().length){
        err.textContent = "";
        const newutter = new SpeechSynthesisUtterance(tex);
        speechsynth.speak(newutter);
        result.textContent = "Sound is play........";
    }
});*/

const intext = document.getElementById("textinput");
const result = document.getElementById("submit");

result.addEventListener("click", () => {
    const speechsynth = window.speechSynthesis;
    const err = document.querySelector(".error");
    const tex = intext.value;

    if (!speechsynth.speaking && !tex.trim().length) {
        err.textContent = "Text missing";
        return;
    }

    if (!speechsynth.speaking && tex.trim().length) {
        err.textContent = "";
        const newutter = new SpeechSynthesisUtterance(tex);
        result.textContent = "Speaking...";

        newutter.onend = () => {
            result.textContent = "Speak";
        };

        speechsynth.speak(newutter);
    }
});
