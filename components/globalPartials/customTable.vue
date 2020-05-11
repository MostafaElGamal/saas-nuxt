<template>
  <table class="table table-sm table-hover text-center">
    <th v-for="(thName, index) in th" :key="index">
      {{ thName }}
    </th>
    <tbody>
      <tr role="row" class="even mb-2">
        <td>1</td>
        <td>user name</td>
        <td>user email</td>
        <td>user role</td>
        <td>user date</td>
        <td>
          <span class="kt-badge kt-badge--inline btn-danger">Deactivate</span>
          <!-- <span class="kt-badge kt-badge--inline btn-success">Active</span> -->
        </td>
        <td>
          <div class="d-inline-block">
            <!-- <span
                  class=" btn btn-sm btn-clean btn-icon btn-icon-md toggle-on">
                  <li class="fas fa-toggle-on"></li>
                </span> -->
            <span class="btn btn-sm btn-clean btn-icon btn-icon-md">
              <li class="fas fa-toggle-off"></li>
            </span>
          </div>
          <router-link
            to="/"
            title="Edit details"
            class="btn btn-sm btn-clean btn-icon btn-icon-md"
          >
            <li class="la la-edit"></li>
          </router-link>
          <a class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">
            <i class="la la-trash"></i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'custom-table',
  props: {
    th: {
      type: Array,
      default: []
    }
  }
}
</script>
