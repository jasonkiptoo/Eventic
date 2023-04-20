<template>
  <div class="nav-container">
    <div class="nav-items">
      <ul class="menu">
        <li><font-awesome-icon class="toggleBar" icon="fa-solid fa-bars" /></li>
        <li><div class="nav-item-logo" id="logo">EvenTic✔</div></li>
        <li>
          <input
            type="text"
            class="searchEvent"
            placeholder=" 🔍Search Event"
            v-model="searchQuery"    v-on:keyup="$emit('search', searchQuery)"
          />
        </li>

        <!-- <li class="searchbtn">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl" @click="$emit('search', searchQuery)"/>
        </li> -->
      </ul>
    </div>

    <div class="nav-items">
      <ul class="nav-item">
        <li>
          
          <button class="signin" @click="addEvent">Create an event</button>
        </li>
        <li>
          <button class="signin" @click="showLoginModal = true">Log in</button>
        </li>
        <li><button class="signin">Sign Up</button></li>
      </ul>
    </div>
    <div
      v-if="showLoginModal"
      class="modal-overlay"
      @click.self="showLoginModal = false"
    >
      <div class="modal">
        <span class="close" @click="showLoginModal = false"
          ><font-awesome-icon icon="fa-solid fa-xmark" size="2xl"
        /></span>
        <LoginPage />
      </div>
    </div>
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
// import LoginPage from "../views/LoginPage.vue";
export default {
  data() {
    return {
      searchQuery: "",
      showLoginModal: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  background-color: #f8f7fa;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  /* background-color: rebeccapurple; */
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  align-items: center;
  justify-content: center;
}

.modal {
  position: relative;
  background-color: #fff;
  /* padding: 20px;
  max-width: 40px; */
  z-index: 999;
}

.close {
  position: absolute;
  top: 100px;
  right: 500px;
  cursor: pointer;
  z-index: 1001;
  color: #f8f7fa;
}

.nav-items:first-child {
  justify-self: start;
}

.nav-items:last-child {
  justify-self: end;
}
.nav-items li {
  list-style: none;
  float: left;
  padding-bottom: 40px;
  padding-right: 10px;
  justify-self: end;
}
.toggleBar {
  display: none;
  padding: 5px;
}
.signin {
  /* background-color: #2f2f2f; */
  color: #2f2f2f;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
}
.signin:hover {
  border: 1px solid #ff8600;
  box-shadow: 0px 0px 10px #ff8600;
}
#logo {
  color: #ff8600;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  font-size: larger;
}
#home {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  font-size: larger;
}
.searchEvent {
  border: 1px solid red;
  border-radius: 10px;
  padding: 5px;
  padding-inline-start: 40px;
  width: 200px;
}
.searchbtn {
  color: black;
  cursor: pointer;
}
.menu-icon {
  display: none;
}

/* responsiveness */
@media only screen and (max-width: 600px) {
  .nav-item {
    display: none;
  }

  .searchEvent {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 60px;
    margin-right: 10px;
    margin-bottom: auto;
    margin-left: 20px;
    /* padding-left: 20px; */
  }

  .nav-container {
    display: flex;
    flex-flow: row;
    background-color: #f8f7fa;
    position: absolute;
    /* width: 100%; */
    height: 100px;
  }
  .toggleBar {
    display: block;
  }
  /* .menu-icon {
    display: block;
    position: relative;
    left: 0px;
    top: 0px;
    padding-left: 0px;
  }
  .signin {
    display: none;
  }
  .nav-container{
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 100px;
  } */
  /* .searchEvent */
}
</style>
