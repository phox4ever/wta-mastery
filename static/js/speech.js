async function speak(text) {
  const synth = window.speechSynthesis;
  const speaker = new SpeechSynthesisUtterance(text);
  synth.speak(speaker);
}

document.addEventListener('DOMContentLoaded', function() {
  const speechForm = document.querySelector('#speechForm');
  const speedInput = document.querySelector('#speechInput');

  speechForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await speak(speedInput.value);
  });
});