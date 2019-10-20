var enrollApp = new Vue({
  el: '#enrollApp',
  data: {
    recordEnrollment: {}
  },
  methods: {
    handleSubmit(event) {
// console.log('Foo');
      fetch('api/Enroll/post.php', {
        method: 'POST',
        body: JSON.stringify(this.recordEnrollment),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => window.location.href='All.html')
      // .then( response => response.json() )
      // .then( json => {fighterRecordApp.fighters.push( json[0] )})
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
    this.handleReset();
  }
});
