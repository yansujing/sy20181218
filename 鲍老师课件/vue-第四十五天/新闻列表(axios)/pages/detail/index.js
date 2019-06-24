
export default {
  name: 'Detail',
  props: [
    'id'
  ],
  data() {
    return {
      detail: ''
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$axios({
        method: 'get',
        url: 'article/main/detail',
        params: {
          id: vm.id
        }
      }).then(responseData => {
        console.log(responseData);
        vm.detail = responseData.data.data.content;
      });
    });
  },
  template: `<div>
    <p v-html='detail'></p>
   </div>`
}