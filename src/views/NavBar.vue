<template>
  <div class="nav-container">
    <div class="nav-items">
      <div class="nav-item" id="home">Home</div>
      <div class="nav-item">About</div>
    </div>
    <div class="nav-item">
      <button class="signin">Sign In</button>
    
    </div>

    <!-- <h4 class="dashboard">Event</h4> -->
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  background-color: #1976d2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  text-align: center;
  color: aliceblue;
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-content: center;
}
.nav-items {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.nav-item {
  cursor: pointer;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  font-size: larger;
}
.signin{
  background-color: #2F2F2F;
  color: aliceblue;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
}
#home{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  font-size: larger;
  color: #FF8600;
}
@media only screen  and (max-width: 600px){
  .nav-item {
display: none;
}
  
}
</style>
