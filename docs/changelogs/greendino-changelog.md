# Green Dino Changelog

Stay up to date with the latest updates and improvements to our Green Dino Discord Bot.

## Version 1.8.8

<div class="release-card">
  <div class="release-header" style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 1rem; background: linear-gradient(90deg, #7ecfff 0%, #4f8cff 100%); color: #fff; border-radius: 8px 8px 0 0;">
    <span class="release-version" style="font-weight: bold; font-size: 1.2rem;">1.8.8 | Stable</span>
    <span class="release-date" style="font-size: 1rem;">@ May 23, 2025</span>
    <button id="toggle-mode" style="background: #fff; color: #4f8cff; border: none; border-radius: 4px; padding: 0.3rem 0.8rem; cursor: pointer; font-weight: bold; transition: background 0.3s, color 0.3s;">🌙 Dark Mode</button>
  </div>
  <div class="release-content" style="padding: 1rem;">
    <p class="release-description" style="font-size: 1.1rem;">
      🦖 <strong>Version 1.8.8 – STABLE</strong>
    </p>
    <div class="changelog-cards" style="display: flex; flex-direction: column; gap: 1rem;">
      <div class="changelog-card animated-card" data-dark="true">
        <span class="changelog-icon" style="font-size: 2rem;">✏️</span>
        <strong>Improvements</strong>
        <ul>
          <li>Optimized AFK system & moderation</li>
          <li>Reworked blackjack logic and statistics</li>
          <li>Stabilized command handling & listeners</li>
          <li>Improved startup behavior and logging</li>
          <li>Updated more user commands</li>
        </ul>
      </div>
      <div class="changelog-card animated-card" data-dark="true">
        <span class="changelog-icon" style="font-size: 2rem;">🌍</span>
        <strong>Bot Version</strong>
        <ul>
          <li>1.8.8 (Stable)</li>
        </ul>
      </div>
      <div class="changelog-card animated-card" data-dark="true">
        <span class="changelog-icon" style="font-size: 2rem;">🕒</span>
        <strong>Schedule</strong>
        <ul>
          <li><b>Database Reset:</b> Today at <b>11:00 PM</b> (CET)
          <li>23.05.2025
        </ul>
      </div>
      <div class="changelog-card animated-card" data-dark="true">
        <span class="changelog-icon" style="font-size: 2rem;">📢</span>
        <strong>Notes</strong>
        <ul>
          <li>Problems? <a href="https://github.com/Refreryo/refreryo-revolution.github.io/issues/new" class="contact-link">Create a GitHub Issue</a></li>
          <li>Feedback & suggestions are welcome!</li>
        </ul>
      </div>
    </div>
    <div class="highlight-area" style="margin-top: 2rem; padding: 1rem; border-left: 4px solid #7ecfff; background: #f0f8ff; border-radius: 6px; font-style: italic;">
      ***Thank you for your support – together we make Green Dino better!***
    </div>
  </div>
</div>

<style>
.changelog-card {
  flex: 1 1 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  background: #f8fafc;
  color: #222;
  box-shadow: 0 2px 12px 0 rgba(126, 207, 255, 0.08);
  transition: background 0.5s, color 0.5s, transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
  min-width: 600px;
  max-width: 98vw;
  margin: 0 auto;
}
.changelog-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.animated-card {
  animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1);
}
.animated-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 8px 24px 0 rgba(79, 140, 255, 0.18);
  background: linear-gradient(120deg, #e0f7ff 0%, #f8fafc 100%);
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
.changelog-card[data-dark="true"].dark-mode {
  background: #23272f !important;
  color: #f1f5fa !important;
  border-color: #333a45 !important;
  box-shadow: 0 2px 16px 0 rgba(79, 140, 255, 0.18);
}
.changelog-card[data-dark="true"].dark-mode .changelog-icon {
  color: #7ecfff !important;
}
.release-header.dark-mode {
  background: linear-gradient(90deg, #23272f 0%, #4f8cff 100%) !important;
  color: #7ecfff !important;
}
.highlight-area.dark-mode {
  background: #23272f !important;
  color: #7ecfff !important;
  border-left-color: #4f8cff !important;
}
@media (max-width: 900px) {
  .changelog-card {
    min-width: 98vw;
    max-width: 100vw;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>

<script>
(function() {
  const toggleBtn = document.getElementById('toggle-mode');
  let dark = false;
  function setMode(isDark) {
    document.querySelectorAll('.changelog-card[data-dark="true"]').forEach(card => {
      if(isDark) card.classList.add('dark-mode');
      else card.classList.remove('dark-mode');
    });
    document.querySelector('.release-header').classList.toggle('dark-mode', isDark);
    document.querySelector('.highlight-area').classList.toggle('dark-mode', isDark);
    toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  }
  toggleBtn.addEventListener('click', function() {
    dark = !dark;
    setMode(dark);
  });
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    dark = true;
    setMode(true);
  }
})();
</script>
