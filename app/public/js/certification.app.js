var certApp = new Vue({
  el: '#certApp',
  data: {
    certs: [],
    deleteCert: {}
  },
  methods: {
    fetchCerts() {
      // fetch('api/records/')
      fetch('api/Certification/index.php')
      .then(response => response.json())
      .then(json => { certApp.certs = json })
    },
    handleDelete(cert) {
      certApp.deleteCert = cert;
      console.log(this.deleteCert.CertificationId);
      fetch('../api/Certification/delete.php', {
        method: 'POST',
        body: JSON.stringify(this.deleteCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      // .then( response => window.location.href='All.html')
      // .then( response => response.json() )
      // .then( json => {fighterRecordApp.fighters.push( json[0] )})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });
      this.handleReset();
    },
    // handleRowClick(cert) {
    // certApp.deleteCert = cert;
    // handleDeleteC(cert);
    // },
    handleReset() {
      this.deleteCert = {
          CertificationId: ''
      }
    }
  }, // end methods
  created() {
    this.fetchCerts();
  }
});
