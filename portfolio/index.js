document.addEventListener('DOMContentLoaded', function () {
    const typingText = document.getElementById('typing-text');
  
    function type(texts, index) {
      let currentText = texts[index];
  
      function typeCharacter() {
        typingText.textContent += currentText.charAt(0);
        currentText = currentText.substring(1);
  
        if (currentText.length > 0) {
          setTimeout(typeCharacter, 150); // Adjust the typing speed if needed
        } else {
          // Animation for this text is complete, clear the text content
          setTimeout(function () {
            typingText.textContent = '';
            // Call the type function for the next text in the array
            type(texts, (index + 1) % texts.length);
          }, 2000); // Adjust the delay before switching to the next text
        }
      }
  
      typeCharacter();
    }
  
    // Save scroll position before unloading the page
    window.addEventListener('beforeunload', function () {
      sessionStorage.setItem('scrollPosition', window.scrollY || document.documentElement.scrollTop);
    });
  
    // Restore scroll position on page load
    const scrollPosition = sessionStorage.getItem('scrollPosition') || 0;
    window.scrollTo(0, scrollPosition);
  
    // Call the type function with an array of texts
    type(["Web Developer...", "Survey Programmer..."], 0);
  });
