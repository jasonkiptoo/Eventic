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
          <!-- <p class="card-text">{{ event.description }}</p>
          <p class="card-text">Date: {{ event.date }}</p>
          <p class="card-text">Time: {{ event.time }}</p>
          <p class="card-text">Available slots: {{ event.availableSlots }}</p> -->
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
            //   "https://images.unsplash.com/photo-1605834973436-d8126806bbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1c3RhaW5hYmxlJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            // "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

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
  /* background-color: red;
  position: relative;
  left: 0px;
  top: 0px; */
}
.events-container {
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px; */
  /* add some spacing between the cards */
}
.event-card {
  position: relative;
}

.title {
  text-align: center;
  margin-top: 30px;
}

.event-card:hover {
  transform: translateY(-5px);
}
.card-img {
  display: block;
  height: 500px;
  object-fit: fit;
  width: 100%;
}
.card-body {
    /* width: 100%; */
    display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: flex-start;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 1rem;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: auto;
  margin-top: auto;
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
</style>
