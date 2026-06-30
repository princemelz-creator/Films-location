document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('helpform');
    const messageContainer = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const fullnameInput = document.getElementById('fullname');
        const emailInput = document.getElementById('email');
        const issueInput = document.getElementById('Password'); 

        const fullname = fullnameInput.value.trim();
        const email = emailInput.value.trim();
        const issue = issueInput.value.trim();

        
        if (!fullname || !email || !issue) {
            displayMessage('Please fill in all fields.', 'text-red-600');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            displayMessage('Please enter a valid email address.', 'text-red-600');
            return;
        }

        
        displayMessage(`Thank you, ${fullname} your concern is been looked into.`, 'text-green-600');
        form.reset();

    
        setTimeout(() => {
    
            window.location.href = 'Index.html'; 
        }, 3000);
    });

    function displayMessage(text, colorClass) {
        messageContainer.textContent = text;
        messageContainer.className = `text-center mt-4 font-medium ${colorClass}`;
    }
});