document.addEventListener('DOMContentLoaded', function() {
  const randomNameForm = document.querySelector('#randomNameForm');
  const autocompleteForm = document.querySelector('#autocompleteForm');
  const statisticsForm = document.querySelector('#statisticsForm');

  randomNameForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const response = await fetch('/mastery/random');
    const data = await response.json();
    document.querySelector('#randomNameOutput').value = data.name;
  });

  autocompleteForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = document.querySelector('#autocomplete');
    const response = await fetch(`/mastery/autocomplete?name=${input.value}`);
    const data = await response.json();

    document.querySelector('#autocompleteOutput').textContent = data.join(', ');
  });

  statisticsForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = document.querySelector('#statisticsInput');
    const response = await fetch(`/mastery/statistics?q=${input.value}`);
    const data = await response.json();

    document.querySelector('#shortestName').textContent = data.minNameLength;
    document.querySelector('#longestName').textContent = data.maxNameLength;
    document.querySelector('#avgName').textContent = data.averageNameLength;
  });
});