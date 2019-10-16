var fighterRecordApp = new Vue({
  el: '#fighterRecordApp',
  data: {
    fighters: []
  },
  methods: {
    fetchFighters() {
      fetch('data/dummy_data_fighters.php')
      .then(response => response.json())
      .then(json => { fighterRecordApp.fighters = json })
    }
  },
  created() {
    this.fetchFighters();
  }
});
