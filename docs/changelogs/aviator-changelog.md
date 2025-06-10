# Aviator Changelog

Stay up to date with the latest updates and improvements to our **Aviator** Discord Bot.

<div class="release-card">
    <div class="release-header" style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 1rem; background: linear-gradient(90deg, #7ecfff 0%, #4f8cff 100%); color: #fff; border-radius: 8px 8px 0 0;">
        <span class="release-version" style="font-weight: bold; font-size: 1.2rem;">1.0.0 | Release</span>
        <span class="release-date" style="font-size: 1rem;">@ June 10, 2025</span>
    </div>
    <div class="release-content" style="padding: 1rem;">
        <p class="release-description" style="font-size: 1.1rem; color: #fff;">
                ✈️ <strong>Version 1.0.0 – Release</strong>
        </p>
        <div class="changelog-cards" style="display: flex; flex-direction: column; gap: 1rem;">
                <div class="changelog-card animated-card" data-dark="true">
                        <span class="changelog-icon" style="font-size: 2rem;">🛫</span>
                        <strong>Bot Version</strong>
                        <ul>
                            <li>1.0.0 (Released)</li>
                        </ul>
                </div>
                <div class="changelog-card animated-card" data-dark="true">
                        <span class="changelog-icon" style="font-size: 2rem;">📢</span>
                        <strong>Notes</strong>
                        <ul>
                                <li>Having issues? <a href="https://github.com/Refreryo/refreryo-revolution.github.io/issues/new" class="contact-link" style="color: #7ecfff;">Create a GitHub Issue</a></li>
                                <li>Feedback &amp; suggestions are welcome!</li>
                        </ul>
                </div>
        </div>
        <div class="highlight-area" style="margin-top: 2rem; padding: 1rem; border-left: 4px solid #7ecfff; background:rgba(126, 208, 255, 0.10); border-radius: 6px; font-style: italic; color: #fff;">
                <strong>Aviator is released!</strong><br><br>
                Please note that some API commands are paid. If you have suggestions, feel free to join my Discord server.
        </div>
    </div>
</div>

<style>
body {
    background: #181f2a;
    color: #fff;
}
.changelog-card {
    flex: 1 1 100%;
    border: 1px solid #4f8cff;
    border-radius: 8px;
    padding: 1rem;
    background: linear-gradient(120deg, #23395d 0%, #1e2a3a 100%);
    color: #fff;
    box-shadow: 0 2px 12px 0 rgba(79, 140, 255, 0.10);
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
    background: linear-gradient(120deg, #2e5d8c 0%, #23395d 100%);
}
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px);}
    to { opacity: 1; transform: translateY(0);}
}
@media (max-width: 900px) {
    .changelog-card {
        min-width: 98vw;
        max-width: 100vw;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
}
.release-header, .release-description, .release-content, .highlight-area, .changelog-card, .changelog-icon, .release-version, .release-date {
    color: #fff !important;
}
</style>
