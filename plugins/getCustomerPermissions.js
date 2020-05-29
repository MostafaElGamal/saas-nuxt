export default function({ $axios, store }) {
  store.dispatch('getCustomerPermissions', $axios)
}
