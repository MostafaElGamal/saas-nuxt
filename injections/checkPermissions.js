export default ({ store }, inject) => {
  inject('checkPermissions', (permissions, permissionName) => {
    for (const permission of permissions) {
      if (permission.name == permissionName) {
        return true
      }
    }
    return false
  })

  inject('checkTenant', () => {
    return store.getters.tenantCondition
  })
}
