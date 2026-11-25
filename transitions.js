/**
 * ADEPU KOUSHAL - CINEMATIC TRANSITIONS & CAMERA TELEMETRY
 */
(function() {
  // 1. Live Timecode Clock (Simulates Cine Camera Timecode: HH:MM:SS:FF)
  function initTimecode() {
    const tcEl = document.getElementById('liveTimecode');
    if (!tcEl) return;

    let frames = 0;
    const fps = 24;

    setInterval(() => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      const ff = String(frames % fps).padStart(2, '0');
      tcEl.textContent = `TC ${hh}:${mm}:${ss}:${ff}`;
      frames++;
    }, 1000 / fps);
  }

  // 2. Smooth Scroll & Active Nav Highlighting
  function initNavScroll() {
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          targetSection.scrollIntoView({ behavior: 'smooth' });
          if (window.closeMobileCurtain) window.closeMobileCurtain();
        }
      });
    });
  }

  // 3. Scroll Reveal Animations (IntersectionObserver)
  function initScrollReveals() {
    const revealElements = document.querySelectorAll(
      '.project-card, .trailer-card, .masonry-item, .studio-card, .stat-item, .software-card, .skill-item'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          
          // Animate skill meters if it's a skill item
          const meter = entry.target.querySelector('.skill-meter-fill');
          if (meter && meter.dataset.width) {
            meter.style.width = meter.dataset.width;
          }

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });
  }

  // 4. Parallax Effect on Hero Media
  function initHeroParallax() {
    const heroMedia = document.querySelector('.hero-video-container video, .hero-video-container img');
    if (!heroMedia) return;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroMedia.style.transform = `scale(1.05) translateY(${scrollY * 0.35}px)`;
      }
    });
  }

  // 5. Mobile Curtain Navigation
  function initMobileMenu() {
    const curtain = document.getElementById('mobileCurtain');
    const toggleBtn = document.getElementById('mobileToggleBtn');
    const closeBtn = document.getElementById('curtainCloseBtn');

    window.openMobileCurtain = function() {
      if (curtain) curtain.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    window.closeMobileCurtain = function() {
      if (curtain) curtain.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (toggleBtn) toggleBtn.addEventListener('click', window.openMobileCurtain);
    if (closeBtn) closeBtn.addEventListener('click', window.closeMobileCurtain);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTimecode();
    initNavScroll();
    initHeroParallax();
    initMobileMenu();
    // Reveal will be triggered after app.js renders dynamic elements
  });

  window.initScrollReveals = initScrollReveals;
})();
