
import storage from '../../service/storage/index.js';

export default {
  name: 'Login',
  methods: {
    login() {
      storage.setInfo('token', 'abcdefg');
      const name = this.$route.query.redirect || 'home';
      this.$router.replace({ name });
    }
  },
  template: `<div>
               <button @click='login'>登录</button>
             </div>`
};
