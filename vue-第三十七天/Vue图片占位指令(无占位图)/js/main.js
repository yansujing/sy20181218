

const bitmap = {
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

            el.parentElement.appendChild(bitmapDiv);
            bitmapDiv.appendChild(el);
        }

        const img = new Image();
        img.onload = () => {
            el.src = binding.value.url;
        }
        img.src = binding.value.url;
    }
};

const vm = new Vue({
    el: '#app',
    data: {
        list: [
            {
                url: 'http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg',
                width: 200,
                height: 100
            },
            {
                url: 'http://pic1.nipic.com/2008-08-14/2008814183939909_2.jpg',
                width: 250,
                height: 120
            },
            {
                url: 'http://img1.imgtn.bdimg.com/it/u=1393987749,3422146058&fm=26&gp=0.jpg',
                width: 150,
                height: 50
            },
            {
                url: 'http://pic75.nipic.com/file/20150821/9448607_145742365000_2.jpg',
                width: 300,
                height: 200
            },
            {
                url: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1554773613&di=3286c881d8bd222619a9f6b12ce70380&src=http://b-ssl.duitang.com/uploads/item/201504/03/20150403H1232_RJ2iV.jpeg',
                width: 400,
                height: 200
            },
            {
                url: 'http://pic32.nipic.com/20130823/13339320_183302468194_2.jpg',
                width: 100,
                height: 200
            }
        ]
    },
    directives: {
        bitmap
    }
});

