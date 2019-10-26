var fighterRecordApp = new Vue({
  el: '#fighterRecordApp',
  data: {
    recordFighter: {}
  },
  methods: {
    handleSubmit(event) {
      // this.recordFighter = {
      //   FirstName: '',
      //   LastName: '',
      //   Gender: '',
      //   DateOfBirth: '',
      //   Street: '',
      //   City: '',
      //   State: '',
      //   ZipCode: '',
      //   WorkNum: '',
      //   MobileNum: '',
      //   StationNum: '',
      //   RadioNum: '',
      //   Email: ''
      // }

      if(this.recordFighter.FirstName == ''
       || this.recordFighter.LastName == ''
       ||this.recordFighter.Gender == ''
       ||this.recordFighter.DateOfBirth == ''
       ||this.recordFighter.Street == ''
       ||this.recordFighter.City == ''
       ||this.recordFighter.ZipCode == ''
       ||this.recordFighter.WorkNum == ''
       ||this.recordFighter.MobileNum == ''
       ||this.recordFighter.StationNum == ''
       ||this.recordFighter.RadioNum == ''
       ||this.recordFighter.Email == ''
       )
       {
        document.getElementById('error_show').style.display = "block";

         return

       }
// console.log('Foo');
      fetch('api/Fighter/post.php', {
        method: 'POST',
        body: JSON.stringify(this.recordFighter),
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
      this.recordFighter = {
        FirstName: '',
        LastName: '',
        Gender: '',
        DateOfBirth: '',
        Street: '',
        City: '',
        State: '',
        ZipCode: '',
        WorkNum: '',
        MobileNum: '',
        StationNum: '',
        RadioNum: '',
        Email: ''
      }
    }
  }, // end methods
  created() {
    this.handleReset();
  }
});
