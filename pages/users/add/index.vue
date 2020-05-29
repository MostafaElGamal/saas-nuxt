<template>
  <div class="card">
    <div class="card-body my-5">
      <!-- <div  v-if="errors"  v-for="error in errors" class="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> {{ error[0] }}
      </div> -->
      <form v-on:submit.prevent="addUser" enctype="multipart/form-data">
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
          <label>Password:</label>
          <input
            v-model="user.password"
            type="password"
            class="form-control m-input"
            placeholder="Enter Password"
          />
        </div>
        <div class="form-group m-form__group">
          <label>Password Confrimation:</label>
          <input
            v-model="user.password_confrimation"
            type="password"
            class="form-control m-input"
            placeholder="Enter Password Confrimation"
          />
        </div>
        <div class="form-group m-form__group">
          <label>Permissions:</label>
          <div class="d-flex flex-wrap" v-if="$checkTenant()">
            <b-form-checkbox-group
              id="checkbox-user-customer-permissions"
              v-model="user.selecetdUserCustomerPermissions"
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
              v-model="user.selectedPermissons"
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
        </div>

        <div class="form-group m-form__group">
          <button type="submit" class="btn btn-success">Add</button>
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
  // meta: { per: 'craete-users' },
  // middleware: ['checkCustomerAndUserPermission', 'checkNormalUserPermission'],
  async asyncData({ params, $axios }) {
    const permissions = await $axios.$get('permissions')

    return {
      permissions
    }
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    async addUser() {
      try {
        await this.$axios.$post('/users', this.user)
        this.$router.push('/users')
      } catch (errors) {
        console.log(errors)
      }
    }
  }
}
</script>
