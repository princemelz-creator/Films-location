document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('Password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageEl = document.getElementById('message');

    messageEl.textContent = '';
    messageEl.className = 'text-center mt-4 font-medium'; 

   
    if (!fullname || !email || !password || !confirmPassword) {
        messageEl.textContent = ' Please fill in all fields.';
        messageEl.classList.add('text-red-600');
        return;
    }

    if (password !== confirmPassword) {
        messageEl.textContent = ' Passwords do not match.';
        messageEl.classList.add('text-red-600');
        return;
    }

    if (password.length < 6) {
        messageEl.textContent = ' Password must be at least 6 characters.';
        messageEl.classList.add('text-red-600');
        return;
    }

   
    messageEl.textContent = ' Account created! Redirecting...';
    messageEl.classList.add('text-emerald-600');

   
    const userData = {
        fullname: fullname,
        email: email,
        password: password 
    };

    
    const jsonPayload = JSON.stringify(userData);
    
    
    console.log("JSON Data Created successfully:", jsonPayload);

    

    setTimeout(function() {
        window.location.href = 'index.html'; 
    }, 1500); 
});