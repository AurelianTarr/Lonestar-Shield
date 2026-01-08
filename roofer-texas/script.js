document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon between bars and X
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            navLinks.classList.remove('active');

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Form Handling (Demo Purpose)
    const form = document.getElementById('leadForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulating a submission
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Sending...';
        btn.style.opacity = '0.7';
        
        setTimeout(() => {
            alert('Thank you! Your request for a quote has been received. A Lone Star representative will call you shortly.');
            form.reset();
            btn.innerText = originalText;
            btn.style.opacity = '1';
        }, 1500);
    });
});

