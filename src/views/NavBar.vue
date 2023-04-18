<template>
  <div class="nav-container">
    <div class="nav-items">
      <ul class="menu">
        <li><div class="nav-item" id="logo">EvenTic ✔</div></li>
        <li>
          <input type="text" class="searchEvent" placeholder="Search Event" />
        </li>
        <li class="searchbtn">
         <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl" />
        </li>
      </ul>
      </div>

      <div class="nav-items">
        <ul>
          <li><button class="signin">Create Event</button></li>
          <li><button class="signin">Login</button></li>
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
.signin {
  background-color: #2f2f2f;
  color: aliceblue;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
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
.searchEvent{
  border: 1px solid red;
  border-radius: 10px;
  padding: 5px;
  padding-inline-start: 40px;
  width: 200px;
}
.searchbtn{
  color: #f8f7fa;
  cursor: pointer;

}
.menu-icon {
  display: none;
}
@media only screen and (max-width: 600px) {
  .nav-item {
    /* display: none; */
  }
  .menu-icon {
    display: block;
    position: relative;
    left: 0px;
    top: 0px;
    padding-left: 0px;
  }
}
</style>
