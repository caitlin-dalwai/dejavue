import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    friends:null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async getInfo({commit}){
      let {data} = await axios.get('https://caitlin-dalwai.github.io/dejaApi/data/index.json')
    // dependent on json file
    let {friends} = data
    console.log(data);
    commit('setfriends',friends)
  
  }
  },
  modules: {
  }
})
