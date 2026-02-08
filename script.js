document.addEventListener('DOMContentLoaded', () => {
  const dailyNote = document.getElementById('daily-note');
  const envelope = document.getElementById('v-envelope');
  const letterText = document.getElementById('v-text');
  const paper = document.getElementById('v-paper');
  const yesBtns = Array.from(document.querySelectorAll('.v-yes'));
  const actions = document.getElementById('v-actions');
  const popup = document.getElementById('v-popup');
  const popupClose = document.getElementById('v-popup-close');
  const fireworkDurationMs = 900;

  const notes = [
    'Ты - мой самый тёплый дом.',
    'Люблю твой смех и твою нежность.',
    'Ты - мой уют и моя радость.',
    'Я люблю в тебе всё, даже тишину.',
    'Ты - моя нежность и моя сила.',
  ];

  if (dailyNote) {
    dailyNote.textContent = notes[Math.floor(Math.random() * notes.length)];
  }


  const letterMessage = letterText?.dataset.message || 'Катюш, ты будешь моей валентинкой?';
  const writingDurationMs = 3600;

  function writeLetter() {
    if (!letterText) return;
    letterText.textContent = letterMessage;
    letterText.classList.remove('writing');
    void letterText.offsetWidth;
    letterText.classList.add('writing');
    if (actions) actions.classList.remove('show');
    if (actions) {
      setTimeout(() => actions.classList.add('show'), writingDurationMs);
    }
  }

  if (envelope) {
    envelope.addEventListener('click', () => {
      envelope.classList.toggle('open');
      if (envelope.classList.contains('open')) {
        writeLetter();
      } else if (letterText) {
        letterText.textContent = '';
        letterText.classList.remove('writing');
        if (actions) actions.classList.remove('show');
      }
    });
  }

  yesBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      smallFirework();
      if (popup) {
        setTimeout(() => {
          popup.classList.add('show');
          popup.setAttribute('aria-hidden', 'false');
        }, fireworkDurationMs);
      }
    });
  });

  if (letterText) {
    letterText.addEventListener('animationend', (event) => {
      if (event.animationName === 'handwrite' && actions) {
        actions.classList.add('show');
      }
    });
  }

  if (popupClose && popup) {
    popupClose.addEventListener('click', () => {
      popup.classList.remove('show');
      popup.setAttribute('aria-hidden', 'true');
    });
  }

  if (actions) {
    actions.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }

  function smallFirework() {
    const bursts = 6;
    for (let b = 0; b < bursts; b += 1) {
      const firework = document.createElement('div');
      firework.className = 'v-firework';
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      firework.style.left = `${x}%`;
      firework.style.top = `${y}%`;
      document.body.appendChild(firework);
      const angles = Array.from({ length: 18 }, (_, i) => i * 20);
      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.45;
      angles.forEach((deg) => {
        const dot = document.createElement('span');
        dot.className = 'v-firework-dot';
        const rad = (deg * Math.PI) / 180;
        dot.style.setProperty('--dx', `${Math.cos(rad) * radius}px`);
        dot.style.setProperty('--dy', `${Math.sin(rad) * radius}px`);
        firework.appendChild(dot);
      });
      setTimeout(() => firework.remove(), 1800);
    }
  }

  // Memories reel (TikTok-like)
  const reel = document.getElementById('reel');
  const reelTrack = document.getElementById('reel-track');
  const openReel = document.getElementById('open-reel');
  const closeReel = document.getElementById('close-reel');
  const reelHint = document.getElementById('reel-hint');
  const reelProgress = document.getElementById('reel-progress-bar');

  const memories = [
    { type: "image", src: "photos/IMG_8312.jpg", caption: "" },
    { type: "image", src: "photos/IMG_2367.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0821.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1445.jpg", caption: "" },
    { type: "image", src: "photos/IMG_5621.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0759.jpg", caption: "" },
    { type: "image", src: "photos/IMG_2370.jpg", caption: "" },
    { type: "image", src: "photos/IMG_2577.JPG", caption: "" },
    { type: "image", src: "photos/FullSizeRender_8.jpg", caption: "" },
    { type: "image", src: "photos/IMG_6264.JPG", caption: "" },
    { type: "image", src: "photos/IMG_0775.JPG", caption: "" },
    { type: "image", src: "photos/IMG_1333.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1124.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0776.JPG", caption: "" },
    { type: "image", src: "photos/IMG_8211.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0102.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0841.JPG", caption: "" },
    { type: "image", src: "photos/IMG_0129.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1425.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0104.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1795.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0270.JPG", caption: "" },
    { type: "image", src: "photos/IMG_7480.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0112.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0113.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0661.JPG", caption: "" },
    { type: "image", src: "photos/IMG_0107.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1437.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0098.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1360.JPG", caption: "" },
    { type: "image", src: "photos/IMG_2325.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0644.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1968.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0653.JPG", caption: "" },
    { type: "image", src: "photos/IMG_2050.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0646.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0849.JPG", caption: "" },
    { type: "image", src: "photos/IMG_2253.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1010.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0130.jpg", caption: "" },
    { type: "image", src: "photos/IMG_7104.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0858.JPG", caption: "" },
    { type: "image", src: "photos/IMG_5263.jpg", caption: "" },
    { type: "image", src: "photos/FullSizeRender.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1749.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0133.jpg", caption: "" },
    { type: "image", src: "photos/IMG_7107.jpg", caption: "" },
    { type: "image", src: "photos/IMG_2296.jpg", caption: "" },
    { type: "image", src: "photos/IMG_2321.jpg", caption: "" },
    { type: "image", src: "photos/FullSizeRender_7.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0814.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0141.jpg", caption: "" },
    { type: "image", src: "photos/FullSizeRender_6.jpg", caption: "" },
    { type: "image", src: "photos/IMG_2580.JPG", caption: "" },
    { type: "image", src: "photos/FullSizeRender_4.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1062.JPG", caption: "" },
    { type: "image", src: "photos/IMG_0142.jpg", caption: "" },
    { type: "image", src: "photos/IMG_6269.JPG", caption: "" },
    { type: "image", src: "photos/IMG_0143.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0816.jpg", caption: "" },
    { type: "image", src: "photos/FullSizeRender_5.jpg", caption: "" },
    { type: "image", src: "photos/IMG_5417.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1895.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1311.jpg", caption: "" },
    { type: "image", src: "photos/IMG_2156.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0620.jpg", caption: "" },
    { type: "image", src: "photos/IMG_5412.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0858 2.jpg", caption: "" },
    { type: "image", src: "photos/IMG_1312.jpg", caption: "" },
    { type: "image", src: "photos/IMG_2237.jpg", caption: "" },
    { type: "image", src: "photos/FullSizeRender_2.jpg", caption: "" },
    { type: "image", src: "photos/IMG_0839.JPG", caption: "" },
    { type: "image", src: "photos/FullSizeRender_3.jpg", caption: "" },
    { type: "image", src: "photos/IMG_2578.JPG", caption: "" },
  ];

  function renderReel() {
    if (!reelTrack) return;
    reelTrack.innerHTML = '';
    const shuffled = memories.slice().sort(() => Math.random() - 0.5);
    shuffled.forEach((item) => {
      const slide = document.createElement('div');
      slide.className = 'reel-slide';
      const media = document.createElement('div');
      media.className = 'reel-media';

      if (item.type === 'video') {
        const video = document.createElement('video');
        video.src = item.src;
        video.muted = false;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'metadata';
        video.setAttribute('draggable', 'false');
        media.appendChild(video);
        const unmute = document.createElement('div');
        unmute.className = 'reel-unmute';
        unmute.textContent = 'Включить звук';
        media.appendChild(unmute);
      } else {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.caption || '';
        img.setAttribute('draggable', 'false');
        media.appendChild(img);
      }

      if (item.caption) {
        const caption = document.createElement('div');
        caption.className = 'reel-caption';
        caption.textContent = item.caption;
        media.appendChild(caption);
      }

      slide.appendChild(media);
      reelTrack.appendChild(slide);
    });
  }

  function openReelView() {
    if (!reel) return;
    renderReel();
    reel.classList.add('active');
    reel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    reelTrack?.scrollTo({ top: 0, behavior: 'instant' });
    initReelObserver();
    updateReelProgress();
    if (reelHint) {
      reelHint.style.display = 'flex';
      setTimeout(() => {
        if (reelHint) reelHint.style.display = 'none';
      }, 4000);
    }
  }

  function closeReelView() {
    if (!reel) return;
    reel.classList.remove('active');
    reel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stopAllVideos();
  }

  function stopAllVideos() {
    const videos = reelTrack?.querySelectorAll('video') || [];
    videos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  }

  let observer;
  function initReelObserver() {
    if (!reelTrack) return;
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector('video');
          if (!video) return;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { root: reelTrack, threshold: 0.6 },
    );
    const slides = reelTrack.querySelectorAll('.reel-slide');
    slides.forEach((slide) => observer.observe(slide));

    reelTrack.addEventListener('click', (event) => {
      const slide = event.target.closest('.reel-slide');
      const video = slide?.querySelector('video');
      if (!video) return;
      video.muted = false;
      video.play().catch(() => {});
      const badge = slide?.querySelector('.reel-unmute');
      if (badge) badge.style.display = 'none';
    });
  }

  function updateReelProgress() {
    if (!reelTrack || !reelProgress) return;
    const max = reelTrack.scrollHeight - reelTrack.clientHeight;
    const value = max > 0 ? (reelTrack.scrollTop / max) * 100 : 0;
    reelProgress.style.width = `${Math.min(100, Math.max(0, value))}%`;
  }

  reelTrack?.addEventListener('scroll', updateReelProgress);

  const openReelInline = document.getElementById('open-reel-inline');
  if (openReel) openReel.addEventListener('click', openReelView);
  if (openReelInline) openReelInline.addEventListener('click', openReelView);
  if (closeReel) closeReel.addEventListener('click', closeReelView);
});
