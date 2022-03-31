let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  screenLog.innerText = `
    Coordinates X/Y: ${e.screenX}, ${e.screenY}`;
}
