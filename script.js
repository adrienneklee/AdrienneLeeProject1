// When the form is submitted
// get the name, email, text from the input
// alert - thank you for your comment

const formElement = document.querySelector('.getInTouch');

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);

    const inputElement = document.querySelectorAll('input');
    console.log(inputElement);

    alert(`Thank you for your message!`);
});
