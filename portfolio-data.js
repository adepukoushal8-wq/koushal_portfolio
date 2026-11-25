/**
 * ADEPU KOUSHAL - CINEMATIC PORTFOLIO DATA CONFIGURATION
 * 
 * Update this file easily to add new films, swap YouTube links, 
 * change images, adjust roles, or edit social links.
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "ADEPU KOUSHAL",
    title: "FILMMAKER",
    roles: ["Director", "Cinematographer", "DOP", "Video Editor"],
    tagline: "Director • Cinematographer • DOP • Video Editor",
    heroSubtitle: "CRAFTING CINEMATIC NARRATIVES THROUGH LIGHT, SHADOW & EMOTION",
    studios: [
      { 
        name: "SREE MEDIA", 
        role: "Co-Founder",
        url: "https://www.instagram.com/sreemediaofficial?gwpx=Y3drNjFjMnEyZm56"
      },
      { 
        name: "MILLISTUDIOS", 
        role: "Managing Director",
        url: "https://www.instagram.com/millistudiosofficial?avpt=MTEzMDFwZzAyZG9heQ=="
      }
    ],
    bioText: "I’m Adepu Koushal, an independent filmmaker, director, and cinematographer passionate about visual storytelling. As Co-Founder of <a href=\"https://www.instagram.com/sreemediaofficial?gwpx=Y3drNjFjMnEyZm56\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"bio-studio-link\">SREE MEDIA</a> and Managing Director of <a href=\"https://www.instagram.com/millistudiosofficial?avpt=MTEzMDFwZzAyZG9heQ==\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"bio-studio-link\">MILLISTUDIOS</a>, I bring stories to life through creative direction, cinematic visuals, and impactful storytelling—from concept to final edit.",
    bio: [
      "I’m Adepu Koushal, an independent filmmaker, director, and cinematographer passionate about visual storytelling. As Co-Founder of <a href=\"https://www.instagram.com/sreemediaofficial?gwpx=Y3drNjFjMnEyZm56\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"bio-studio-link\">SREE MEDIA</a> and Managing Director of <a href=\"https://www.instagram.com/millistudiosofficial?avpt=MTEzMDFwZzAyZG9heQ==\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"bio-studio-link\">MILLISTUDIOS</a>, I bring stories to life through creative direction, cinematic visuals, and impactful storytelling—from concept to final edit."
    ],
    stats: [
      { value: "04", label: "Selected Works", detail: "Short film & cover song features" },
      { value: "25+", label: "Commercials & Promos", detail: "Editorial & brand campaigns" },
      { value: "500K+", label: "Digital Views", detail: "Across streaming platforms" },
      { value: "02", label: "Studio Foundations", detail: "SREE MEDIA • MILLISTUDIOS" }
    ],
    personalPhoto: "assets/images/adepu_koushal_portrait.jpg",
    heroBackground: "assets/images/hero_cinematographer.jpg",
    directorPhotoFallback: "assets/images/sample.jpg",
    email: "adepukoushal.films@gmail.com",
    instagram: "https://www.instagram.com/adepu_koushal/",
    instagramDisplay: "@adepu_koushal",
    youtube: "https://www.youtube.com/@millistudios",
    whatsapp: "+919876543210",
    location: "Hyderabad / Bangalore, India"
  },

  // 1. FEATURED PROJECTS (4 Projects - Strictly 16:9 Ratio, Medium Size, 2 Per Row)
  projects: [
    {
      id: "idi-prema",
      title: "Idi Prema Cover Song Deewana | Meghana | Harsha | Adepu Koushal | Singer Karthik |",
      category: "COVER SONG",
      type: "COVER SONG",
      roles: "STORY - DIRECTION - DOP - EDITING",
      year: "2024",
      duration: "04:30",
      aspectRatio: "16:9 Widescreen",
      telemetry: "16:9 DCI 4K • Direction & Edit",
      youtubeUrl: "https://youtu.be/2FdsSqyAgUc?si=IBJbTEFHfBDTypqZ",
      youtubeId: "2FdsSqyAgUc",
      poster: "assets/images/thumb_idi_prema.jpg",
      backdrop: "https://img.youtube.com/vi/2FdsSqyAgUc/maxresdefault.jpg",
      description: "Cover song feature exploring youthful romance and evocative visual chemistry through cinematic framing and rhythmic editing.",
      awards: "Directed by Adepu Koushal",
      featured: true
    },
    {
      id: "oo-katha",
      title: "Oo Katha Telugu Short Film | Aravind | Hari Chandana | Subhani Basha | MilliStudiosofficial #ookatha",
      category: "SHORT FILM",
      type: "SHORT FILM",
      roles: "AST- DIRECTION  AST-DOP",
      year: "2024",
      duration: "18:45",
      aspectRatio: "16:9 Widescreen",
      telemetry: "16:9 4K RAW • Anamorphic Pacing",
      youtubeUrl: "https://youtu.be/OeNyvRceGE0?si=AyDnyHAtjHs_SpdV",
      youtubeId: "OeNyvRceGE0",
      poster: "assets/images/thumb_oo_katha.jpg",
      backdrop: "https://img.youtube.com/vi/OeNyvRceGE0/maxresdefault.jpg",
      description: "A deeply poignant independent narrative short exploring unspoken emotions and destiny through atmospheric cinematic compositions.",
      awards: "Milli Studios Official Selection",
      featured: true
    },
    {
      id: "nee-gunde-lona",
      title: "Nee Gunde Lona Cover Song Dude | Surya | Prasanna | Harshitha | Subhani Basha |",
      category: "COVER SONG",
      type: "COVER SONG",
      roles: "AST- DIRECTION",
      year: "2023",
      duration: "04:15",
      aspectRatio: "16:9 Widescreen",
      telemetry: "16:9 Rec.709 • Color Finishing",
      youtubeUrl: "https://youtu.be/hmQ3L4D7Kc8?si=04ZRxxZ6qf_h4RTu",
      youtubeId: "hmQ3L4D7Kc8",
      poster: "assets/images/thumb_nee_gunde_lona.jpg",
      backdrop: "https://img.youtube.com/vi/hmQ3L4D7Kc8/maxresdefault.jpg",
      description: "Romantic melody driven by intimate close-up cinematography, rich shadows, and warm evening hues.",
      awards: "Cover Song Release",
      featured: true
    },
    {
      id: "sagipoo",
      title: "Sagipoo Music Video | Milli Studios | Surya & Lahari | Dany & Harshita | Subhani Basha |",
      category: "COVER SONG",
      type: "COVER SONG",
      roles: "AST- DIRECTION AST-DOP",
      year: "2023",
      duration: "04:48",
      aspectRatio: "16:9 Widescreen",
      telemetry: "16:9 Drone Aerials & Landscapes",
      youtubeUrl: "https://youtu.be/Rkmh4RY1bzI?si=Jwp0L-9J9QcTH8Lt",
      youtubeId: "Rkmh4RY1bzI",
      poster: "assets/images/thumb_sagipoo.jpg",
      backdrop: "https://img.youtube.com/vi/Rkmh4RY1bzI/maxresdefault.jpg",
      description: "An inspiring musical feature portraying resilience and emotional triumph, framed across sweeping natural vistas.",
      awards: "Milli Studios Spotlight",
      featured: true
    }
  ],

  // 2. TRAILERS & FILMS (Category filterable)
  trailers: [
    {
      id: "trailer-oo-katha",
      title: "Oo Katha — Official Trailer",
      tag: "Short Film Trailer",
      filterGroup: "short-film",
      type: "Official Trailer",
      roles: "Director • Cinematographer",
      youtubeUrl: "https://youtu.be/RWkJC1EN6g4?si=LhEqH8jRyleEVlAn",
      youtubeId: "RWkJC1EN6g4",
      thumbnail: "https://img.youtube.com/vi/RWkJC1EN6g4/maxresdefault.jpg",
      duration: "01:42",
      releaseDate: "2024"
    },
    {
      id: "trailer-parichayamila",
      title: "Parichayamila — Cover Glimpse",
      tag: "Cover Song Trailer",
      filterGroup: "cover-song",
      type: "Film Glimpse",
      roles: "Director • DOP • Editor",
      youtubeUrl: "https://youtu.be/3F-ZFro966M?si=8uigAwwYkdZf4HUd",
      youtubeId: "3F-ZFro966M",
      thumbnail: "https://img.youtube.com/vi/3F-ZFro966M/maxresdefault.jpg",
      duration: "00:58",
      releaseDate: "2024"
    },
    {
      id: "promo-nee-gunde-lona",
      title: "Nee Gunde Lona — Official Promo",
      tag: "Promotional Video",
      filterGroup: "promo",
      type: "Promo Reel",
      roles: "DOP • Editing",
      youtubeUrl: "https://youtu.be/5nXRoCT5e0Q?si=rASDemCagAkZB62r",
      youtubeId: "5nXRoCT5e0Q",
      thumbnail: "assets/images/yt_5nXRoCT5e0Q.jpg",
      duration: "01:15",
      releaseDate: "2023"
    },
    {
      id: "teaser-sagipoo",
      title: "Sagipoo — Official Teaser",
      tag: "Film Teaser",
      filterGroup: "teaser",
      type: "Official Teaser",
      roles: "Director • Editor",
      youtubeUrl: "https://youtu.be/AQ6JQoxvSNE?si=HsD0mGyzMY8ZtM4h",
      youtubeId: "AQ6JQoxvSNE",
      thumbnail: "https://img.youtube.com/vi/AQ6JQoxvSNE/maxresdefault.jpg",
      duration: "00:46",
      releaseDate: "2023"
    },
    {
      id: "trailer-oriya-pilla",
      title: "Oriya Pilla — Extended Preview",
      tag: "Cover Song Trailer",
      filterGroup: "cover-song",
      type: "Official Trailer",
      roles: "Director • Cinematographer",
      youtubeUrl: "https://youtu.be/I_1eKRxFIN0?si=Hq5D7hdqs3-HYxIm",
      youtubeId: "I_1eKRxFIN0",
      thumbnail: "assets/images/yt_I_1eKRxFIN0.jpg",
      duration: "01:28",
      releaseDate: "2024"
    }
  ],

  // 3. CINEMATOGRAPHY & PHOTOGRAPHY (Editorial Masonry Stills)
  cinematography: [
    {
      id: "cine-1",
      title: "Golden Hour Anamorphic Still",
      category: "Cinematic Frames",
      camera: "ARRI Alexa Mini LF",
      lens: "Cooke Anamorphic /i 40mm T2.3",
      telemetry: "1/48s • ISO 800 • T2.8 • 2.39:1",
      image: "assets/images/IMG_1017.PNG",
      notes: "Natural sunset backlight wrapped with diffusion frame on set."
    },
    {
      id: "cine-2",
      title: "Low-Key Intimate Interior",
      category: "Lighting Study",
      camera: "Sony FX3 Cine Line",
      lens: "Sony G-Master 35mm F1.4",
      telemetry: "1/50s • ISO 640 • F1.8 • Rec.709",
      image: "assets/images/IMG_1018.PNG",
      notes: "Single negative fill shaping high-contrast drama on the protagonist."
    },
    {
      id: "cine-3",
      title: "Directorial Framing & Composition",
      category: "Behind The Scenes",
      camera: "Production Still",
      lens: "50mm Prime",
      telemetry: "On Location • Milli Studios Production",
      image: "assets/images/IMG_1019.PNG",
      notes: "Blocking actors through architectural corridors for natural depth."
    },
    {
      id: "cine-4",
      title: "Dramatic Portrait in Monochrome Shadow",
      category: "Photography",
      camera: "Fujifilm X-T4 Cine",
      lens: "XF 56mm F1.2 R WR",
      telemetry: "1/125s • ISO 320 • F1.4 • Kodak Tri-X Tone",
      image: "assets/images/IMG_1020.PNG",
      notes: "Exploration of hard rim lights and rich shadows."
    },
    {
      id: "cine-5",
      title: "Rural Landscape Atmosphere",
      category: "Cinematic Frames",
      camera: "Sony Cinema Line",
      lens: "Zeiss Batis 25mm F2.0",
      telemetry: "1/48s • ISO 400 • F4.0 • 2.39:1",
      image: "assets/images/IMG_1011.PNG",
      notes: "Establishing frame for 'Sagipoo' independent journey."
    },
    {
      id: "cine-6",
      title: "Set Lighting & Monitor Rig",
      category: "Camera Work",
      camera: "Production Rig",
      lens: "SmallHD Cine 7 Wireless Monitor",
      telemetry: "Wireless Video Transmission • Wireless Follow Focus",
      image: "assets/images/IMG_1012.PNG",
      notes: "Live color LUT preview during night exterior shoot."
    },
    {
      id: "cine-7",
      title: "Visual Symphony in Motion",
      category: "Creative Visuals",
      camera: "Gimbal 3-Axis Stabilizer",
      lens: "24-70mm Cinema Zoom",
      telemetry: "60 FPS Slow Motion • DCI 4K",
      image: "assets/images/IMG_1013.PNG",
      notes: "Capturing fluid kinetic motion during high energy dance beats."
    },
    {
      id: "cine-8",
      title: "Editorial Cutting Room Color Balance",
      category: "Behind The Scenes",
      camera: "Post-Production Suite",
      lens: "Dual Color-Accurate Reference Monitors",
      telemetry: "DaVinci Resolve Mini Panel • ACES Pipeline",
      image: "assets/images/IMG_1014.PNG",
      notes: "Color balancing skin tones against cool nocturnal ambience."
    },
    {
      id: "cine-9",
      title: "Atmospheric Smoke & Haze Study",
      category: "Lighting Study",
      camera: "Cine Cam",
      lens: "85mm Cine Prime",
      telemetry: "1/50s • ISO 800 • T2.0",
      image: "assets/images/IMG_1016.PNG",
      notes: "Using atmospheric oil-based hazers to materialize light shafts."
    }
  ],

  // 4. REELS & EDITS (7 Selected Instagram Reels with User's 16:9 Custom Stills)
  reels: [
    {
      id: "reel-1",
      thumbnail: "assets/images/reel_custom_1.jpg",
      instagramUrl: "https://www.instagram.com/reel/DcaxyFSJ9o3/?cnvx=MXBpc3J5OTV5ZWdhZg=="
    },
    {
      id: "reel-2",
      thumbnail: "assets/images/reel_custom_2.jpg",
      instagramUrl: "https://www.instagram.com/reel/Df6Ca_cRXGN/?knvt=NzNjejl0cXJyNWV3"
    },
    {
      id: "reel-3",
      thumbnail: "assets/images/reel_custom_3.jpg",
      instagramUrl: "https://www.instagram.com/reel/DegojalI-zA/?bqrl=OHRoM2M1ZjVxbXls"
    },
    {
      id: "reel-4",
      thumbnail: "assets/images/reel_custom_4.jpg",
      instagramUrl: "https://www.instagram.com/reel/DcTkieNJ4cc/?dmpr=MjAzcGxiMnA1MHAz"
    },
    {
      id: "reel-5",
      thumbnail: "assets/images/reel_custom_5.jpg",
      instagramUrl: "https://www.instagram.com/reel/Def8bKtxAk7/?dmpr=dWI5cjludnp6Z2V3"
    },
    {
      id: "reel-6",
      thumbnail: "assets/images/reel_custom_6.jpg",
      instagramUrl: "https://www.instagram.com/reel/Den9zCMvPGx/?gwpx=MXUxejkyOWpramxscw=="
    },
    {
      id: "reel-7",
      thumbnail: "assets/images/reel_custom_7.jpg",
      instagramUrl: "https://www.instagram.com/reel/DcYkL_zpTBx/?knvt=MWM4dGRnanAyenh6OA=="
    }
  ],

  // 5. CREATIVE SKILLS & SOFTWARE TOOLS
  skills: [
    {
      name: "Direction",
      category: "Filmmaking",
      proficiency: "96%",
      desc: "Script visualization, actor coaching, shot listing, rhythmic pacing, and thematic cohesion."
    },
    {
      name: "Cinematography & DOP",
      category: "Visuals",
      proficiency: "94%",
      desc: "Lighting architecture, anamorphic lenses, optical filters, framing symmetry, and camera movement."
    },
    {
      name: "Video Editing",
      category: "Post-Production",
      proficiency: "98%",
      desc: "Narrative assembly, rhythmic cutting, match cuts, montage acceleration, and invisible transitions."
    },
    {
      name: "Storytelling",
      category: "Creative",
      proficiency: "92%",
      desc: "Character arcs, emotional beats, metaphorical subtext, and screenplay structure."
    },
    {
      name: "Color Grading",
      category: "Color & Finish",
      proficiency: "90%",
      desc: "LUT creation, ACES color management, skin tone preservation, and cinematic contrast curves."
    },
    {
      name: "Creative Development",
      category: "Pre-Production",
      proficiency: "95%",
      desc: "Concept treatments, moodboards, pitch decks, storyboard illustrations, and location scouting."
    },
    {
      name: "Still Photography",
      category: "Optics",
      proficiency: "88%",
      desc: "Editorial portraiture, unit production stills, framing studies, and natural light manipulation."
    }
  ],

  software: [
    {
      name: "Adobe Premiere Pro",
      role: "Primary NLE Suite",
      badge: "Industry Standard",
      level: "Master",
      icon: "Pr"
    },
    {
      name: "Adobe After Effects",
      role: "Motion Graphics & VFX",
      badge: "Compositing",
      level: "Advanced",
      icon: "Ae"
    },
    {
      name: "Adobe Photoshop",
      role: "Posters & Key Art",
      badge: "Design",
      level: "Master",
      icon: "Ps"
    },
    {
      name: "CapCut Pro",
      role: "Vertical Fast Edits & Reels",
      badge: "Social Cinema",
      level: "Master",
      icon: "Cc"
    },
    {
      name: "DaVinci Resolve",
      role: "Color Science & Grading",
      badge: "Color Finishing",
      level: "Advanced",
      icon: "Dr"
    }
  ],

  // 6. END CREDITS / COLLABORATORS
  credits: {
    director: "ADEPU KOUSHAL",
    studios: "MILLISTUDIOS • SREE MEDIA",
    cameraDept: "Sony Cinema Line • ARRI Alexa • Zeiss & Cooke Primes",
    postProduction: "Offline Cut & Color Finishing by Adepu Koushal",
    soundtracks: "Original Musical Collaborators",
    specialThanks: "All Cast, Crew, Visionaries & Creative Partners"
  }
};
