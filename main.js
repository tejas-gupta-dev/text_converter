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
    const error = document.getElementById("errorMsg");

    button.addEventListener("click", () => {
      const text = input.value.trim();
      const synth = window.speechSynthesis;

      if (!text) {
        error.textContent = "⚠️ Please enter some text.";
        return;
      }

      error.textContent = "";

      if (synth.speaking) {
        synth.cancel(); // stop previous speech
      }

      const utterance = new SpeechSynthesisUtterance(text);

      // Optional: Set voice, volume, rate, pitch
      utterance.volume = 1.0;
      utterance.rate = 0.5;
      utterance.pitch = 1.5;

      // Try to set an English voice if available
      const voices = synth.getVoices();
      const english = voices.find(v => v.lang.startsWith("en"));
      if (english) utterance.voice = english;

      utterance.onend = () => {
        button.textContent = "Speak";
      };

      button.textContent = "🔊 Speaking...";
      synth.speak(utterance);
    });

    // Load voices early for some browsers
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
