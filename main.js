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

button.addEventListener("click", () => {
  const text = input.value.trim();
  const synth = window.speechSynthesis;

  if (!text) {
    error.textContent = "⚠️ Text is missing.";
    return;
  }

  error.textContent = "";

  if (synth.speaking) synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  // Load voices and pick loudest one
  const voices = synth.getVoices();
  const preferred = voices.find(v => v.name.includes("Google US") || v.lang === "en-US");
  if (preferred) utterance.voice = preferred;

  utterance.volume = 1.0;  // Max volume
  utterance.rate = 1;      // Normal rate
  utterance.pitch = 1.2;   // Slightly sharper

  utterance.onend = () => {
    button.textContent = "Speak";
  };

  button.textContent = "🔊 Speaking...";
  synth.speak(utterance);
});

// Ensure voices are loaded
speechSynthesis.onvoiceschanged = () => {
  speechSynthesis.getVoices();
};
