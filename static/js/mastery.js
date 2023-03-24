document.addEventListener('DOMContentLoaded', function() {
  const randomNameButton = document.querySelector('#randomNameButton');
  randomNameButton.addEventListener('click', async () => {
    const response = await fetch('/mastery/random');
    const data = await response.json();
    document.querySelector('#randomNameOutput').value = data.name;
  });

  const autocompleteButton = document.querySelector('#autocompleteButton');
  autocompleteButton.addEventListener('click', async () => {
    const input = document.querySelector('#autocomplete');
    const response = await fetch(`/mastery/autocomplete?name=${input.value}`);
    const data = await response.json();

    document.querySelector('#autocompleteOutput').textContent = data.join(', ');
  });

  const statisticsButton = document.querySelector('#statisticsButton');
  statisticsButton.addEventListener('click', async () => {
    const input = document.querySelector('#statisticsInput');
    const response = await fetch(`/mastery/statistics?q=${input.value}`);
    const data = await response.json();

    document.querySelector('#shortestName').textContent = data.minNameLength;
    document.querySelector('#longestName').textContent = data.maxNameLength;
    document.querySelector('#avgName').textContent = data.averageNameLength;
  });
});