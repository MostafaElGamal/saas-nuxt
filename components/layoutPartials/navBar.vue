<template>
  <!-- begin:: Header -->
  <div id="kt_header" class="kt-header kt-grid__item  kt-header--fixed ">
    <!-- begin:: Header Menu -->
    <button
      class="kt-header-menu-wrapper-close"
      id="kt_header_menu_mobile_close_btn"
    >
      <i class="la la-close"></i>
    </button>
    <div class="kt-header-menu-wrapper" id="kt_header_menu_wrapper">
      <div
        id="kt_header_menu"
        class="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-default "
      ></div>
    </div>
    <!-- end:: Header Menu -->

    <!-- begin:: Header Topbar -->
    <div class="kt-header__topbar">
      <!--begin: User Bar -->
      <div class="kt-header__topbar-item kt-header__topbar-item--user">
        <b-dropdown
          id="user-dropdown"
          text="Hi userName"
          class="user-dropdown"
          :no-caret="true"
        >
          <b-dropdown-item>Profile</b-dropdown-item>
          <b-dropdown-item>Sign Out</b-dropdown-item>
        </b-dropdown>
      </div>

      <!--end: User Bar -->
    </div>
    <!-- end:: Header Topbar -->
  </div>

  <!-- end:: Header -->
</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style>
.user-dropdown button {
  background-color: #ffff;
  color: black;
  border: 0;
  height: 50%;
  margin: 1rem 0;
}
.user-dropdown button:hover {
  background-color: #c4c4c4;
  color: black;
}
</style>
