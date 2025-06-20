## Feature Comparison

<style>
/* Table Styles */
.feature-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-bottom: 2em;
    background: var(--table-bg, #18191a);
    color: var(--table-fg, #f3f3f3);
    border-radius: 1em;
    overflow: hidden;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18);
    font-family: inherit;
}
.feature-table th, .feature-table td {
    border: none;
    padding: 1em 1.2em;
    text-align: center;
    font-size: 1em;
}
.feature-table th {
    background: var(--table-th-bg, #23272b);
    color: var(--table-th-fg, #fff);
    font-weight: 700;
    letter-spacing: 0.03em;
}
.feature-table tr {
    transition: background 0.18s;
}
.feature-table tr:nth-child(even) {
    background: var(--table-row-even, #222325);
}
.feature-table tr:nth-child(odd) {
    background: var(--table-row-odd, #1a1b1d);
}
.feature-table tr:hover {
    background: var(--table-row-hover, #23243a);
}
.feature-table td {
    vertical-align: middle;
}

/* Status Circle Styles */
.status-circle {
    display: inline-block;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: 3px solid;
    line-height: 2em;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    background: #23272b;
    transition: box-shadow 0.2s, border-color 0.2s;
    user-select: none;
}
.status-available {
    border-color: #43e97b;
    color: #43e97b;
    box-shadow: 0 0 8px 1px #43e97b44;
}
.status-planned {
    border-color: #00c6ff;
    color: #00c6ff;
    box-shadow: 0 0 8px 1px #00c6ff44;
}
.status-not {
    border-color: #ff6a6a;
    color: #ff6a6a;
    box-shadow: 0 0 8px 1px #ff6a6a44;
}
.status-wip {
    border-color: #fff200;
    color: #fff200;
    box-shadow: 0 0 8px 1px #fff20044;
}
.status-paused {
    border-color: #b0b3b8;
    color: #b0b3b8;
    box-shadow: 0 0 8px 1px #b0b3b844;
}
</style>

<table class="feature-table">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Green Dino</th>
      <th>Aviator</th>
      <th>Shark Byte</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Basic moderation commands</td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
      <td><span class="status-circle status-wip" title="Work in Progress">🛠️</span></td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
    </tr>
    <tr>
      <td>Advanced moderation tools</td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
    </tr>
    <tr>
      <td>Fun commands</td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
    </tr>
    <tr>
      <td>Custom commands</td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
    </tr>
    <tr>
      <td>Reaction roles</td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
    </tr>
    <tr>
      <td>Server statistics</td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
    </tr>
    <tr>
      <td>Logging system</td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
    </tr>
    <tr>
      <td>Welcome messages</td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
      <td><span class="status-circle status-wip" title="Work in Progress">🛠️</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
    </tr>
    <tr>
      <td>News / Announcer</td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
    </tr>
    <tr>
      <td>Advaned Blacklist</td>
      <td><span class="status-circle status-available" title="Available">✓</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
      <td><span class="status-circle status-not" title="Not available">✗</span></td>
    </tr>
  </tbody>
</table>

---

## Legend

<div style="display: flex; gap: 1em; flex-wrap: wrap; margin-bottom: 1em;">
    <span class="legend-btn status-available" title="Available">
        ✓ <span style="margin-left:0.5em;">Available</span>
    </span>
    <span class="legend-btn status-planned" title="Planned">
        🔜 <span style="margin-left:0.5em;">Planned</span>
    </span>
    <span class="legend-btn status-not" title="Not available">
        ✗ <span style="margin-left:0.5em;">Not available</span>
    </span>
    <span class="legend-btn status-wip" title="Work in Progress">
        🛠️ <span style="margin-left:0.5em;">Work in Progress</span>
    </span>
    <span class="legend-btn status-paused" title="Paused">
        ℹ️ <span style="margin-left:0.5em;">Paused</span>
    </span>
</div>

<style>
.legend-btn {
    display: flex;
    align-items: center;
    border: 2px solid;
    border-radius: 2em;
    padding: 0.5em 1.2em;
    font-size: 1em;
    font-family: inherit;
    font-weight: bold;
    background: #23272b;
    color: inherit;
    outline: none;
    transition: box-shadow 0.3s, border-color 0.3s;
    box-shadow: none;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.5em;
    cursor: default;
}
.status-available {
    border-color: #43e97b;
    color: #43e97b;
}
.status-planned {
    border-color: #00c6ff;
    color: #00c6ff;
}
.status-not {
    border-color: #ff6a6a;
    color: #ff6a6a;
}
.status-wip {
    border-color: #fff200;
    color: #fff200;
}
.status-paused {
    border-color: #b0b3b8;
    color: #b0b3b8;
}
</style>
