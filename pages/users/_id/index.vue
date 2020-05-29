<template>
  <div class="card">
    <div class="card-body my-5">
      <!-- <div  v-if="errors"  v-for="error in errors" class="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> {{ error[0] }}
      </div> -->
      <form v-on:submit.prevent="updateUser" enctype="multipart/form-data">
        <div class="form-group m-form__group">
          <label for="example_input_full_name">Name:</label>
          <input
            v-model="user.name"
            type="text"
            class="form-control m-input"
            placeholder="Enter full name"
          />
        </div>
        <div class="form-group m-form__group">
          <label>Email:</label>
          <input
            v-model="user.email"
            type="email"
            class="form-control m-input"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group m-form__group">
          <label>password:</label>
          <input
            v-model="user.password"
            type="password"
            class="form-control m-input"
            placeholder="password"
          />
        </div>
        <div class="d-flex flex-wrap" v-if="$checkTenant()">
          <b-form-checkbox-group
            id="checkbox-user-customer-permissions"
            v-model="user.permissions"
          >
            <b-form-checkbox
              class="mr-1"
              v-for="permission in permissions"
              :key="permission.id"
              :value="permission.id"
            >
              {{ permission.name }}
            </b-form-checkbox>
          </b-form-checkbox-group>
        </div>
        <div class="d-flex flex-wrap" v-else>
          <b-form-checkbox-group
            id="checkbox-main-permissions"
            v-model="user.permissions"
          >
            <b-form-checkbox
              class="mr-1"
              v-for="permission in permissions"
              :key="permission.id"
              :value="permission.id"
            >
              {{ permission.name }}
            </b-form-checkbox>
          </b-form-checkbox-group>
        </div>
        <div class="form-group m-form__group">
          <button type="submit" class="btn btn-success">Save</button>
          <button type="button" class="btn btn-primary" @click="$router.go(-1)">
            Back
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'add-customer',
  // meta: { per: 'update-users' },
  // middleware: ['checkCustomerAndUserPermission', 'checkNormalUserPermission'],
  async asyncData({ params, $axios }) {
    const data = await $axios.$get(`/users/${params.id}`)
    data.user.permissions = data.permissions
    const permissions = await $axios.$get('permissions')

    return {
      user: data.user,
      permissions
    }
  },
  methods: {
    async updateUser() {
      try {
        await this.$axios.$put(`/users/${this.user.id}`, this.user)
        this.$router.push('/users')
      } catch (errors) {
        console.log(errors)
      }
    }
  }
}
</script>
