<template>
  <NavBar />
  <HomePage />
  <EventsDisplay />

  <!-- </div> -->
</template>

<script>
import EventsDisplay from "./views/EventsDisplay.vue";
import HomePage from "./views/HomePage.vue";
import NavBar from "./views/NavBar.vue";

export default {
  name: "App",
  components: {
    HomePage,
    NavBar,
    EventsDisplay,
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
