

// 新闻资讯组件
const AppNews = {
    props: {
        newTitle: {
            type: String,
            required: true
        }
    },
    template: `<div>
                <h1>{{newTitle}}</h1>
                <div class='content'>
                  <slot></slot>
                </div>
              </div>`
}


// 根组件
const vm = new Vue({
    el: '#app',
    components: {
        AppNews
    }
});


