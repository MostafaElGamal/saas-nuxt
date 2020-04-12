<template>
  <div>
    <!-- begin:: Aside -->
    <button class="kt-aside-close " id="kt_aside_close_btn">
      <i class="la la-close"></i>
    </button>
    <div
      class="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop"
      id="kt_aside"
    >
      <!-- begin:: Aside -->
      <div class="kt-aside__brand kt-grid__item " id="kt_aside_brand">
        <div class="kt-aside__brand-logo">
          <a href="demo1/index.html">
            <img alt="Logo" src="/images/logo-light.png" />
          </a>
        </div>
        <div class="kt-aside__brand-tools">
          <toggler-btn></toggler-btn>
        </div>
      </div>
      <!-- end:: Aside -->

      <!-- begin:: Aside Menu -->
      <div
        class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid"
        id="kt_aside_menu_wrapper"
      >
        <div
          id="kt_aside_menu"
          class="kt-aside-menu "
          data-ktmenu-vertical="1"
          data-ktmenu-scroll="1"
          data-ktmenu-dropdown-timeout="500"
        >
          <ul class="kt-menu__nav ">
            <li class="kt-menu__item " aria-haspopup="true">
              <a href="demo1/index.html" class="kt-menu__link ">
                <i class="kt-menu__link-icon flaticon-home"></i>
                <span class="kt-menu__link-text">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- end:: Aside Menu -->
    </div>
    <!-- end:: Aside -->
  </div>
</template>
<script>
import togglerBtn from '@/components/layoutPartials/togglerBtn'
export default {
  name: 'side-menu',
  components: {
    togglerBtn
  }
}
</script>
