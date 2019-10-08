var FighterRecordApp = new Vue({
  el: '#FightersApp',
  data: {
    Fighters: [],
    recordFighter: {}
  },
  methods: {
    fetchFighters() {
<<<<<<< HEAD
      // fetch('api/records/')
      fetch('data/dummy_data_fighters.php')
=======
      fetch('dummy_data_fighters.php')
>>>>>>> 86e31e319723591b6a2d59c3e17144c35a1cb4bb
      .then(response => response.json())
      .then(json => { FighterRecordApp.Fighters = json })
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
      .then( json => {FighterRecordApp.Fighters.push( json[0] )})
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
        Gender:'',
        Street:'',
        City:'',
        State:'',
        Zip:'',
        Station: '',
        Radio: '',
        Email: ''
      }
    },
    handleRowClick(Fighter) {
      FighterRecordApp.patient = Fighter;
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchFighters();
  }
});
