/**
 * Created by chenxiaoyu on 2017/8/22 0022.
 * Q Q: 1524904743
 */
import type from '../type.js'
import axios from 'axios'

const state= {
  loginType: 'phone-login'
}

const getters= {
  getLoginType: function (state) {
    return state.loginType;
  }
}

const actions= {
  changeLoginType: function (context) {
      context.commit('changeLoginType');
  }
}

const mutations= {
  changeLoginType: function (state) {
    console.log(state)
    if (state.loginType == 'password-login'){
      state.loginType= 'phone-login';
    }else {
      state.loginType= 'password-login';
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}


