/**
 * ADEPU KOUSHAL - CINEMATIC CURSOR CONTROLLER
 */
(function() {
  // Only initialize on desktop devices with fine pointer
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'custom-cursor';

  const follower = document.createElement('div');
  follower.className = 'custom-cursor-follower';
  follower.innerHTML = '<span class="cursor-label">VIEW</span>';

  document.body.appendChild(dot);
  document.body.appendChild(follower);

  const label = follower.querySelector('.cursor-label');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Smooth lerp animation for the follower circle
  function renderCursor() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Dynamic Hover bindings
  window.updateCursorBindings = function() {
    // Play buttons
    document.querySelectorAll('.project-card, .trailer-card, .btn-watch, .reel-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover', 'cursor-play');
        label.textContent = el.dataset.cursor || 'PLAY';
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover', 'cursor-play');
      });
    });

    // Stills & Photography
    document.querySelectorAll('.masonry-item, .about-frame-container').forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
        label.textContent = 'INSPECT';
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
      });
    });

    // Reels carousel
    const reelContainer = document.querySelector('.reels-scroll-container');
    if (reelContainer) {
      reelContainer.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-drag');
        label.textContent = 'SCROLL';
      });
      reelContainer.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-drag');
      });
    }

    // Standard Links and Buttons
    document.querySelectorAll('a, button, .nav-link, .filter-btn').forEach(el => {
      if (el.closest('.project-card') || el.closest('.trailer-card')) return;
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
        label.textContent = el.dataset.cursor || 'SELECT';
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
      });
    });
  };

  document.addEventListener('DOMContentLoaded', window.updateCursorBindings);
})();
