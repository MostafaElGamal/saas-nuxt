export default ({ route, redirect, store, app }) => {
  if (store.getters.tenantCondition) {
    const permissionName = route.meta[0].per
    const customerPermissions = store.getters.customerPermissions
    const userPermissions = store.state.auth.user.permissions
    if (
      app.$checkPermissions(customerPermissions, permissionName) &&
      app.$checkPermissions(userPermissions, permissionName)
    ) {
      return true
    }
    return redirect('/')
  }
}
