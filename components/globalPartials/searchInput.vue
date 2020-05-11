<template>
  <div class="kt-portlet__body">
    <!--begin: Search Form -->
    <div class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
      <div class="row align-items-center">
        <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
          <div class="kt-input-icon kt-input-icon--left">
            <input
              type="text"
              class="form-control"
              placeholder="Search..."
              id="generalSearch"
            />
            <span class="kt-input-icon__icon kt-input-icon__icon--left">
              <span><i class="la la-search"></i></span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--end: Search Form -->
  </div>
</template>
<script>
export default {
  name: 'search-input'
}
</script>
