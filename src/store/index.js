import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  /* 作用类似computed */
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})

// let defaultCity = '上海'

// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {}
// export default new Vuex.Store({
//   state: {
//     city: defaultCity
//   },
//   actions: {
//     changeCity (ctx, city) {
//       ctx.commit('changeCity', city)
//     }
//   },
//   mutations: {
//     changeCity (state, city) {
//       state.city = city
//       try {
//         localStorage.city = city
//       } catch (e) {}
//     },
//     changeCitySearch (state, city) {
//       state.city = city
//       try {
//         localStorage.city = city
//       } catch (e) {}
//     }
//   }
// })
