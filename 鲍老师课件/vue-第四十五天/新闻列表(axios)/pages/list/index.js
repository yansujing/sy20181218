
export default {
  name: 'List',
  data() {
    return {
      list: []
    }
  },
  template: `<ul>
    <li v-for='item of list'>
      <router-link :to='{name:"detail",params:{id:item.id}}'>{{item.title}}</router-link>
    </li>
  </ul>`,
  created() {
    this.$axios({
      method: 'post',
      url: 'article/main/index',
      data: {
        page: 1,
        limit: 3
      }
    }).then(responseData => {
      console.log(responseData);
      this.list = responseData.data.data.page_data;
    })
  }
}