

export default {
  name: 'News',
  data() {
    return {
      list: []
    }
  },
  template: `
    <ul>
      <li v-for='item of list'>
        <router-link :to='"/detail/"+item.id'>{{item.title}}</router-link>
      </li>
    </ul>
    `,
  created() {
    console.log(this.ajaxPromise);

    const obj = {
      method: 'POST',
      url: 'http://www.bozedu.net:8888/article/main/index',
      async: true,
      data: 'page=1&limit=10',
      dataType: 'form'
    }
    const getList = async () => {
      const responseData = await this.ajaxPromise(obj);
      console.log(responseData);

      this.list = JSON.parse(responseData).data.page_data;
    }
    getList();
  }
};