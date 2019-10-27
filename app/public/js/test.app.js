var testApp = new Vue({
  el: '#testApp',
  data: {
    fighters: [],
    certs: [],
    recordEnrollment: {}
  },
  methods: {
    fetchFighters() {
      // fetch('api/records/')
      fetch('api/Fighter/index.php')
      .then(response => response.json())
      .then(json => { testApp.fighters = json })
    },
    fetchCerts() {
      // fetch('api/records/')
      fetch('api/Certification/index.php')
      .then(response => response.json())
      .then(json => { testApp.certs = json })
    },
    handleSubmit(event) {
// console.log('Foo');
      fetch('api/Enroll/post.php', {
        method: 'POST',
        body: JSON.stringify(this.recordEnrollment),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      // .then( response => window.location.href='All.html')
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });
      this.handleReset();
    },
    handleReset() {
      this.recordEnrollment = {
        CertificationId: '',
        MemberId: '',
        StartDate: '',
        ExpireDate: ''
      }
    }
  }, // end methods
  created() {
    this.fetchFighters();
    this.fetchCerts();
    this.handleReset();
  }
});
