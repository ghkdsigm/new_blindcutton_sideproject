import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'
// import cookie from 'cookie'
export default ({ store }) => {
  createPersistedState()(store)
}