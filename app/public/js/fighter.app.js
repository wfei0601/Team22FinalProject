var fighterApp = new Vue({
  el: '#fighterApp',
  data: {
    fighters: [],
    fighter: {},
    detail: {}
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
    handleDelete(fighter) {
      fighterApp.fighter = fighter;
      // console.log(this.fighter);
      fetch('../api/Fighter/delete.php', {
        method: 'POST',
        body: JSON.stringify(this.fighter),
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
      // fighterApp.fighter = fighter;
      fighterApp.detail = fighter;
      response => window.location.href='All.html';
      console.log(fighterApp.detail.MemberId)
      // this.handleDelete();
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
