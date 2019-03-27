import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  userName: "",
  realName: ""
};

const mutations = {
  setUser(user) {
    state.userName = user.userName;
    state.realName = user.realName;
  }
};

const getters = {
  getUser() {
    return {
      userName: state.userName,
      realName: state.realName
    };
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters
});
