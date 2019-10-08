var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    fighters: []
  },
  methods: {
    fetchFighters() {
      fetch('dummy_data_fighters.php')
      .then(response => response.json())
      .then(json => { patientRecordApp.fighters = json })
    }
  },
  created() {
    this.fetchFighters();
  }
});
