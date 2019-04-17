import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        buttonIds: []
    },
    getters: {
        getButtonIds: state => {
            return state.buttonIds;
        }
    },
    mutations: {
        setButtionIds(state, value) {
            state.buttonIds = value;
        }
    }
})