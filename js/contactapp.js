console.log('Hello, World!');
const wrap = document.querySelector('.wrap');

wrap.addEventListener('click', (e) => {
  if (event.target.className === 'modal-button') {
    wrap.style.display = 'none';
  }
});
