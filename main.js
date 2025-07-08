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

const input = document.getElementById("textinput");
    const button = document.getElementById("submit");
    const error = document.querySelector(".error");

    // Optional: Load voices early for some browsers
    speechSynthesis.onvoiceschanged = () => {
      speechSynthesis.getVoices();
    };

    button.addEventListener("click", () => {
      const text = input.value.trim();
      const synth = window.speechSynthesis;

      if (!text) {
        error.textContent = "⚠️ Text is missing.";
        return;
      }

      error.textContent = "";

      // Cancel previous speech if still speaking
      if (synth.speaking) {
        synth.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(text);

      // Optional: Set voice or rate
      // const voices = synth.getVoices();
      // utterance.voice = voices.find(v => v.lang === 'en-US');
      // utterance.rate = 1;

      utterance.onend = () => {
        button.textContent = "Speak";
      };

      button.textContent = "🔊 Speaking...";
      synth.speak(utterance);
    });
