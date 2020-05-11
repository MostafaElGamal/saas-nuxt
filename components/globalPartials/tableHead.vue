<template>
  <div class="kt-portlet__head kt-portlet__head--lg">
    <div class="kt-portlet__head-label">
      <span class="kt-portlet__head-icon">
        <i class="kt-font-brand flaticon2-line-chart"></i>
      </span>
      <h3 class="kt-portlet__head-title">
        {{ tableName }}
      </h3>
    </div>
    <div class="kt-portlet__head-toolbar">
      <div class="kt-portlet__head-wrapper">
        <div class="dropdown dropdown-inline">
          <nuxt-link :to="addUrl">
            <button type="button" class="btn btn-success btn-icon-sm">
              <i class="flaticon2-plus"></i> Add New
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'table-head',
  props: {
    tableName: {
      type: String,
      default: ''
    },
    addUrl: {
      type: String,
      default: '/'
    }
  }
}
</script>
