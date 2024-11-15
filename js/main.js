AOS.init();
        // Header Background Change on Scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-black', 'bg-opacity-90');
            } else {
                header.classList.remove('bg-black', 'bg-opacity-90');
            }
        });



//  nav start

        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        });







         // GSAP animation for button hover effect
    const button = document.getElementById('startButton');
    
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { scale: 1.1, backgroundColor: '#ffffff', color: '#1a1a1a', duration: 0.3 });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, backgroundColor: 'transparent', color: '#ffffff', duration: 0.3 });
    });


// nav end


 // Initialize Swiper
 const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});



// Framer Motion animations
const animateOnScroll = (element, animation) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                motion.animate(entry.target, animation, { duration: 0.5 });
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe(element);
};

// Animate sections
document.querySelectorAll('section').forEach(section => {
    animateOnScroll(section, { opacity: [0, 1], y: [50, 0] });
});

// Animate service cards
document.querySelectorAll('.swiper-slide').forEach(slide => {
    animateOnScroll(slide, { scale: [0.8, 1], opacity: [0, 1] });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to your server
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});
