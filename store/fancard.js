const fancard_name = 'fancard.hololive.nakiri-ayame';

export const state = () => ({
  name: '',
  location: '',
  moment: '',
  word: '',
  point: '',
  date: '',
  serial: ''
})

export const mutations = {

  loadFancard (state) {
    for (const [key, value] of Object.entries(state)) {
      state[key] = localStorage.getItem(`${fancard_name}.${key}`);
    }
  },

  saveFancard (state, card) {
    for (const [key, value] of Object.entries(state)) {
      state[key] = card[key];
      state[key] = localStorage.setItem(`${fancard_name}.${key}`, state[key]);
    }
  },
 
  clearFancard (state) {
    for (const [key, value] of Object.entries(state)) {
      state[key] = localStorage.removeItem(`${fancard_name}.${key}`);
    }
  } 

}
