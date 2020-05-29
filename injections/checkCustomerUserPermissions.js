export default ({ store, app }, inject) => {
  inject('checkCustomerUserPermissions', permissionName => {
    const customerPermissions = store.getters.customerPermissions
    const userPermissions = store.state.auth.user.permissions
    return (
      app.$checkPermissions(customerPermissions, permissionName) &&
      app.$checkPermissions(userPermissions, permissionName)
    )
  })
}
