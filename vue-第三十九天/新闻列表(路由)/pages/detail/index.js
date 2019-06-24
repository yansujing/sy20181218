

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
  methods: {
    getDetail() {
      const obj = {
        method: 'GET',
        url: 'http://www.bozedu.net:8888/article/main/detail',
        async: true,
        data: 'id=' + this.$route.params.id,
        dataType: 'form'
      }

      const getDetail = async () => {
        const responseData = await this.ajaxPromise(obj);

        this.detail = JSON.parse(responseData).data.content;
      }

      getDetail();
    }
  },
  watch: {
    $route() {
      this.getDetail();
    }
  },
  created() {
    this.getDetail();
  }
};
