const fancard_name = 'fancard.hololive.nakiri-ayame';

export const state = () => ({
  name: '',
  location: '',
  moment: '',
  words: '',
  date: '',
  serial: ''
})

export const mutations = {

  loadFancard (state) {
    state.name = localStorage.getItem(fancard_name+'.name');
    state.location = localStorage.getItem(fancard_name+'.location');
    state.moment = localStorage.getItem(fancard_name+'.moment');
    state.words = localStorage.getItem(fancard_name+'.words');
    state.date = localStorage.getItem(fancard_name+'.date');
    state.serial = localStorage.getItem(fancard_name+'.serial');
  },

  saveFancard (state, card) {
    state.name = card.name;
    state.location = card.location;
    state.moment = card.moment;
    state.words = card.words;
    state.date = card.date;
    state.serial = card.serial;
    localStorage.setItem(fancard_name+'.name', state.name);
    localStorage.setItem(fancard_name+'.location', state.location);
    localStorage.setItem(fancard_name+'.moment', state.moment);
    localStorage.setItem(fancard_name+'.words', state.words);
    localStorage.setItem(fancard_name+'.date', state.date);
    localStorage.setItem(fancard_name+'.serial', state.serial);
  },
 
  clearFancard (state) {
    localStorage.removeItem(fancard_name+'.name');
    localStorage.removeItem(fancard_name+'.location');
    localStorage.removeItem(fancard_name+'.moment');
    localStorage.removeItem(fancard_name+'.words');
    localStorage.removeItem(fancard_name+'.date');
    localStorage.removeItem(fancard_name+'.serial');
  } 

}
