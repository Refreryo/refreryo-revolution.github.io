# 🐶 ModMops

## Info
!!! warning "Please read to proceed | Bitte lesen bevor dem fortfahren"
    <details>
    <summary><strong>ModMops Info</strong></summary>
    <div>
    <span style="display:inline-block;width:30px;height:20px;vertical-align:middle;margin-right:8px;background:linear-gradient(to bottom, #000 33%, #DD0000 33%, #DD0000 66%, #FFCE00 66%);border:1px solid #ccc"></span>
    <strong>Deutsch:</strong> Dieser Discord-Bot wurde als kleines Nebenprojekt entwickelt und ist ausschließlich auf Deutsch verfügbar.
    </div>
    <hr>
    <div>
    <span style="display:inline-block;width:30px;height:20px;vertical-align:middle;margin-right:8px;position:relative;border:1px solid #ccc;background:white;">
        <span style="position:absolute;top:0;left:0;width:12px;height:9px;z-index:2;background:#3C3B6E;"></span>
        <span style="position:absolute;top:0;left:0;width:30px;height:2px;z-index:1;background:#B22234;"></span>
        <span style="position:absolute;top:4px;left:0;width:30px;height:2px;z-index:1;background:#B22234;"></span>
        <span style="position:absolute;top:8px;left:0;width:30px;height:2px;z-index:1;background:#B22234;"></span>
        <span style="position:absolute;top:12px;left:0;width:30px;height:2px;z-index:1;background:#B22234;"></span>
        <span style="position:absolute;top:16px;left:0;width:30px;height:2px;z-index:1;background:#B22234;"></span>
    </span>
    <strong>English:</strong> This Discord bot was developed as a small side project and is only available in German.
    </div>
    </details>

---

## ℹ️ Informationen
Der Discord Bot wurde für kleine Projekte geschrieben.

Der Bot erhält keine großen Updates mehr, sondern nur noch Fehlerbehebungen und kleinere Anpassungen.

Die Priorität liegt auf anderen Projekten (siehe linke Seite – nur auf Englisch verfügbar).

Projekt-Updates werden nur auf dieser Seite angezeigt und nicht im Changelog.

## 📄 Befehle
```yaml
Befehle funktionieren großteils nur mit Slashcommands | /help
```

### └ AdminCommands
```yaml
/ban            [user]      [grund]
/purge          [amount]    [delete_older]   *[user]
/timeout        [user]      [dauer]           [grund]
/warn           [user]      [grund]

/welcome        [channel | message | toggle ]
/config         [reset   | set     | view   ]
/blacklist      [add     | clear   | remove ]
```
*Purge besitzt die Funktion die Nachrichten eines Users zu löschen.

### └ UserCommands <sup>*1/2</sup>
```yaml
/ping
/serverinfo
/userinfo       [user]

/rps            [user]
/tictactoe      [user]
/quiz           [Kategorie]
```

## ⚙️ Funktionen
ModMops bietet zahlreiche serverseitige Funktionen für Discord-Server. Die Standardeinstellungen sind für die meisten Anwendungsfälle ausreichend.

Die Blacklist-Funktion arbeitet nur auf einzelnen Servern und nicht serverübergreifend.

Wie du diese Funktionen nutzt, erfährst du mit dem Befehl <code>/help</code>.

## 👾 Support
Du kannst über GitHub ein Ticket erstellen und den Fehler beschreiben.

Alternativ kannst du dem Discord-Server beitreten und dein Problem dort schildern.
(Siehe Footer der Website und klicke auf das Discord-Symbol.)

### ⚡ Quick-Link
<!--
- Erstelle ein Ticket [hier](https://github.com/Refreryo/refreryo-revolution.github.io/issues/new).
- Trete dem [Offiziellen Discord](https://discord.gg/JA8VnRttNU) bei.
-->

<div class="changelog-card animated-card" data-dark="true">
  <span class="changelog-icon">⚡</span>
    <strong>Quick-Link</strong>
      <ul>
        <li>Probleme entdeckt? <a href="https://github.com/Refreryo/refreryo-revolution.github.io/issues/new" class="contact-link">Erstelle ein GitHub-Issue</a></li>
        <li>Trete dem <a href="https://discord.gg/JA8VnRttNU" class="contact-link">Offiziellen Discord</a> bei.</li>
        <li>Dein Feedback und deine Vorschläge sind jederzeit willkommen!</li>
      </ul>
</div>

## BotVersion
### Version 0.3
<div class="release-cards-container">
  <div class="release-card">
      <div class="release-header">
          <span class="release-version">0.3 | Update</span>
          <span class="release-date">@ 18. Juni 2025</span>
      </div>
      <div class="release-content">
          <p class="release-description">
              🐶 <strong>Version 0.3 – Update</strong>
          </p>
          <div class="changelog-cards">
              <div class="changelog-card animated-card" data-dark="true">
                  <span class="changelog-icon">✏️</span>
                  <strong>Änderungen / Problembehandlung</strong>
                  <ul>
                      <li>Fehler des Commands: /quiz /tictactoe /rps wurde behoben</li>
                      <li>Button-ID Fehler behoben</li>
                      <li>Pruge besitzt die Funktion um ältere Nachrichten zu löschen (Discord max löschbaren Nachrichten älter als 2 Wochen)</li>
                      <li>Minimale Bugs sind noch vorhanden<sup>*1</sup></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</div>

### Version 0.2
<div class="release-cards-container">
  <div class="release-card">
      <div class="release-header">
          <span class="release-version">0.2 | Update</span>
          <span class="release-date">@ 18. Juni 2025</span>
      </div>
      <div class="release-content">
          <p class="release-description">
              🐶 <strong>Version 0.2 – Update</strong>
          </p>
          <div class="changelog-cards">
              <div class="changelog-card animated-card" data-dark="true">
                  <span class="changelog-icon">✏️</span>
                  <strong>Änderungen / Problembehandlung</strong>
                  <ul>
                      <li>Fehler des Commands: /help wurde behoben</li>
                      <li>Funktionen wurden angepasst und sind nun besser nutzbar</li>
                      <li>Pruge besitzt die Funktion um ältere Nachrichten zu löschen (Discord max löschbaren Nachrichten älter als 2 Wochen)</li>
                      <li>Einige Bugs sind noch vorhanden<sup>*1</sup></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</div>

### Version 0.1
<div class="release-cards-container">
  <div class="release-card">
      <div class="release-header">
          <span class="release-version">0.1 | Veröffentlichung</span>
          <span class="release-date">@ 16. Juni 2025</span>
      </div>
      <div class="release-content">
          <p class="release-description">
              🐶 <strong>Version 0.1 – Veröffentlichung</strong>
          </p>
          <div class="changelog-cards">
              <div class="changelog-card animated-card" data-dark="true">
                  <span class="changelog-icon">✏️</span>
                  <strong>Veröffentlichungsinfo</strong>
                  <ul>
                      <li>Der Bot beinhaltet die Moderationsfunktion von Discord & kann auch mit eigenen Einstellungen arbeiten</li>
                      <li>Einige Bugs sind noch vorhanden<sup>*1</sup></li>
                  </ul>
              </div>
          </div>
          <div class="highlight-area">
              <strong>
              <sup>*1</sup>Funktionen wie der <code>/help</code> funktionieren noch nicht vollständig, nutze bitte die eingebaute build-in Funktion von Discord um die Commands zu sehen.
            <br><hr style="border: none; border-top: 1px dashed #7ecfff; margin: 1em 0;"><br>
                <sup>*2</sup>Darunter Funktionieren die UserCommands auch nicht vollständig - können aber dennoch genutzt werden mit minimalen kleinen Fehlern.
              </strong>
          </div>
      </div>
  </div>
</div>

<style>
body {
  background: rgb(24, 32, 42);
  color: #fff;
}
.release-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.release-card {
  width: 520px;
  min-width: 320px;
  max-width: 520px;
  border: 1px solid #4f8cff;
  border-radius: 12px;
  background: linear-gradient(120deg, #23395d 0%, #1e2a3a 100%);
  color: #fff;
  box-shadow: 0 2px 12px 0 rgba(79, 140, 255, 0.10);
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 420px;
}
.release-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, #7ecfff 0%, #4f8cff 100%);
  color: #fff;
  border-radius: 12px 12px 0 0;
}
.release-version {
  font-weight: bold;
  font-size: 1.2rem;
}
.release-date {
  font-size: 1rem;
}
.release-content {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.release-description {
  font-size: 1.1rem;
  color: #fff;
}
.changelog-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.changelog-card {
  flex: 1 1 100%;
  border: 1px solid #4f8cff;
  border-radius: 8px;
  padding: 1rem;
  background: linear-gradient(120deg, #2e5d8c 0%, #23395d 100%);
  color: #fff;
  box-shadow: 0 2px 12px 0 rgba(79, 140, 255, 0.10);
  transition: background 0.5s, color 0.5s, transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
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
.highlight-area {
  margin-top: 2rem;
  padding: 1rem;
  border-left: 4px solid #7ecfff;
  background: rgba(126, 208, 255, 0.10);
  border-radius: 6px;
  font-style: italic;
  color: #fff;
}
@media (max-width: 900px) {
  .release-card {
    width: 98vw;
    min-width: unset;
    max-width: 100vw;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
.release-header, .release-description, .release-content, .highlight-area, .changelog-card, .changelog-icon, .release-version, .release-date {
  color: #fff !important;
}
</style>
