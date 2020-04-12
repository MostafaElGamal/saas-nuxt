<template>
  <div
    class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading"
  >
    <!-- begin:: Page -->

    <header-mobile></header-mobile>
    <div class="kt-grid kt-grid--hor kt-grid--root">
      <div
        class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page"
      >
        <side-menu></side-menu>
        <div
          class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
          id="kt_wrapper"
        >
          <nav-bar></nav-bar>
          <div
            class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
            id="kt_content"
          >
            <!-- begin:: Content -->
            <div
              class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid"
            >
              <nuxt />
            </div>
            <!-- end:: Content -->
          </div>
        </div>
      </div>
    </div>
    <!-- end:: Page -->
  </div>
</template>
<script>
import navBar from '@/components/layoutPartials/navBar'
import headerMobile from '@/components/layoutPartials/headerMobile'
import sideMenu from '@/components/layoutPartials/sideMenu'

export default {
  name: 'default',
  components: {
    navBar,
    headerMobile,
    sideMenu
  }
}
</script>
