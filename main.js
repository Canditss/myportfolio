function toggleAboutButton() {
  var aboutElement = document.querySelector('.about');
  aboutElement.style.display = (aboutElement.style.display === 'none' || aboutElement.style.display === '') ? 'block' : '';
  var button = document.getElementById('toggleAboutButton');
  button.textContent = (button.textContent === '▲') ? 'Details ▼' : '▲';
}


