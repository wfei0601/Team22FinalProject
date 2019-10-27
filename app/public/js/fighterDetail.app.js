var fDetailApp = new Vue({
  el: '#fDetailApp',
  data: {
    fighter: {}
  },
  methods: {
    fetchFighters() {
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
      console.log(this.$route.query.page);
      console.log(fighterApp.fighter.$MemberId);
      // fetch('api/records/')
      fetch('api/Fighter/index.php'), {
        method: 'POST',
        body: JSON.stringify(this.fighter),
        headers: {
        "Content-Type": "application/json; charset=utf-8"
        }
      }
      .then(response => response.json())
      .then(json => { fDetailApp.fighter = json })
    },
    // handleRowClick(fighter) {
    //   fighterApp.fighter = fighter
    //   .then( response => window.location.href='All.html')
    // },

      // .then( response => window.location.href='All.html')
      // .then( response => response.json() )
      // .then( json => {fighterRecordApp.fighters.push( json[0] )})

    handleReset() {
      this.fighter = {
          MemberId: ''
      }
    }
  }, // end methods
  created() {
    this.fetchFighters();
    // this.handleReset();
  }
});
