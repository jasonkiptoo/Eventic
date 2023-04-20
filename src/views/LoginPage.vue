<template>
  <div class="container-login">
    <div class="moda">
      <h3 class="logo-text">EvenTic✔</h3>
      <h2 class="title">Login</h2>

      <div class="container-input">
        <input type="email" class="login-input" placeholder="Email" />
      </div>
      <div class="conatiner-input">
        <input type="password" class="login-input" placeholder="********" />
      </div>
      <button class="forgotpassword-btn">
        <span class="register-button"> Forgot password? Reset here</span>
      </button>

      <div class="container-btn">
        <button class="login-btn">Login</button>
      </div>
      <div class="container-btn">
        <button class="register-btn">
          Don't Have an account ?<span class="register-button">
            Register Here</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-login {
  /* display: none; */
  background-color: #ffffff;
  width: fit-content;
  border: 1px solid #ff8600;
  border-radius: 10px;
  padding: 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 100px auto;
  z-index: 123456789;
  position: absolute;
  top: 10;
  left: 0;
  right: 0;
  bottom: 10;
  /* background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center; */
}

.login-input {
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
  height: 30px;
  border: 1px solid rebeccapurple;
}
.login-btn {
  color: aliceblue;
  background-color: #24a0ed;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  height: 30px;
}
.logo-text {
  color: #ff8600;
  font-size: 30px;
}
.register-btn {
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  height: 30px;
  background: transparent;
}
.register-button {
  color: blue;
}
.forgotpassword-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.register-button:hover {
  color: red;
}

/* responsive */
/* @media only screen and (max-width: 600px) {
  .container-login {
  background-color: #ffffff;
  width: fit-content;
  border: 1px solid rebeccapurple;
  border-radius: 10px;
  padding: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 100px auto;

}
} */
</style>
