var expireApp = new Vue({
  el: '#expireApp',
  data: {
    expired: [],
    filter: {ExpireDate: ''}
  },
  methods: {
    fetchExpired() {
      // fetch('api/records/')
      fetch('api/Expire/index.php')
      .then(response => response.json())
      .then(json => { expireApp.expired = json })
    },
    handleRowClick(fighter) {
      expireApp.expired = expired;
    }
  }, // end methods
  created() {
    this.fetchExpired();
  }
});
