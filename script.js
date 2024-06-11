// U08282838
document.getElementById('RegistrationForm').addEventListener('submit', function(event) 
{
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('eventDate').value;
    const preferences = Array.from(document.querySelectorAll('input[name="preferences"]:checked')).map(el => el.value);

    // Validate form fields
    if (!name || !email || !eventDate) 
    {
        alert('Please fill out all required fields.');
        return;
    }
    form.reset();
});