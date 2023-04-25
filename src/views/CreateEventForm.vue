<template>
  <div class="container-event">
    <h3 class="logo-text">EvenTic✔</h3>
    <h2 class="title">Create New Event</h2>

    <div class="form-event">
      <div class="form-group">
        <label class="name">Event Name</label>
        <input type="text" class="event-input" placeholder="Event name" />
      </div>
      <div class="form-group">
        <label class="name">Description</label>
        <input
          type="text"
          class="event-input"
          placeholder="Event description"
        />
      </div>
      <div class="form-group">
        <label class="name">Event Date</label>
        <input type="date" class="event-input" placeholder="Event Date" />
      </div>
      <div class="form-group">
        <label class="name">Time</label>
        <input type="text" class="event-input" placeholder="8:00" />
      </div>
      <div class="form-group">
        <label class="name">Available Slots</label>
        <input type="number" class="event-input" placeholder="50" />
      </div>
      <div class="form-group">
        <label class="name">Image URL</label>
        <input
          type="text"
          class="event-input"
          placeholder="https://images.unsplash.com/photo-1605834973436-d8126806bbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1c3RhaW5hYmxlJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
    <button @click="bookEvent">Create Event</button>
    <CreateEventForm/>
  </div>
</template>

<script>
import CreateEventForm from "../views/CreateEventForm.vue"
export default {
  data() {
    return {
      bookEvent: false,
    };
  },

  name: "LogIn",
  props: {
    msg: String,
  },
  components: {
    CreateEventForm
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-event {
  display: none;
  background-color: #ffffff;
  width: fit-content;
  border: 1px solid #ff8600;
  border-radius: 10px;
  padding: 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  align-items: center;
  /* text-align: center; */
  color: #2c3e50;
  margin: 100px auto;
}
.form-event {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* flex-flow: column; */
}
.event-input {
  border: 1px solid red;
  border-radius: 3px;
  margin: 10px;
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
