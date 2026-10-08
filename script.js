/* =========================================
   SMOOTH NAVIGATION
========================================= */

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function (event) {

        const targetId = this.getAttribute('href');

        if (targetId && targetId.startsWith('#')) {

            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

            }
        }

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const sections = document.querySelectorAll('.section');

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

            }

        });

    },
    {
        threshold: 0.12
    }
);

sections.forEach(section => {
    sectionObserver.observe(section);
});


/* =========================================
   DYNAMIC FOOTER YEAR
========================================= */

const footerText = document.querySelector('footer p');

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Rohit Verma. All rights reserved.`;

}


/* =========================================
   TYPING EFFECT
========================================= */

const roles = [
    "Data Analyst",
    "Python Developer",
    "Machine Learning Enthusiast",
    "AI & Data Science Researcher"
];

const heroTitle = document.querySelector('.hero h2');

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeRole() {

    if (!heroTitle) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        heroTitle.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1800);

            return;
        }

    } else {

        heroTitle.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    const typingSpeed = deleting ? 45 : 80;

    setTimeout(typeRole, typingSpeed);
}


typeRole();


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            'rgba(2, 6, 23, 0.92)';

        navbar.style.boxShadow =
            '0 8px 30px rgba(0, 0, 0, 0.25)';

    } else {

        navbar.style.background =
            'rgba(7, 11, 20, 0.75)';

        navbar.style.boxShadow =
            'none';

    }

});


/* =========================================
   PROJECT CARD TILT EFFECT
========================================= */

const projectCards =
    document.querySelectorAll('.project-card');


projectCards.forEach(card => {

    card.addEventListener('mousemove', (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'perspective(700px) rotateX(0) rotateY(0) translateY(0)';

    });

});