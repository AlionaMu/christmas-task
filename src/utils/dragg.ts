export function mouseEventHandler(event: MouseEvent) {  

  const area = document.body.querySelector('area') as HTMLElement;
  const target = event.target as HTMLElement;
  target.style.opacity = '0.3';
  if (target.parentElement) {
    const childCount = target.parentElement?.childElementCount;
    const count = target.parentElement.querySelector('.fav-card__count');

    if (count) {
      if (target) {
        const shiftX = event.clientX - target.getBoundingClientRect().left;
        const shiftY = event.clientY - target.getBoundingClientRect().top;

        target.style.position = 'absolute';
        target.style.zIndex = '100';
        area.append(target);
    
        count.innerHTML = `${childCount - 2}`;

        function moveAt(pageX: number, pageY: number) {
          target.style.left = pageX - shiftX + 'px';
          target.style.top = pageY - shiftY + 'px';
        }
        moveAt(event.pageX, event.pageY);

        function onMouseMove(event: MouseEvent) {
       
          moveAt(event.pageX, event.pageY);
          target.hidden = true;
          const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
          if (elemBelow?.tagName === 'AREA') {
            target.style.opacity = '0.7';
            localStorage.setItem('area', 'true');
          } else { 
            target.style.opacity = '0.3';
            localStorage.setItem('area', 'false');
          }
          target.hidden = false;
        }

        document.addEventListener('mousemove', onMouseMove);
       
        target.onmouseup = function () {
          const area = localStorage.getItem('area');
          if (area === 'true') {
            target.style.opacity = '1';
            document.removeEventListener('mousemove', onMouseMove);
          } else {
            console.log('false');
          }
        };

        target.ondragstart = function () {
          return false;
        };
      }
    }
  }
}