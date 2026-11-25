/**
 * ADEPU KOUSHAL - CINEMATIC AMBIENT AUDIO ENGINE
 * Generative warm sub-bass analog drone + subtle film reel texture
 * Built with Web Audio API for 100% self-contained, lightweight immersion.
 */
(function() {
  let audioCtx = null;
  let masterGain = null;
  let isPlaying = false;
  let osc1 = null;
  let osc2 = null;
  let filter = null;

  function initAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    // Master Gain
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    // Warm Low-Pass Filter
    filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(160, audioCtx.currentTime);
    filter.Q.setValueAtTime(2.5, audioCtx.currentTime);
    filter.connect(masterGain);

    // Deep Cinematic Root (A1 ~ 55Hz)
    osc1 = audioCtx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(55, audioCtx.currentTime);

    // Subtle Fifth Harmonic (E2 ~ 82.4Hz)
    osc2 = audioCtx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(82.41, audioCtx.currentTime);

    const osc2Gain = audioCtx.createGain();
    osc2Gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
    osc2.connect(osc2Gain);

    osc1.connect(filter);
    osc2Gain.connect(filter);

    osc1.start();
    osc2.start();
  }

  function startAmbiance() {
    if (!audioCtx) initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    // Smooth cinematic swell fade in
    masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
    masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.22, audioCtx.currentTime + 2.0);
    isPlaying = true;
    updateUI(true);
  }

  function stopAmbiance() {
    if (!audioCtx || !masterGain) return;
    // Smooth fade out
    masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
    masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);
    isPlaying = false;
    updateUI(false);
  }

  function updateUI(playing) {
    const btn = document.getElementById('audioToggleBtn');
    const label = document.getElementById('audioStatusLabel');
    if (!btn) return;
    if (playing) {
      btn.classList.add('playing');
      if (label) label.textContent = 'SOUND: ON';
    } else {
      btn.classList.remove('playing');
      if (label) label.textContent = 'SOUND: OFF';
    }
  }

  window.toggleAmbiance = function() {
    if (isPlaying) {
      stopAmbiance();
    } else {
      startAmbiance();
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('audioToggleBtn');
    if (btn) {
      btn.addEventListener('click', window.toggleAmbiance);
    }
  });
})();
