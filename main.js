// ===================================
// Modern Interior Design Website
// Interactive Features & Animations
// ===================================

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ===================================
// Theme Toggle (Dark/Light Mode)
// ===================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Add rotation animation
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// ===================================
// Navigation Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class for backdrop effect
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// Smooth Scroll for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar height

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Update active nav link
            updateActiveNavLink(this);

            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.getElementById('navLinks');

function updateActiveNavLink(clickedLink = null) {
    const navItems = document.querySelectorAll('.nav-link');

    if (clickedLink) {
        navItems.forEach(item => item.classList.remove('active'));
        clickedLink.classList.add('active');
        return;
    }

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// ===================================
// Portfolio Filter System
// ===================================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                // Trigger AOS animation again
                item.classList.add('aos-animate');
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    // Add loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');

    // Simulate form submission (replace with actual API call)
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Success feedback
        submitBtn.innerHTML = '✓ Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';

        // Reset form
        contactForm.reset();

        // Show success message
        showNotification('Thank you! We\'ll get back to you soon.', 'success');

        // Reset button after delay
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            submitBtn.style.background = '';
        }, 3000);

    } catch (error) {
        // Error feedback
        submitBtn.innerHTML = '✗ Failed. Try Again';
        submitBtn.style.background = 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)';

        showNotification('Oops! Something went wrong. Please try again.', 'error');

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            submitBtn.style.background = '';
        }, 3000);
    }
});

// ===================================
// Newsletter Form Handling
// ===================================
const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const input = form.querySelector('.newsletter-input');
        const email = input.value;

        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        showNotification('Subscribed successfully!', 'success');
        input.value = '';
    });
});

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : '✗'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        background: type === 'success'
            ? 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
            : 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)',
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        zIndex: '9999',
        animation: 'slideInRight 0.3s ease',
        fontWeight: '600'
    });

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .notification-icon {
        font-size: 1.25rem;
    }
`;
document.head.appendChild(style);

// ===================================
// Back to Top Button
// ===================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Form Input Animations
// ===================================
const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });

    // Add animation on input
    input.addEventListener('input', (e) => {
        if (e.target.value) {
            e.target.style.borderColor = 'var(--color-secondary)';
        } else {
            e.target.style.borderColor = '';
        }
    });
});

// ===================================
// Lazy Loading Images (Future Enhancement)
// ===================================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
    }
});

// ===================================
// Cursor Trail Effect (Optional)
// ===================================
let cursorTrail = [];
const MAX_TRAIL = 10;

document.addEventListener('mousemove', (e) => {
    // Create subtle cursor trail
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';

    Object.assign(trail.style, {
        position: 'fixed',
        left: e.clientX + 'px',
        top: e.clientY + 'px',
        width: '6px',
        height: '6px',
        background: 'var(--color-secondary)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9999',
        opacity: '0.5',
        transition: 'all 0.5s ease'
    });

    document.body.appendChild(trail);
    cursorTrail.push(trail);

    // Fade out and remove
    setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(0)';
    }, 100);

    setTimeout(() => {
        trail.remove();
    }, 600);

    // Limit trail elements
    if (cursorTrail.length > MAX_TRAIL) {
        const oldTrail = cursorTrail.shift();
        if (oldTrail && oldTrail.parentNode) {
            oldTrail.remove();
        }
    }
});

// ===================================
// Stats Counter Animation
// ===================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.textContent;
                const isPercentage = target.includes('%');
                const targetNumber = parseInt(target.replace(/\D/g, ''));
                let current = 0;
                const increment = targetNumber / 50;

                const updateCounter = () => {
                    current += increment;
                    if (current < targetNumber) {
                        counter.textContent = Math.ceil(current) + (isPercentage ? '%' : '+');
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

// Initialize counter animation
animateCounters();

// ===================================
// Service Card Tilt Effect
// ===================================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===================================
// Portfolio Item Modal (Placeholder)
// ===================================
const portfolioViewBtns = document.querySelectorAll('.portfolio-view-btn');

portfolioViewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const portfolioItem = btn.closest('.portfolio-item');
        const title = portfolioItem.querySelector('.portfolio-title').textContent;

        showNotification(`Opening ${title} project...`, 'success');
        // Here you would implement a modal or navigate to project detail page
    });
});

// ===================================
// Enhanced Scroll Reveal
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe elements for reveal animation
document.querySelectorAll('.service-card, .portfolio-item, .process-step').forEach(el => {
    observer.observe(el);
});

// ===================================
// Performance Optimization
// ===================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedScroll = debounce(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ===================================
// PWA Install Prompt (Future)
// ===================================
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show custom install button
    const installBtn = document.createElement('button');
    installBtn.className = 'install-app-btn';
    installBtn.textContent = '📱 Install App';
    installBtn.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: var(--gradient-primary);
        color: white;
        border: none;
        border-radius: 12px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: var(--shadow-lg);
        z-index: 998;
        animation: slideInRight 0.3s ease;
    `;

    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;

            if (outcome === 'accepted') {
                showNotification('App installed successfully!', 'success');
            }

            deferredPrompt = null;
            installBtn.remove();
        }
    });

    document.body.appendChild(installBtn);
});

// ===================================
// Console Welcome Message
// ===================================
console.log(
    '%c Elite Interiors ',
    'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px;'
);
console.log(
    '%c Transform Your Space Into Art ',
    'font-size: 14px; color: #667eea; font-weight: 600;'
);
console.log(
    '%c Website built with modern web technologies - January 2026 ',
    'font-size: 12px; color: #7f8c8d;'
);

// ===================================
// Initialize Everything on Load
// ===================================
window.addEventListener('load', () => {
    // Remove any loading screens
    document.body.classList.add('loaded');

    // Refresh AOS
    AOS.refresh();

    // Log performance metrics
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    }
});

// ===================================
// Service Worker Registration (PWA)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✓ Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
