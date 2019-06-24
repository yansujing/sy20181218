
const tip = function (el, binding) {
    console.log(el);
    console.log(binding);

    el.addEventListener('mouseenter', function () {
        let div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.padding = '5px';
        div.style.borderRadius = '5px';

        div.innerText = binding.value.text;

        div.style.backgroundColor = binding.value.backgroundColor ? binding.value.backgroundColor : '#000';
        div.style.color = binding.value.color ? binding.value.color : '#fff';

        document.body.append(div);

        let divs = document.getElementsByTagName("div");

        let tipDivWidth = divs[divs.length - 1].offsetWidth;
        let tipDivHeight = divs[divs.length - 1].offsetHeight;

        divs[divs.length - 1].parentNode.removeChild(div);

        if (binding.arg === 'left') {
            div.style.top = el.offsetTop + 'px';
            div.style.left = (el.offsetLeft - tipDivWidth) + 'px';
        }
        if (binding.arg === 'right') {
            div.style.top = el.offsetTop + 'px';
            div.style.left = (el.offsetLeft + el.offsetWidth) + 'px';
        }
        if (binding.arg === 'top') {
            div.style.top = (el.offsetTop - tipDivHeight) + 'px';
            div.style.left = el.offsetLeft + 'px';
        }
        if (binding.arg === 'bottom') {
            div.style.top = (el.offsetTop + el.offsetHeight) + 'px';
            div.style.left = el.offsetLeft + 'px';
        }

        document.body.append(div);
    });
    el.addEventListener('mouseleave', function () {
        let divs = document.getElementsByTagName("div");
        divs[divs.length - 1].parentNode.removeChild(divs[divs.length - 1]);
    });
}

const vm = new Vue({
    el: '#app',
    data: {
        tip1: {
            text: "百度一下百度一下百度一下百度一下",
            backgroundColor: "blue",
            color: "red"
        },
        tip2: {
            text: "网易一下网易一下",
            backgroundColor: "red"
        },
        tip3: {
            text: "新浪一下新浪一下新浪一下新浪一下新浪一下新浪一下",
            color: "red"
        },
        tip4: {
            text: "微博",
            color: "blue"
        }
    },
    directives: {
        tip
    }
});

