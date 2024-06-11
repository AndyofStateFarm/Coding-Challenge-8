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
    if (!name || !email || !eventDate || preferences.length === 0) 
    {
        alert('Please fill out all required fields.');
        return;
    }

    // Display registration details
    const RegistrationDetails = document.getElementById('RegistrationDetails');
    const RegistrationDisplay = document.createElement(`div`);
    RegistrationDisplay.innerHTML = 
    `
        <h2>Registration Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Meal Preferences:</strong> ${preferences.join(', ')}</p>
    `;
   RegistrationDetails.appendChild(RegistrationDisplay);

    // Reset form fields
    document.getElementById('RegistrationForm').reset();
});