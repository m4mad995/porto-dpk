function sendMassage () {
    const name =document.getElementById('name').value;
    const email =document.getElementById('email').value;
    const masage =document.getElementById('masage').value;

    const url = "https://api.whatsapp.com/send?phone=62881036969830&text=Halo%20Hamdani%2C%20%0Asaya%20*"+ name +"*%0Aemail%20saya%20*"+ email +"*%20%0A%0A*"+ masage +"*"

    window.open(url);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.8
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // About Section Animation
    const aboutLeft = document.querySelector('.aboutkiri');
    const aboutRight = document.querySelector('.aboutkanan');
    
    if (aboutLeft && aboutRight) {
        observer.observe(aboutLeft);
        observer.observe(aboutRight);
    }

    // Project Cards Animation
    const projects = document.querySelectorAll('.proyek');
    projects.forEach((project, index) => {
        project.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(project);
    });

    // Education Section Animation
    const eduInfo = document.querySelector('.edu-info');
    if (eduInfo) {
        observer.observe(eduInfo);
    }

    // Contact Form Animation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        observer.observe(contactForm);
        
        // Add staggered delay to form elements
        const formElements = contactForm.querySelectorAll('div');
        formElements.forEach((element, index) => {
            element.style.transitionDelay = `${index * 0.1}s`;
        });
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effect for project cards
document.querySelectorAll('.proyek').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-10px)';
        project.style.transition = 'transform 0.3s ease';
    });

    project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0)';
    });
});

Aos.init();
