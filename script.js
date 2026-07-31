// ============ Snore-to-calm waveform animation ============
(function () {
  const path = document.getElementById('wave-path');
  if (!path) return;

  const width = 560;
  const height = 220;
  const midY = 110;
  const points = 80;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function buildPath(t) {
    let d = `M 0 ${midY}`;
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * width;
      const progress = i / points; // 0 = chaotic snore, 1 = calm breath

      // chaotic component fades out as progress increases
      const chaosAmp = 34 * Math.max(0, 1 - progress * 1.3);
      const chaos =
        Math.sin(progress * 40 + t * 3.1) * chaosAmp * 0.6 +
        Math.sin(progress * 71 + t * 5.7) * chaosAmp * 0.4;

      // calm sine grows in as progress increases
      const calmAmp = 18 * Math.min(1, Math.max(0, (progress - 0.35) / 0.65));
      const calm = Math.sin(progress * 14 - t * 2.4) * calmAmp;

      const y = midY + chaos + calm;
      d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
    return d;
  }

  if (reduceMotion) {
    path.setAttribute('d', buildPath(0));
    return;
  }

  let start = null;
  function frame(ts) {
    if (start === null) start = ts;
    const t = (ts - start) / 1000;
    path.setAttribute('d', buildPath(t));
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

// ============ Lead form (front-end only placeholder) ============
(function () {
  const form = document.getElementById('lead-form');
  const status = document.getElementById('cta-status');
  if (!form || !status) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // NOTE: replace this with a real submission (API route, email service, CRM, etc.)
    // before going live. This placeholder only confirms the input client-side.
    status.textContent = '신청이 접수되었습니다. 담당자가 곧 연락드리겠습니다.';
    form.reset();
  });
})();
