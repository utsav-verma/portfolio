// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Add active class to nav links on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Get all sections
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section link
                const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });
    
    // Add scroll to top button functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    // Add CSS for scroll to top button and animations
    const style = document.createElement('style');
    style.innerHTML = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: black;
            border: none;
            cursor: pointer;
            display: none;
            font-size: 1.2rem;
            box-shadow: 0 0 15px rgba(0, 225, 255, 0.5);
            transition: all 0.3s ease;
            z-index: 99;
        }
        
        .scroll-to-top:hover {
            background-color: #33e5ff;
            transform: translateY(-3px);
            box-shadow: 0 0 20px rgba(0, 225, 255, 0.7);
        }
        
        /* Glow effect for skill items */
        .skill-item:hover {
            box-shadow: 0 0 20px rgba(0, 225, 255, 0.3);
            border-color: rgba(0, 225, 255, 0.3);
        }
        
        /* Subtle animation for section titles */
        .section-title::after {
            box-shadow: 0 0 10px rgba(0, 225, 255, 0.5);
        }
        
        /* Glowing effect for navigation on hover */
        nav ul li a:hover {
            text-shadow: 0 0 8px rgba(0, 225, 255, 0.7);
        }
    `;
    document.head.appendChild(style);
});