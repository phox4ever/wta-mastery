/**
 * getAvatar
 *
 * Diese Funktion setzt den Wert des src-Attributes des #avatarImage
 * auf die korrekte URL zur Avatar-API, so dass das Avatar-Bild angezeigt wird.
 *
 * @param {*} name
 */
async function getAvatar(name) {
  document.getElementById('avatarImage').src = 'https://avatar.oxro.io/avatar.svg?name=' + name;
}

/**
 * Dieser Code muss nicht verändert werden. Er sorgt dafür, dass das
 * Test-Formular im Browser funktioniert und die Funktion getAvatar
 * ausführt.
 */
document.addEventListener('DOMContentLoaded', function () {
  const avatarForm = document.querySelector('#avatarForm');
  const avatarInput = document.querySelector('#avatarInput');

  avatarForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await getAvatar(avatarInput.value);
  });
});
