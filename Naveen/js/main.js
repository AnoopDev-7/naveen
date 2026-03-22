// ===== FoodFormulix - Main JavaScript =====

// Mobile Menu Toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    navMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.nav-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            navMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        navMenu.classList.remove('active');
        menuBtn.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '15px 0';
    }
});

// Scroll Animation Observer
const scrollAnimateElements = document.querySelectorAll('.scroll-animate');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

scrollAnimateElements.forEach(el => {
    observer.observe(el);
});

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    // Inquiry Form
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(inquiryForm);
            const data = Object.fromEntries(formData.entries());
            
            // Simple validation
            if (!data.projectType || !data.productCategory || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show success message (in production, send to server)
            alert('Thank you for your inquiry! We will get back to you within 24 hours.');
            inquiryForm.reset();
        });
    }
    
    // Consultation Form
    const consultationForm = document.getElementById('consultationForm');
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(consultationForm);
            const data = Object.fromEntries(formData.entries());
            
            // Simple validation
            if (!data.fullName || !data.email || !data.category || !data.type || !data.consultMessage) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Check NDA agreement
            if (!data.ndaAgree) {
                alert('Please acknowledge the NDA agreement.');
                return;
            }
            
            // Show success message (in production, send to server)
            alert('Thank you for your consultation request! We will reach out within 24 hours to schedule a call.');
            consultationForm.reset();
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Active nav link highlighting based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a:not(.btn)');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Add loading animation delay to service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.style.animationDelay = `${index * 0.15}s`;
    });
    
    const clientCards = document.querySelectorAll('.client-card');
    clientCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Console Easter Egg
console.log('%c🧪 FoodFormulix', 'font-size: 24px; font-weight: bold; color: #1a4a4a;');
console.log('%cApplied Food Formulation & Architecture', 'font-size: 14px; color: #c9a227;');
console.log('%cWhere Food Science Meets Smart Formulation', 'font-size: 12px; color: #666;');
