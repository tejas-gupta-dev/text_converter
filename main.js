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
  const voices = synth.getVoices();
  const englishVoice = voices.find(v => v.lang.startsWith("en"));
  if (englishVoice) utterance.voice = englishVoice;

  utterance.rate = 1;
  utterance.pitch = 1;

  utterance.onend = () => {
    button.textContent = "Speak";
  };

  button.textContent = "🔊 Speaking...";
  synth.speak(utterance);
});

// Force voice load
speechSynthesis.onvoiceschanged = () => {
  speechSynthesis.getVoices();
};
