export function snowing() {
  const storage = localStorage.getItem('snow');
  if (storage === 'true') {
  
    const snowFlake = document.createElement('div');
  
    snowFlake.classList.add('fas');
    snowFlake.classList.add('fa-snowflake');
    snowFlake.style.left = Math.random() * window.innerWidth + 'px';
    snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
    snowFlake.style.opacity = Math.random() + '';
    snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';
  
    document.body.prepend(snowFlake);
  
    setTimeout(() => {
      snowFlake.remove();
    }, 5000);
  }
}