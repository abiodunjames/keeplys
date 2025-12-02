/**
 * Keeplys Landing Page
 * Main JavaScript file
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  initHeaderScroll();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('active');
    
    if (isOpen) {
      menu.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      menu.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
  
  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      menu.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Scroll-triggered Animations
 */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
  });
  
  // Observe step cards
  document.querySelectorAll('.step-card').forEach(card => {
    observer.observe(card);
  });
}

/**
 * Header Background on Scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  
  if (!header) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.style.backgroundColor = 'rgba(13, 13, 15, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.backdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
  });
}

/**
 * Language Switcher Enhancement
 */
function initLanguageSwitcher() {
  const switcher = document.querySelector('.language-switcher');
  
  if (!switcher) return;
  
  // Add keyboard navigation
  const toggle = switcher.querySelector('.lang-toggle');
  const dropdown = switcher.querySelector('.lang-dropdown');
  const options = dropdown.querySelectorAll('.lang-option');
  
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      dropdown.style.opacity = dropdown.style.opacity === '1' ? '0' : '1';
      dropdown.style.visibility = dropdown.style.visibility === 'visible' ? 'hidden' : 'visible';
    }
  });
  
  options.forEach((option, index) => {
    option.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' && index < options.length - 1) {
        e.preventDefault();
        options[index + 1].focus();
      }
      if (e.key === 'ArrowUp' && index > 0) {
        e.preventDefault();
        options[index - 1].focus();
      }
      if (e.key === 'Escape') {
        toggle.focus();
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
      }
    });
  });
}

