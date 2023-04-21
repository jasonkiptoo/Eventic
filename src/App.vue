<template>


 <!-- <NavBar /> -->
 <UpcomingEvents/>
 <Event/>
 <!-- <LoginPag/> -->

 <!-- <router-view></router-view> -->
  <!-- </div> -->
</template>

<script>
// import EventsDisplay from "./views/EventsDisplay.vue";
// import NavBar from "./views/NavBar.vue";
import UpcomingEvents from "./views/UpcomingEvents.vue";
// import NavFooter from "./views/NavFooter.vue";
// import LoginPage from "./views/LoginPage";
import Event from "./views/EventsDisplay.vue"
// import LoginPag from "./views/LoginPage.vue"
// import CreateEventForm from "./views/CreateEventForm.vue";

export default {
  name: "App",
  components: {
  
    Event,
    // LoginPag
    // EventsDisplay,
    UpcomingEvents,
    // NavFooter,
    // LoginPage,
    // CreateEventForm,
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
