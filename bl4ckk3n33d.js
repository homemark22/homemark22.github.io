const body = document.body;

// Light mode
document.getElementById('lightBtn').addEventListener('click', () => {
    body.classList.remove('dark-mode', 'stars-mode');
});

// Dark mode
document.getElementById('darkBtn').addEventListener('click', () => {
    body.classList.add('dark-mode');
    body.classList.remove('stars-mode');
});

// Stars mode
document.getElementById('starsBtn').addEventListener('click', () => {
    body.classList.add('stars-mode');
    body.classList.remove('dark-mode');
});
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('#dailyVersesWrapper a').forEach(link => {
      link.removeAttribute('href');
      link.style.pointerEvents = 'none';
      link.style.color = '#666';
      link.style.textDecoration = 'none';
      link.style.cursor = 'default';
    });
  }, 500);
});
function openReferralPopup(element) {
  const url = element.getAttribute('data-ref');
  if (url) {
    window.open(url, 'popupWindow', 'width=800,height=600,resizable=yes,scrollbars=yes');
  } else {
    alert('Twitch stream URL not found!');
  }
}


