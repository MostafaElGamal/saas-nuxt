<template>
  <table class="table table-sm table-hover text-center my-5">
    <th v-for="(thName, index) in Object.keys(data.slice(1))" :key="index">
      {{ thName }}
    </th>
    <tbody>
      <tr role="row" class="even my-2" v-for="row in data" :key="row.id">
        <td>
          {{ row.id }}
        </td>

        <td>
          {{ row.name }}
        </td>

        <td>
          {{ row.email }}
        </td>

        <!-- <td>
          <span class="kt-badge kt-badge--inline btn-danger">Deactivate</span>
          <span class="kt-badge kt-badge--inline btn-success">Active</span>
        </td> -->
        <!-- <td>
          <div class="d-inline-block">
            <span
                  class=" btn btn-sm btn-clean btn-icon btn-icon-md toggle-on">
                  <li class="fas fa-toggle-on"></li>
                </span>
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
        </td> -->
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'custom-table',
  props: {
    data: {
      type: Array,
      default: []
    },
    th: {
      type: Array,
      default: []
    }
  }
}
</script>
