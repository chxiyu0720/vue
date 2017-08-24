/**
 * Created by chenxiaoyu on 2017/8/22 0022.
 * Q Q: 1524904743
 */

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'
import login from './modules/login.js'
import register from './modules/register.js'

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  actions,
  mutations,
  modules: {
    login,
    register
  }
})

