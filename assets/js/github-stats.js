document.addEventListener('DOMContentLoaded', function() {
    const repo = 'Refreryo/refreryo-revolution';
    const statsContainer = document.getElementById('github-stats');
    
    if (statsContainer) {
      fetch(`https://api.github.com/repos/${repo}`)
        .then(response => response.json())
        .then(data => {
          const openIssues = data.open_issues_count;
          
          const issuesBadge = document.createElement('div');
          issuesBadge.className = 'stats-badge';
          issuesBadge.innerHTML = `
            <span class="stats-icon">🐛</span>
            <span class="stats-label">Open Issues:</span>
            <span class="stats-count">${openIssues}</span>
          `;
          
          const starsBadge = document.createElement('div');
          starsBadge.className = 'stats-badge';
          starsBadge.innerHTML = `
            <span class="stats-icon">⭐</span>
            <span class="stats-label">Stars:</span>
            <span class="stats-count">${data.stargazers_count}</span>
          `;
          
          statsContainer.appendChild(issuesBadge);
          statsContainer.appendChild(starsBadge);
        })
        .catch(error => {
          console.error('Error fetching GitHub stats:', error);
          statsContainer.innerHTML = '<p>GitHub stats unavailable</p>';
        });
    }
  });