var fDetailApp = new Vue({
  el: '#fDetailApp',
  data: {
    fighter: {}
  },
  methods: {
    fetchFighter() {
      // fetch('api/records/')
      fetch('api/Fighter/index.php')
      .then(response => response.json())
      .then(json => { fighterApp.fighters = json })
    },
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
      this.fighter = {
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
  },
      // var locate = window.location
      // document.joe.burns.value = locate
      //
      // var text = document.joe.burns.value
      //
      // function delineate(str)
      //   {
      //   theleft = str.indexOf("=") + 1;
      //   fighterApp.fighter.MemberId = (theleft);
      //   }
      // var query = window.location.search.substring(1);
      // var vars = query.split("&");
      // for (var i=0;i<vars.length;i++) {
      //   var pair = vars[i].split("=");
      //   if (pair[0] == variable) {
      //     return pair[1];
      //   }
      // }
      // console.log(this.$route.query.page);
      // console.log(fighterApp.fighter.$MemberId);
      // fetch('api/records/')
    //   fetch('api/Fighter/index.php'), {
    //     method: 'POST',
    //     body: JSON.stringify(this.fighter),
    //     headers: {
    //     "Content-Type": "application/json; charset=utf-8"
    //     }
    //   }
    //   .then(response => response.json())
    //   .then(json => { fDetailApp.fighter = json })
    // },
    // handleRowClick(fighter) {
    //   fighterApp.fighter = fighter
    //   .then( response => window.location.href='All.html')
    // },
      // .then( response => window.location.href='All.html')
      // .then( response => response.json() )
      // .then( json => {fighterRecordApp.fighters.push( json[0] )})
   // end methods
  created() {
    this.fetchFighter();
    // this.handleReset();
  }
});
