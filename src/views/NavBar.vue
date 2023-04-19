<template>
  <div class="nav-container">
    <div class="nav-items">
      <ul class="menu">
        <li><font-awesome-icon class="toggleBar" icon="fa-solid fa-bars" /></li>
        <li><div class="nav-item-logo" id="logo">EvenTic ✔</div></li>
        <li>
          <input
            type="text"
            class="searchEvent"
            placeholder=" 🔍Search Event"
          />
        </li>
        <li class="searchbtn">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl" />
        </li>
      </ul>
    </div>

    <div class="nav-items">
      <ul class="nav-item">
        <li><button class="signin">Create an event</button></li>
        <li><button class="signin">Log in</button></li>
        <li><button class="signin">Sign Up</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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
  color: #f8f7fa;
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
