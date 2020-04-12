<template>
  <div
    class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile"
  >
    <div
      class="kt-grid__item  kt-grid__item--order-tablet-and-mobile-2  kt-grid kt-grid--hor kt-login__aside"
    >
      <div class="kt-login__wrapper">
        <div class="kt-login__container">
          <div class="kt-login__body">
            <div class="kt-login__logo">
              <a href="#">
                <img src="/images/logo-2.png" />
              </a>
            </div>
            <div class="kt-login__signin">
              <div class="kt-login__head">
                <h3 class="kt-login__title">Sign In To Admin</h3>
              </div>
              <div class="kt-login__form">
                <form class="kt-form" action="">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Email"
                      name="email"
                      autocomplete="off"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control form-control-last"
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div class="kt-login__extra">
                    <label class="kt-checkbox">
                      <input type="checkbox" name="remember" /> Remember me
                      <span></span>
                    </label>
                  </div>
                  <div class="kt-login__actions">
                    <button
                      id="kt_login_signin_submit"
                      class="btn btn-brand btn-pill btn-elevate"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="kt-grid__item kt-grid__item--fluid kt-grid__item--center kt-grid kt-grid--ver kt-login__content"
      style="background-image: url(/images/bg-4.jpg);"
    >
      <div class="kt-login__section">
        <div class="kt-login__block">
          <h3 class="kt-login__title">Join Our Community</h3>
          <div class="kt-login__desc">
            Lorem ipsum dolor sit amet, coectetuer adipiscing
            <br />elit sed diam nonummy et nibh euismod
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  layout: 'loginLayout'
}
</script>
