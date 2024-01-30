document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');

    noBtn.addEventListener('mousemove', function(event) {
        const offsetX = Math.random() * 100 - 200; // Random horizontal offset
        const offsetY = Math.random() * 100 - 200; // Random vertical offset

        noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`; // Apply offset
    });

    const yesBtn = document.getElementById('yesBtn');
    const valentineImg = document.getElementById('valentineImg');
    const questionText = document.querySelector('.container h2');

    yesBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Change image source
        valentineImg.src = 'https://i.pinimg.com/originals/df/d4/63/dfd4631087fe6b50ba60adbb9de19e9b.gif';

        // Remove question text
        questionText.style.display = 'none';

        // Show response message
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.style.display = 'block';

        // Hide the form
        const responseForm = document.getElementById('responseForm');
        responseForm.style.display = 'none';
    });
});
