var fighterRecordApp = new Vue({
  el: '#fighterRecordApp',
  data: {
    fighters: [],
    recordFighter: {}
  },
  methods: {
    fetchFighters() {
      // fetch('api/records/')
      fetch('api/Fighter/index.php')
      .then(response => response.json())
      .then(json => { fighterRecordApp.fighters = json })
    },
    handleSubmit(event) {
      fetch('api/Fighter/post.php', {
        method: 'POST',
        body: JSON.stringify(this.recordFighter),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {fighterRecordApp.fighters.push( json[0] )})
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
    },
    handleRowClick(fighter) {
      fighterRecordApp.fighter = fighter;
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchFighters();
  }
});
