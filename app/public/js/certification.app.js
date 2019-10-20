var certApp = new Vue({
  el: '#certApp',
  data: {
    certs: []
  },
  methods: {
    fetchCerts() {
      // fetch('api/records/')
      fetch('api/Certification/index.php')
      .then(response => response.json())
      .then(json => { certApp.certs = json })
    },
    handleRowClick(cert) {
      certApp.cert = cert;
    }
  }, // end methods
  created() {
    this.fetchCerts();
  }
});
