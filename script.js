// Initialize AOS
AOS.init({
  duration: 800,
  once: true
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Cart functionality
const cartCount = document.getElementById('cartCount');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');
let count = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
    showNotification('Item added to cart!');
  });
});

// Newsletter form (footer + section)
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('Successfully subscribed to newsletter!');
    form.reset();
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});

// Helper: Notification popup
function showNotification(message) {
  notificationText.textContent = message;
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}
