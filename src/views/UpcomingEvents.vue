<template>
  <div class="container">
    <div class="title">
      <h2 class="title">Coming Up . . .</h2>
    </div>

    <div class="events-container">
      <div class="event-card" v-for="(event, index) in events" :key="index">
        <img :src="event.imageUrl" class="card-img" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ event.eventName }}</h5>
          <p class="card-text">{{ event.description }}</p>
          <p class="card-text">Date: {{ event.date }}</p>
          <p class="card-text">Time: {{ event.time }}</p>
          <p class="card-text">Available slots: {{ event.availableSlots }}</p>
          <button class="btn-booknow">Book now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          eventName: "Music Festival",
          description:
            "Join us for a weekend of live music from some of the best bands around!",
          date: "2023-07-08",
          time: "12:00 PM",
          imageUrl:
            "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          availableSlots: 500,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  background-color: red;
  position: relative;
  left: 0px;
  top: 0px;
}
.events-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  /* add some spacing between the cards */
}



.title {
  text-align: center;
  margin-top: 30px;
}

.event-card:hover {
  transform: translateY(-5px);
}
.card-img {
  height: 200px;
  object-fit: cover;
  width: 100%;
}
.card-body {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.card-text {
  margin-bottom: 10px;
}
.btn-booknow {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.btn-booknow:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

/* Default styles for the cards */
.event-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 20px;
  float: left;
  border-radius: 5px;
  transition: transform 0.2s;
  margin: 20px;
  overflow: hidden;
  width: 300px;
}

/* Media query for screens smaller than 768px */
@media only screen and (max-width: 600px) {
  .events-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* grid-gap: 20px; */
  }

  .event-card {
    width: 100%;
    height: 200px;
    margin: 10px 0;
    float: none;
  }
}

/* Media query for screens between 768px and 1023px */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  /* .event-card {
    width: calc(25% - 40px);
    height: 300px;
    margin: 20px;
    float: left;
  } */
}

/* Media query for screens larger than 1024px */
@media screen and (min-width: 1024px) {
  /* .event-card {
    width: calc(25% - 40px);
    height: 300px;
    margin: 20px;
    float: left;
  } */
}
</style>
