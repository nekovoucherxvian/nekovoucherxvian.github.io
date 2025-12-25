// Loading Screen
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.pointerEvents = 'none';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1500); // Tampilkan loading selama 1.5 detik
});

// Header transparan saat scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Animasi section saat scroll
  const sections = document.querySelectorAll('.section.animate-section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.clientHeight;
    if (sectionTop < window.innerHeight - 100 && sectionTop + sectionHeight > 0) {
      section.classList.add('visible');
    }
  });
});

// Mobile menu toggle (dengan animasi hamburger)
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none';
    menuOverlay.style.display = 'none';
  } else {
    navMenu.style.display = 'flex';
    menuOverlay.style.display = 'block';
  }
});

// Tutup menu saat klik overlay
menuOverlay.addEventListener('click', () => {
  navMenu.style.display = 'none';
  menuOverlay.style.display = 'none';
  mobileMenuBtn.classList.remove('active');
});

// Tutup menu saat klik tombol close
closeMenuBtn.addEventListener('click', () => {
  navMenu.style.display = 'none';
  menuOverlay.style.display = 'none';
  mobileMenuBtn.classList.remove('active');
});

// Juga tutup saat klik link
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.style.display = 'none';
    menuOverlay.style.display = 'none';
    mobileMenuBtn.classList.remove('active');
  });
});
