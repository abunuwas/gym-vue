import { guid } from '../../utils';

export default {
  ADD_SET (state, payload) {
    let id = guid();
    state.sets[id] = Object.assign({ id: id }, payload.set);
  }
};
