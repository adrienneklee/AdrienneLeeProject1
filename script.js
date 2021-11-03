// When the form is submitted
// get the name, email, text from the input
// alert - thank you for your comment

const formElement = document.querySelector('.getInTouch');

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = document.querySelector('input[type=text]');
    const userName = nameInput.value;

    const emailInput = document.querySelector('input[type=email]');
    const userEmail = emailInput.value;

    const messageInput = document.querySelector('textarea');
    const userMessage = messageInput.value;

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    alert(`Thank you for your message! 
Sophie will get back to you soon! 💁‍♀️`);

});
