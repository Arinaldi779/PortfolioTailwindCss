// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Scroll Project
const carousel = document.getElementById('carousel');
let isDown = false;
let startX;
let scrollLeft;


// Api Github
const username = 'Arinaldi779'; // Ganti dengan username GitHub yang diinginkan
const repoContainer = document.getElementById('repos');
const token = '0'; // Ganti dengan token akses GitHub Anda
const template = document.getElementById('repo-template');

fetch(`https://api.github.com/users/${username}/repos`, {
  headers: {
    'Authorization': `token ${token}`
  }
})
.then(response => response.json())
.then(data => {
  data.forEach(repo => {
    // Clone konten template
    const repoElement = template.content.cloneNode(true);

    // Update isi template dengan data repositori
    const repoLink = repoElement.getElementById('repo-link');
    const repoTitle = repoElement.getElementById('repo-tittle');
    const repoDesc = repoElement.getElementById('repo-desc');
    const repoLanguage = repoElement.getElementById('repo-language');


    repoLink.href = repo.html_url;
    repoTitle.textContent = repo.name;
    repoDesc.textContent = repo.description ? repo.description : 'No description available.';
    repoLanguage.textContent = `Language: ${repo.language}`;
    

    // Tambahkan elemen ke kontainer
    repoContainer.appendChild(repoElement);
  });
})
.catch(error => console.error('Error fetching repos:', error));
