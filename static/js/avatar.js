async function loadAvatar(name) {

}

document.addEventListener('DOMContentLoaded', function () {
  const avatarButton = document.querySelector('#avatarButton');
  const avatarInput = document.querySelector('#avatarInput');
  const avatarPlaceholder = document.querySelector('#avatarPlaceholder');

  avatarButton.addEventListener('click', async () => {
    await loadAvatar(avatarInput.value);
  });
});