export default ({ route, redirect, store, app }) => {
  const permissionName = route.meta[0].per
  const userPermissions = store.state.auth.user.permissions
  if (app.$checkPermissions(userPermissions, permissionName)) return true
  return redirect('/')
}
