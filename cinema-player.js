/**
 * ADEPU KOUSHAL - CINEMA VIDEO MODAL & LIGHTBOX CONTROLLER
 */
(function() {
  // Modal Elements
  const modal = document.getElementById('cinemaModal');
  const frameContainer = document.getElementById('cinemaVideoFrame');
  const titleEl = document.getElementById('modalFilmTitle');
  const roleEl = document.getElementById('modalRoleInfo');
  const telemetryEl = document.getElementById('modalTelemetry');
  const closeBtn = document.getElementById('modalCloseBtn');

  // Photo Lightbox Elements
  const photoModal = document.getElementById('photoLightbox');
  const photoImg = document.getElementById('lightboxPhotoImg');
  const photoTitle = document.getElementById('lightboxExifTitle');
  const photoCamera = document.getElementById('lightboxExifCamera');
  const photoLens = document.getElementById('lightboxExifLens');
  const photoTelemetry = document.getElementById('lightboxExifTelemetry');
  const photoNotes = document.getElementById('lightboxExifNotes');
  const photoCloseBtn = document.getElementById('lightboxCloseBtn');

  // Helper to extract or convert YouTube Embed URL
  function getYouTubeEmbedUrl(url, id) {
    let videoId = id;
    if (!videoId && url) {
      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
      } else if (url.includes('watch?v=')) {
        videoId = url.split('watch?v=')[1].split('&')[0];
      }
    }
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&iv_load_policy=3`;
    }
    return url;
  }

  // Open Video Modal
  window.openCinemaModal = function({ title, url, id, roles, telemetry, isDirectVideo }) {
    if (!modal) return;

    titleEl.textContent = title || "FEATURE PRESENTATION";
    roleEl.textContent = roles ? `ROLE: ${roles}` : "";
    telemetryEl.textContent = telemetry || "DCI 4K • 2.39:1 CINEMASCOPE";

    frameContainer.innerHTML = '';

    if (isDirectVideo || (url && url.endsWith('.mp4'))) {
      const video = document.createElement('video');
      video.src = url;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.objectFit = 'contain';
      frameContainer.appendChild(video);
    } else {
      const embedUrl = getYouTubeEmbedUrl(url, id);
      const iframe = document.createElement('iframe');
      iframe.src = embedUrl;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      frameContainer.appendChild(iframe);
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close Video Modal
  window.closeCinemaModal = function() {
    if (!modal) return;
    modal.classList.remove('active');
    frameContainer.innerHTML = '';
    document.body.style.overflow = '';
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeCinemaModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) window.closeCinemaModal();
    });
  }

  // Open Photo Lightbox
  window.openPhotoLightbox = function(item) {
    if (!photoModal) return;
    photoImg.src = item.image;
    photoTitle.textContent = item.title || "Cinematic Frame";
    photoCamera.textContent = item.camera || "ARRI Alexa Mini";
    photoLens.textContent = item.lens || "35mm Cine Prime";
    photoTelemetry.textContent = item.telemetry || "2.39:1 • Rec.709";
    photoNotes.textContent = item.notes || "Captured on location.";

    photoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closePhotoLightbox = function() {
    if (!photoModal) return;
    photoModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (photoCloseBtn) {
    photoCloseBtn.addEventListener('click', window.closePhotoLightbox);
  }

  if (photoModal) {
    photoModal.addEventListener('click', (e) => {
      if (e.target === photoModal) window.closePhotoLightbox();
    });
  }

  // Keyboard Navigation: Escape key closes active modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeCinemaModal();
      window.closePhotoLightbox();
      if (window.closeMobileCurtain) window.closeMobileCurtain();
    }
  });
})();
