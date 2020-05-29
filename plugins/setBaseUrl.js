export default function({ $axios, store }) {
  store.commit('setBaseUrl', $axios)
}
