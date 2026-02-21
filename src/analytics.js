/**
 * analytics.js
 * Global tracking for Button Clicks and Scroll Depth
 */

export const initAnalytics = () => {
  window.dataLayer = window.dataLayer || [];

  // 1. Global Click Listener
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, a');
    if (target) {
      const clickText = target.innerText || target.value || target.getAttribute('aria-label') || 'unnamed_button';
      const clickId = target.id || 'no_id';
      const clickClasses = target.className || 'no_class';

      window.dataLayer.push({
        event: 'button_click',
        button_name: clickText.trim(),
        button_id: clickId,
        button_class: clickClasses,
      });
    }
  });

  // 2. Scroll Depth Tracker
  let scrollMarks = { 25: false, 50: false, 75: false, 90: false };

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    Object.keys(scrollMarks).forEach((mark) => {
      const markNum = parseInt(mark);
      if (scrollPercent >= markNum && !scrollMarks[mark]) {
        scrollMarks[mark] = true;
        console.log(`[Analytics] Scroll depth reached: ${markNum}%`);
        window.dataLayer.push({
          event: 'scroll_depth',
          depth_percent: markNum,
        });
      }
    });
  });
};
