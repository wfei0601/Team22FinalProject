var fighterApp = new Vue({
  el: '#expireApp',
  data: {
    fighters: []
  },
  methods: {
    fetchFighters() {
      // fetch('api/records/')
      fetch('api/Fighter/index.php')
      .then(response => response.json())
      .then(json => { fighterApp.fighters = json })
    },
    handleRowClick(fighter) {
      fighterRecordApp.fighter = fighter;
    }
  }, // end methods
  created() {
    this.fetchFighters();
  }
});
