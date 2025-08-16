/*
 * Main JavaScript file
 * Handles preloader, mobile navigation, gallery lightbox and contact form validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Preloader: hide once all content has loaded
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      preloader.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        preloader.remove();
      }, 600);
    }
  });

  // Mobile navigation toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('open');
  });
  // Close nav when clicking a link (for mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navToggle.classList.remove('open');
    });
  });

  // Change hamburger to cross when open
  // This part toggles the hamburger animation using CSS classes
  navToggle.addEventListener('click', () => {
    navToggle.querySelector('.hamburger').classList.toggle('is-active');
  });

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxClose = lightbox.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const src = item.getAttribute('href');
      lightboxImg.src = src;
      lightbox.style.display = 'flex';
    });
  });
  // Close lightbox on close button or clicking outside image
  const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  };
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Contact form validation and mailto link
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }
      // rudimentary email format check
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      // Prepare mailto link
      const subject = encodeURIComponent('Website enquiry from ' + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailtoLink = `mailto:info@tharkaroonjhar.com?subject=${subject}&body=${body}`;
      // Open mail client
      window.location.href = mailtoLink;
    });
  }

  // Initialise AOS animations
  AOS.init({
    duration: 800,
    once: true,
  });
});