async function getAvatar(name) {
  const targetImg = document.querySelector('#avatarImage');
  targetImg.setAttribute('src', `https://avatar.oxro.io/avatar.svg?name=${name}&isRounded=true`);
}

document.addEventListener('DOMContentLoaded', function () {
  const avatarForm = document.querySelector('#avatarForm');
  const avatarInput = document.querySelector('#avatarInput');

  avatarForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await getAvatar(avatarInput.value);
  });
});