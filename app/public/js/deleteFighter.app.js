var fighterDeleteApp = new Vue({
  el: '#fighterDeleteApp',
  data: {
    fighter: {}
  },
  methods: {
    handleSubmit() {
// console.log('Foo');
      fetch('api/Fighter/delete.php', {
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
    handleReset() {
      this.fighter = {
          MemberId: ''
      }
    }
  }, // end methods
  created() {
    this.handleReset();
  }
});
