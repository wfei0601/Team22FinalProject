var certificationRecordApp = new Vue({
  el: '#certificationRecordApp',
  data: {
    certifications: [],
    recordCertification: {}
  },
  methods: {
    fetchCertification() {
      // fetch('api/records/')
      fetch('api/Certification/index.php')
      .then(response => response.json())
      .then(json => { certificationRecordApp.certifications = json })
    },
    handleSubmit(event) {
      fetch('api/Certification/post.php', {
        method: 'POST',
        body: JSON.stringify(this.recordCertification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {certificationRecordApp.certifications.push( json[0] )})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });
      this.handleReset();
    },
    handleReset() {
      this.recordCertification = {
        Name: '',
        Description: '',
        ValidTime: '',
  
    
      }
    },
    handleRowClick(certification) {
      fighterRecordApp.certification = certification;
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchCertifications();
  }
});
