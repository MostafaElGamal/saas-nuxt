export default ({ store, app }, inject) => {
  inject('checkUserPermissions', permissionName => {
    const userPermissions = store.state.auth.user.permissions
    return app.$checkPermissions(userPermissions, permissionName)
  })
}
