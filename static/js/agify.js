async function doRequest(name) {
  const agifyOutput = document.querySelector('#agifyOutput');
  const response = await fetch(`https://api.agify.io/?name=${name}`);
  const data = await response.json();
  agifyOutput.value = data.age;
}

document.addEventListener('DOMContentLoaded', function () {
  const agifyForm = document.querySelector('#agifyForm');
  const agifyInput = document.querySelector('#agifyInput');

  agifyForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await doRequest(agifyInput.value);
  });
});