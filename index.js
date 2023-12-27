document.addEventListener('DOMContentLoaded', function () {
    var typingElement = document.getElementById('typing-text');
    var textToType = typingElement.textContent;

    typingElement.textContent = ''; // Clear the text content

    // Split the text into an array of characters
    var characters = textToType.split('');

    // Use a loop to append each character with a delay
    characters.forEach(function (char, index) {
        setTimeout(function () {
            typingElement.textContent += char;
        }, index * 100);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var skillsSection = document.getElementById("skills-section");
    var skills = document.querySelectorAll(".skill");

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateSkills() {
        skills.forEach(function (skill) {
            if (isInViewport(skill)) {
                skill.style.opacity = 1;
                skill.style.transform = "translateY(0)";
            }
        });

        if (isInViewport(skillsSection)) {
            skillsSection.style.opacity = 1;
            skillsSection.style.transform = "translateY(0)";
        }
    }

    window.addEventListener("scroll", animateSkills);
    window.addEventListener("resize", animateSkills);

    // Initial check in case some skills are already in the viewport
    animateSkills();
});





    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            captcha += characters[randomIndex];
        }
        document.getElementById('captcha').innerText = captcha;
    }

    function validateCaptcha(event) {
        event.preventDefault(); // Prevent the form from submitting by default

        const userEnteredCaptcha = document.getElementById('captchaInput').value;
        const actualCaptcha = document.getElementById('captcha').innerText;

        if (userEnteredCaptcha.toLowerCase() === actualCaptcha.toLowerCase()) {
            alert('Captcha validation successful. Form can be submitted.');
            // Additional logic for form submission
        } else {
            alert('Captcha validation failed. Please try again.');
            // Additional logic for handling failed validation
        }

        // Optional: Regenerate captcha after submission
        generateCaptcha();
    }

    // Initial captcha generation
    generateCaptcha();



  