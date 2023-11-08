import moduleSub from "./subModules/subDemo";


export const moduleA = {
  state: {
    a: 1,
    b: 2
  },
  getters: {

  },
  mutations: {
    setB(state){
      state.b = 100
    }
  },
  actions: {

  },
  modules: {
    subDemo: moduleSub
  }
}