function toggleAboutButton() {
  var aboutElement = document.querySelector('.about');
  aboutElement.style.display = (aboutElement.style.display === 'none' || aboutElement.style.display === '') ? 'block' : '';
  var button = document.getElementById('toggleAboutButton');
  button.textContent = (button.textContent === '▲') ? 'Details ▼' : '▲';
}

  document.getElementById("toggleAboutButton").addEventListener("click", function() {
      var elemenTujuan = document.getElementById("about");
      elemenTujuan.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

