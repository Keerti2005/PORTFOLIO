function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log('Contact Information:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    sendEmail(name, email, message);
}

function sendEmail(name, email, message) {
    var mailtoLink = 'mailto:keertimadhuvantika.a2022ece@sece.ac.in' +
        '?subject=' + encodeURIComponent('Message from ' + name) +
        '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
    window.location.href = mailtoLink;
}
