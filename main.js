

function getTop10Repos() {
    fetch('https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc')
  .then(res => res.json())
  .then(data => {
    let repos = '';
    data.items.forEach(repo => {
      repos += `
        <div class="repo">
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
        </div>
      `;
    });
    document.getElementById('repos').innerHTML = output;
  });
}
