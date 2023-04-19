<template>
  <div class="container">
    <div class="title">
      <h2 class="title">Popular events</h2>
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
          <button  class="btn-booknow">Book now</button>
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
        {
          eventName: "Charity Gala",
          description:
            "Support a good cause and enjoy an elegant evening of dinner, drinks, and entertainment.",
          date: "2023-09-15",
          time: "7:00 PM",
          imageUrl:
            "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          availableSlots: 100,
        },
        {
          eventName: "Art Exhibition",
          description:
            "Explore the works of some of the most talented artists in the world.",
          date: "2023-05-20",
          time: "10:00 AM",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1663012861364-db0fbb286145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80",
          availableSlots: 200,
        },
        {
          eventName: "Food Festival",
          description:
            "Sample the culinary delights of dozens of top chefs and restaurants.",
          date: "2023-06-03",
          time: "11:00 AM",
          imageUrl:
            "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
          availableSlots: 300,
        },
        {
          eventName: "Sports Tournament",
          description:
            "Watch some of the world's top athletes compete in a variety of sports.",
          date: "2023-08-12",
          time: "9:00 AM",
          imageUrl:
            "https://images.unsplash.com/photo-1561912774-79769a0a0a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          availableSlots: 1000,
        },
        {
          eventName: "Technology Conference",
          description:
            "Learn about the latest trends and innovations in the tech industry from industry experts.",
          date: "2023-11-01",
          time: "8:00 AM",
          imageUrl:
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          availableSlots: 500,
        },
        {
          eventName: "Fashion Show",
          description:
            "See the latest styles and trends from top designers and models.",
          date: "2023-10-05",
          time: "6:00 PM",
          imageUrl:
            "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          availableSlots: 200,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  /* background-color: red; */
}
.events-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  /* add some spacing between the cards */
}
.event-card {
  /* width: 100%; */
  max-width: 300px;
}

.container {
  /* background-color: aqua; */
}
.title {
  text-align: center;
  margin-top: 30px;
}
/* .event-card {
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
  margin: 20px;
  overflow: hidden;
  width: 300px;
} */
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
