

var zoomEle = document.getElementById('zoom');

zoomEle.ontouchstart = function (e) {
    if (e.touches.length === 2) {
        var x1 = e.touches[0].clientX;
        var y1 = e.touches[0].clientY;
        var x2 = e.touches[1].clientX;
        var y2 = e.touches[1].clientY;
        var d = (y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1);
        var d1 = Math.pow(d, 1 / 2);


        this.ontouchmove = function (e) {
            var x3 = e.touches[0].clientX;
            var y3 = e.touches[0].clientY;
            var x4 = e.touches[1].clientX;
            var y4 = e.touches[1].clientY;

            var d = (y4 - y3) * (y4 - y3) + (x4 - x3) * (x4 - x3);
            var d2 = Math.pow(d, 1 / 2);


            var zoom = d2 / d1;

            this.style.width = this.offsetWidth * zoom + 'px';
            
        }
    }
}