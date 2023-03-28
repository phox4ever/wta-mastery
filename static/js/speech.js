/**
 * speak
 * 
 * Diese Funktion übernimmt einen Text und verwendet die Web Speech API,
 * um den Text laut vorzulesen.
 * 
 * @param {*} text 
 */
async function speak(text) {
  var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

/**
 * Dieser Code muss nicht verändert werden. Er sorgt dafür, dass das
 * Test-Formular im Browser funktioniert und die Funktion speak
 * ausführt.
 */
document.addEventListener('DOMContentLoaded', function() {
  const speechForm = document.querySelector('#speechForm');
  const speedInput = document.querySelector('#speechInput');

  speechForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await speak(speedInput.value);
  });
});
