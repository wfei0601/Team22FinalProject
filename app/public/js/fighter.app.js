var fighterApp = new Vue({
  el: '#fighterApp',
  data: {
    fighters: [],
    fighter: {
      MemberId:''
    }
  },
  methods: {
    fetchFighters() {
      // fetch('api/records/')
      fetch('api/Fighter/index.php')
      .then(response => response.json())
      .then(json => { fighterApp.fighters = json })
    },
    // handleRowClick(fighter) {
    //   fighterApp.fighter = fighter
    //   .then( response => window.location.href='All.html')
    // },
    handleDelete() {
      console.log(this.fighter.MemberId);
      fetch('api/Fighter/delete.php', {
        method: 'POST',
        body: JSON.stringify(this.fighter.MemberId),
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
    handleRowClick(fighter) {
      fighterApp.fighter = fighter;
      this.handleDelete();
    },
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
