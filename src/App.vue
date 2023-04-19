<template>


 <NavBar />
  
  <LoginPage />
  <CreateEventForm />
  <NavBar />
  <HomePage />
  <UpcomingEvents />
  <EventsDisplay />
  <NavFooter />
 <!-- <router-view></router-view> -->
  <!-- </div> -->
</template>

<script>
import EventsDisplay from "./views/EventsDisplay.vue";
import NavBar from "./views/NavBar.vue";
import UpcomingEvents from "./views/UpcomingEvents.vue";
import NavFooter from "./views/NavFooter.vue";
import LoginPage from "./views/LoginPage";
import CreateEventForm from "./views/CreateEventForm.vue";

export default {
  name: "App",
  components: {
   
    NavBar,
    EventsDisplay,
    UpcomingEvents,
    NavFooter,
    LoginPage,
    CreateEventForm,
  },
};
</script>

<style scoped>
/* // #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// } */

nav {
  padding: 30px;
  background-color: #42b983;

  /* // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // } */
}
</style>
