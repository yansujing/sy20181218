
import ajaxPromise from '../../service/ajax.js';

export default {
  // 组件 name属性的值使用 大驼峰
  name: 'Detail',
  data() {
    return {
      detail: ''
    }
  },
  template: `<div>
              <p v-html='detail'></p>
             </div>`,
  beforeRouteEnter(to, from, next) {
    const obj = {
      method: 'GET',
      url: 'http://www.bozedu.net:8888/article/main/detail',
      async: true,
      data: 'id=' + to.params.id,
      dataType: 'form'
    };
    ajaxPromise(obj).then(responseData => {

      next(vm => {
        vm.detail = JSON.parse(responseData).data.content;
      });

    });
  }
};
