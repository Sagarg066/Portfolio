document.addEventListener('DOMContentLoaded', function () {
  const typingText = document.getElementById('typing-text');

  function type(texts, index) {
    let currentText = texts[index];

    function typeCharacter() {
      typingText.textContent += currentText.charAt(0);
      currentText = currentText.substring(1);

      if (currentText.length > 0) {
        setTimeout(typeCharacter, 150);
      } else {
        setTimeout(function () {
          typingText.textContent = '';
          type(texts, (index + 1) % texts.length);
        }, 2000);
      }
    }

    typeCharacter();
  }

  type(["Front-end Developer...", "Survey Programmer..."], 1);

  window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('scrollPosition', window.scrollY || document.documentElement.scrollTop);
  });

  const scrollPosition = sessionStorage.getItem('scrollPosition') || 0;
  window.scrollTo(0, scrollPosition);

  // Setting background image
  var backgroundContainer = document.getElementById("lazy-background");
  if (backgroundContainer) {
    backgroundContainer.style.backgroundImage = 'url("1.png")';
  }
});
