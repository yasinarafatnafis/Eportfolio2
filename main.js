// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});

// Typed.js initialization with fallback
document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.getElementById('typed-text');
    const fallbackElement = document.getElementById('typed-fallback');
    
    if (typedElement) {
        // Check if Typed.js is available and user hasn't disabled motion
        if (typeof Typed !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            new Typed('#typed-text', {
                strings: [
                    'Entry-level Software Developer',
                    'Java Developer',
                    'C++ Programmer', 
                    'Python Developer',
                    'Web Developer'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
            
            // Hide fallback text when Typed.js is working
            if (fallbackElement) {
                fallbackElement.style.display = 'none';
            }
        } else {
            // Use fallback static text
            typedElement.textContent = 'Entry-level Software Developer';
            if (fallbackElement) {
                fallbackElement.style.display = 'none';
            }
        }
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity to 0 for fade-in effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease-in-out';
    });
});

// Contact form handling (if form exists)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4';
            successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            
            contactForm.appendChild(successMessage);
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
});