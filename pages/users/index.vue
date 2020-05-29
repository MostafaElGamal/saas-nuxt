<template>
  <div class="kt-portlet kt-portlet--mobile">
    <!--begin: tableHead -->
    <table-head tableName="Users" addUrl="/users/add"></table-head>
    <!--begin: tableHead -->

    <div class="kt-portlet__body kt-portlet__body--fit">
      <!--begin: Datatable -->
      <table class="table table-sm table-hover text-center my-5">
        <th v-for="(thName, index) in customersTh" :key="index">
          {{ thName }}
        </th>
        <tbody>
          <tr
            role="row"
            class="even my-2"
            v-for="(user, i) in users"
            :key="user.id"
          >
            <td>
              {{ i + 1 }}
            </td>

            <td>
              {{ user.name }}
            </td>

            <td>
              {{ user.email }}
            </td>

            <!-- <td>
              <span class="kt-badge kt-badge--inline btn-danger"
                >Deactivate</span
              >
              <span class="kt-badge kt-badge--inline btn-success">Active</span>
            </td> -->
            <td>
              <!-- <div class="d-inline-block">
                <span
                  class=" btn btn-sm btn-clean btn-icon btn-icon-md toggle-on"
                >
                  <li class="fas fa-toggle-on"></li>
                </span>
                <span class="btn btn-sm btn-clean btn-icon btn-icon-md">
                  <li class="fas fa-toggle-off"></li>
                </span>
              </div> -->
              <nuxt-link
                :to="`/users/${user.id}`"
                title="Edit details"
                class="btn btn-sm btn-clean btn-icon btn-icon-md"
              >
                <li class="la la-edit"></li>
              </nuxt-link>
              <a
                class="btn btn-sm btn-clean btn-icon btn-icon-md"
                title="Delete"
                @click="deleteUser(user.id)"
              >
                <i class="la la-trash"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <!--end: Datatable -->
    </div>
  </div>
</template>
<script>
import tableHead from '@/components/globalPartials/tableHead'
import searchInput from '@/components/globalPartials/searchInput'
import customTable from '@/components/globalPartials/customTable'
export default {
  name: 'users',
  async asyncData({ $axios }) {
    const users = await $axios.$get('/users')
    return {
      users
    }
  },
  meta: { per: 'read-users' },
  middleware: ['checkCustomerAndUserPermission', 'checkNormalUserPermission'],
  components: {
    tableHead,
    searchInput
  },
  data() {
    return {
      customersTh: ['', 'Name', 'Email', '']
    }
  },
  methods: {
    async deleteUser(id) {
      try {
        await this.$axios.$delete(`/users/${id}`)
        this.users = this.users.filter(user => user.id !== id)
      } catch (errors) {
        console.log(errors)
      }
    }
  }
}
</script>
