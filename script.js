  document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
    
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
  function submitForm(event) {
    event.preventDefault();

    // Perform form validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formStatus = document.getElementById('form-status');

    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
      formStatus.textContent = 'Please fill in all fields.';
      return;
    }

    // Form submission successful
    formStatus.textContent = 'Message sent successfully!';

    // Reset the form
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }