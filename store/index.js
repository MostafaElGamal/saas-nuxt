import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      customerPermissions: [],
      tenant: false
    },
    mutations: {
      setBaseUrl(state, axios) {
        let baseUrl = location.host.replace('cp', 'api')
        baseUrl = `${location.protocol}//${baseUrl}/api`
        axios.setBaseURL(baseUrl)
      },
      setCutomerPermissions(state, permissions) {
        state.customerPermissions = permissions
      },
      setTenantCondition(state, condition) {
        state.tenant = condition
      }
    },
    actions: {
      async getCustomerPermissions(vuexContext, axios) {
        const tenantCondition = await axios.$get('/checkTenant')
        if (tenantCondition) {
          const customerPermissions = await axios.$get('/tenant/permissions')
          vuexContext.commit('setCutomerPermissions', customerPermissions)
        }
        vuexContext.commit('setTenantCondition', tenantCondition)
      }
    },
    getters: {
      customerPermissions(state) {
        return state.customerPermissions
      },
      tenantCondition(state) {
        return state.tenant
      }
    }
  })
}
