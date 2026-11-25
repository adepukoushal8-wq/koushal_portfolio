/**
 * ADEPU KOUSHAL — MAIN APPLICATION CONTROLLER
 * Reads from PORTFOLIO_DATA and populates cinematic components.
 */
document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('PORTFOLIO_DATA not found.');
    return;
  }

  // 1. Populate Profile & About Info
  function renderAbout() {
    const profile = data.profile;
    
    // Personal photo
    const photoEl = document.getElementById('aboutDirectorPhoto');
    if (photoEl) {
      photoEl.src = profile.personalPhoto;
      photoEl.onerror = () => { photoEl.src = profile.directorPhotoFallback; };
    }

    // Bio paragraphs
    const bioContainer = document.getElementById('aboutBioContainer');
    if (bioContainer) {
      bioContainer.innerHTML = profile.bio.map(p => `<p class="about-bio-text">${p}</p>`).join('');
    }

    // Studio badges with direct Instagram links
    const studiosContainer = document.getElementById('aboutStudiosContainer');
    if (studiosContainer) {
      studiosContainer.innerHTML = profile.studios.map(s => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="studio-card" style="text-decoration:none;" data-cursor="INSTAGRAM">
          <div class="studio-name" style="display:flex; align-items:center; justify-content:space-between;">
            <span>${s.name}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
          <div class="studio-role">${s.role}</div>
        </a>
      `).join('');
    }

    // Stats
    const statsContainer = document.getElementById('aboutStatsContainer');
    if (statsContainer) {
      statsContainer.innerHTML = profile.stats.map(st => `
        <div class="stat-item">
          <div class="stat-num">${st.value}</div>
          <div class="stat-label">${st.label}</div>
        </div>
      `).join('');
    }
  }

  // 2. Render Large Projects Showcase (3 per row, clean thumbnails without watermarks)
  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = data.projects.map((p) => {
      return `
        <div class="project-card" data-project-id="${p.id}" data-cursor="WATCH FILM">
          <div class="project-poster-wrap">
            <img src="${p.poster}" alt="${p.title}" class="project-poster" onerror="this.src='${p.backdrop}'" loading="lazy">
            <div class="project-overlay">
              <div class="project-top-meta">
                <span class="project-pill">${p.category}</span>
              </div>
              <div class="project-play-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="project-info">
            <h3 class="project-title">${p.title}</h3>
            <div class="project-role-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              <span>${p.roles}</span>
            </div>
            <p class="project-desc">${p.description}</p>
            <div class="project-footer">
              <button class="btn-watch" onclick="openProjectModal('${p.id}')">
                <span>Watch Project</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Helper to open project in cinema modal
  window.openProjectModal = function(projectId) {
    const p = data.projects.find(item => item.id === projectId);
    if (!p) return;
    window.openCinemaModal({
      title: p.title,
      url: p.youtubeUrl,
      id: p.youtubeId,
      roles: p.roles,
      telemetry: `${p.aspectRatio} • ${p.telemetry}`
    });
  };

  // 3. Render Trailers & Films
  let currentTrailerFilter = 'all';

  function renderTrailers() {
    const grid = document.getElementById('trailersGrid');
    if (!grid) return;

    const filtered = currentTrailerFilter === 'all' 
      ? data.trailers 
      : data.trailers.filter(t => t.filterGroup === currentTrailerFilter);

    grid.innerHTML = filtered.map(t => `
      <div class="trailer-card" onclick="openTrailerModal('${t.id}')" data-cursor="PLAY">
        <div class="trailer-thumb-wrap">
          <img src="${t.thumbnail}" alt="${t.title}" class="trailer-thumb" loading="lazy">
          <div class="trailer-play-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div class="trailer-info">
          <div class="trailer-tag">${t.tag}</div>
          <h4 class="trailer-title">${t.title}</h4>
          <div class="trailer-meta-line">
            <span>${t.roles}</span>
            <span>${t.duration}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  window.openTrailerModal = function(trailerId) {
    const t = data.trailers.find(item => item.id === trailerId);
    if (!t) return;
    window.openCinemaModal({
      title: t.title,
      url: t.youtubeUrl,
      id: t.youtubeId,
      roles: t.roles,
      telemetry: `${t.tag} • ${t.releaseDate}`
    });
  };

  function initTrailerFilters() {
    const filterBtns = document.querySelectorAll('.trailers-filter-bar .filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTrailerFilter = btn.dataset.filter;
        renderTrailers();
        if (window.updateCursorBindings) window.updateCursorBindings();
      });
    });
  }

  // 4. Render Cinematography Masonry
  function renderCinematography() {
    const grid = document.getElementById('cinematographyGrid');
    if (!grid) return;

    grid.innerHTML = data.cinematography.map((c, i) => `
      <div class="masonry-item" onclick="openCinePhoto('${c.id}')" data-cursor="EXIF">
        <img src="${c.image}" alt="${c.title}" class="masonry-img" loading="lazy">
        <div class="masonry-caption">
          <div class="masonry-category">${c.category}</div>
          <div class="masonry-title">${c.title}</div>
          <div class="masonry-telemetry">${c.camera} • ${c.lens}</div>
        </div>
      </div>
    `).join('');
  }

  window.openCinePhoto = function(photoId) {
    const item = data.cinematography.find(c => c.id === photoId);
    if (!item) return;
    window.openPhotoLightbox(item);
  };

  // 5. Render Reels (16:9 Widescreen, 4 Per Row, Clean without Titles)
  function renderReels() {
    const container = document.getElementById('reelsContainer');
    if (!container) return;

    container.innerHTML = data.reels.map(r => `
      <div class="reel-card-widescreen" data-cursor="INSTAGRAM" onclick="window.open('${r.instagramUrl}', '_blank')" title="Watch Reel on Instagram">
        <div class="reel-thumb-box">
          <img src="${r.thumbnail}" alt="Instagram Reel" class="reel-media-16-9" loading="lazy">
          <div class="reel-play-overlay">
            <div class="reel-play-icon-glow">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span class="reel-watch-tag">Watch on Instagram</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  window.playReelVideo = function(videoUrl, title) {
    window.openCinemaModal({
      title: title || "Reel & Creative Edit",
      url: videoUrl,
      isDirectVideo: true,
      roles: "Vertical Cinema & Social Edit",
      telemetry: "9:16 Vertical • 60 FPS"
    });
  };

  // 6. Render Skills & Software
  function renderSkills() {
    const skillsContainer = document.getElementById('skillsMeterContainer');
    if (skillsContainer) {
      skillsContainer.innerHTML = data.skills.map(sk => `
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">${sk.name}</span>
            <span class="skill-percent">${sk.proficiency}</span>
          </div>
          <div class="skill-meter-bg">
            <div class="skill-meter-fill" data-width="${sk.proficiency}"></div>
          </div>
          <div class="skill-desc">${sk.desc}</div>
        </div>
      `).join('');
    }

    const softwareGrid = document.getElementById('softwareGrid');
    if (softwareGrid) {
      softwareGrid.innerHTML = data.software.map(sw => `
        <div class="software-card">
          <div class="software-badge-row">
            <div class="software-icon-box">${sw.icon}</div>
            <span class="software-badge">${sw.badge}</span>
          </div>
          <div>
            <h4 class="software-name">${sw.name}</h4>
            <div class="software-role">${sw.role}</div>
          </div>
        </div>
      `).join('');
    }
  }

  // 7. Render Rolling Film Credits
  function renderCredits() {
    const creditsBox = document.getElementById('endCreditsReel');
    if (!creditsBox) return;

    const c = data.credits;
    creditsBox.innerHTML = `
      <div class="credit-row">
        <div class="credit-job">Director & Cinematographer</div>
        <div class="credit-talent">${c.director}</div>
      </div>
      <div class="credit-row">
        <div class="credit-job">Studio Partnerships</div>
        <div class="credit-talent">${c.studios}</div>
      </div>
      <div class="credit-row">
        <div class="credit-job">Camera Systems & Glass</div>
        <div class="credit-talent">${c.cameraDept}</div>
      </div>
      <div class="credit-row">
        <div class="credit-job">Editorial & Color Science</div>
        <div class="credit-talent">${c.postProduction}</div>
      </div>
      <div class="credit-row">
        <div class="credit-job">Original Score & Music</div>
        <div class="credit-talent">${c.soundtracks}</div>
      </div>
      <div class="credit-row">
        <div class="credit-job">Special Acknowledgements</div>
        <div class="credit-talent">${c.specialThanks}</div>
      </div>
    `;
  }

  // Initialize all active sections
  renderAbout();
  renderProjects();
  renderTrailers();
  initTrailerFilters();
  renderReels();
  renderSkills();
  renderCredits();

  // Trigger scroll reveals and cursor bindings
  if (window.initScrollReveals) window.initScrollReveals();
  if (window.updateCursorBindings) window.updateCursorBindings();
});
