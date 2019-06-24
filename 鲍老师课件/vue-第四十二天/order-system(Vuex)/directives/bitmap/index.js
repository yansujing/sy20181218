

export const bitmap = {
    inserted(el, binding) {
        const dataSrc = el.getAttribute('data-src');
        if (dataSrc) {
            el.style.width = binding.value.width + 'px';
            el.style.height = binding.value.height + 'px';
            el.src = dataSrc;
        } else {
            const bitmapDiv = document.createElement('div');
            bitmapDiv.style.display = 'inline-block';
            bitmapDiv.style.width = binding.value.width + 'px';
            bitmapDiv.style.height = binding.value.height + 'px';
            bitmapDiv.style.backgroundColor = 'rgba(0,0,0,.1)';

            el.parentElement.insertBefore(bitmapDiv, el);
            bitmapDiv.appendChild(el);
        }

        const img = new Image();
        img.onload = () => {
            el.src = binding.value.imgUrl;
        }
        img.src = binding.value.imgUrl;
    }
};