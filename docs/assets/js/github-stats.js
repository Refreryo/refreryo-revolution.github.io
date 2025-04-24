document.addEventListener('DOMContentLoaded', function() {
  const statsContainer = document.querySelectorAll('.stats-count');
  
  fetch('https://api.github.com/repos/Refreryo/refreryo-revolution.github.io')
    .then(response => response.json())
    .then(data => {
      // Update stars count
      const starsElement = document.querySelector('.stats-badge:nth-child(2) .stats-count');
      if (starsElement) {
        starsElement.textContent = data.stargazers_count;
      }
      
      // Update issues count
      const issuesElement = document.querySelector('.stats-badge:nth-child(1) .stats-count');
      if (issuesElement) {
        issuesElement.textContent = data.open_issues_count;
      }
    })
    .catch(error => {
      console.error('Error fetching GitHub stats:', error);
    });
});