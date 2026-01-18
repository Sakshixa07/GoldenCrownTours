// Navbar active link
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Button action demo
document.querySelector('.primary').addEventListener('click', () => {
  alert("Trip planning coming soon!");
});
// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox) lightbox.style.display = 'none';
});
// Stats counter
const stats = document.querySelectorAll('.stat h3');
let statsStarted = false;

function startStats() {
  stats.forEach(stat => {
    let target = +stat.textContent.replace(/\D/g,''); // remove symbols like K/+
    let suffix = stat.textContent.replace(/\d/g,''); // save symbols
    let count = 0;
    let step = Math.ceil(target / 200); // speed of counter
    const interval = setInterval(() => {
      count += step;
      if(count >= target) {
        stat.textContent = target + suffix;
        clearInterval(interval);
      } else {
        stat.textContent = count + suffix;
      }
    }, 15);
  });
}

// Trigger when experience section is in view
window.addEventListener('scroll', () => {
  const experienceSection = document.querySelector('.experience');
  const rect = experienceSection.getBoundingClientRect();
  if(!statsStarted && rect.top < window.innerHeight) {
    startStats();
    statsStarted = true;
  }
});
// Back to top
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if(window.scrollY > 400) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
