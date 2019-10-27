var certRecordApp = new Vue({
  el: '#certRecordApp',
  data: {
    recordCert: {}
  },
  methods: {
    handleSubmit(event) {
      fetch('api/Certification/post.php', {
        method: 'POST',
        body: JSON.stringify(this.recordCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {certRecordApp.certs.push( json[0] )})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });
      this.handleReset();
    },
    handleReset() {
      this.recordCert = {
        Name: '',
        CertifyAgency: '',
        ExpirationPeriod: ''
      }
    }
  }, // end methods
  created() {
    this.handleReset();
  }
});
