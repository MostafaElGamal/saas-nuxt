<template>
  <div class="card">
    <div class="card-body my-5">
      <!-- <div  v-if="errors"  v-for="error in errors" class="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> {{ error[0] }}
      </div> -->
      <form v-on:submit.prevent="" enctype="multipart/form-data">
        <div class="form-group m-form__group">
          <label for="example_input_full_name">Name:</label>
          <input
            type="text"
            class="form-control m-input"
            placeholder="Enter full name"
          />
        </div>
        <div class="form-group m-form__group">
          <label>Email:</label>
          <input
            type="email"
            class="form-control m-input"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group m-form__group">
          <label>Phone:</label>
          <input
            type="email"
            class="form-control m-input"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group m-form__group">
          <label>Domain:</label>
          <input
            type="email"
            class="form-control m-input"
            placeholder="Enter email"
          />
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
  name: 'add-customer'
}
</script>
