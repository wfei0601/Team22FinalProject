var fighterRecordApp = new Vue({
  el: '#fighterRecordApp',
  data: {
    fighters: []
  },
  methods: {
    fetchFighters() {
      fetch('.../app/data/dummy_data_fighters.json')
      .then(response => response.json())
      .then(json => { fighterRecordApp.fighters = json })
    }
  },
  created() {
    this.fetchFighters();
  }
});
