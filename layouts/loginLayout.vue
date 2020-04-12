<template>
  <!-- begin::Div -->
  <div
    class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading"
  >
    <!-- begin:: Page -->
    <div class="kt-grid kt-grid--ver kt-grid--root">
      <div
        class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v6 kt-login--signin"
        id="kt_login"
      >
        <nuxt />
      </div>
    </div>
    <!-- end:: Page -->
  </div>
  <!-- end::Div -->
</template>
<script>
export default {
  name: 'login-layout'
}
</script>
