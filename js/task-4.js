const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const emailValue = elements.email.value.trim();
    const passwordValue = elements.password.value.trim();
    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    }
    const formInfo = {
    email: emailValue,
    password: passwordValue,
    };
    form.reset();
    console.log(formInfo);
}
