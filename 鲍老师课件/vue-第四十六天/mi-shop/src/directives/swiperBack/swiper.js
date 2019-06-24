
export default function(el, vm) {
    let move = 50;
    let angle;
    let startX, startY, endX, endY, dx, dy;
    el.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    })
    el.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].pageX;
        endY = e.changedTouches[0].pageY;
        dx = endX - startX;
        dy = endY - startY;
        if (Math.abs(dx) < move) {
            return;
        }
        angle = Math.atan2(dy, dx) * 180 / Math.PI;
        if (angle >= -45 && angle <= 45) {
            vm.$router.go(-1);
        }
    })
}