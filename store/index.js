const fancard_policy = 'fancard.policy';
const fancard_list = 'fancard.list';
const fancard_name = 'fancard.hololive.nakiri-ayame';

export const state = () => ({
  isAgreed: false,
  isSigned: false
})

export const mutations = {
  initState(state) {
    state.isAgreed = localStorage.getItem(fancard_policy+'.isAgreed');
    state.isSigned = localStorage.getItem(fancard_name+'.isSigned');
  },
  agreePolicy(state) {
    state.isAgreed = true;
    state.isAgreed = localStorage.setItem(fancard_policy+'.isAgreed', state.isAgreed);
  },
  signFancard(state) {
    state.isSigned = true;
    localStorage.setItem(fancard_name+'.isSigned', state.isSigned);
    var fancardList = JSON.parse(localStorage.getItem(fancard_list, state.isSigned));
    if (fancardList == null) {
      fancardList = [ fancard_name ];
    } else {
      fancardList.push(fancard_name);
    }
    localStorage.setItem(fancard_list, JSON.stringify(fancardList));
  },
  clearLocalStorage(state) {
    state.isAgreed = false;
    state.isSigned = false;
    localStorage.removeItem(fancard_policy+'.isAgreed');
    localStorage.removeItem(fancard_list);
    localStorage.removeItem(fancard_name+'.isSigned');
  }
}
