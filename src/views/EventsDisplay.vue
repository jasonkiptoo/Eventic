<template>
  <NavBar @search="handleSearch" />

  <!-- <UpcomingEvents/> -->
  <!-- <input type="text" v-model="searchQuery" class="search" /> -->

  <div class="container">
    <div class="filter-container">
      <h3 class="filter-text">Filter Events By :</h3>
    </div>

    <div class="title">
      <h2 class="title">Popular events</h2>
    </div>

    <div class="events-container">
      <div class="event-card" v-for="(event, index) in filtered" :key="index">
        <img :src="event.imageUrl" class="card-img" alt="..." />
        <div class="heart-icon">
          <font-awesome-icon
            class="solid-heart-icon"
            icon="fa-solid fa-heart"
            style="color: tomato"
            size="2xl"
          />
        </div>

        <div class="card-body">
          <h5 class="card-title">{{ event.eventName }}</h5>
          <p class="card-text">{{ event.description }}</p>
          <p class="card-text-date">Date: {{ event.date }}</p>
          <p class="card-text-date">Time: {{ event.time }}</p>
          <p class="card-text">Available slots: {{ event.availableSlots }}</p>

          <button class="btn-booknow">
            Book now <font-awesome-icon icon="fa-sharp fa-light fa-heart" />
          </button>
          <!-- <p class="test">{{ searchQuery }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../views/NavBar.vue";
// import UpcomingEvents from "./UpcomingEvents.vue";

import axios from "axios";
// import { response } from "express";
export default {
  components: {
    NavBar,
    // UpcomingEvents
  },
  data() {
    return {
      searchQuery: "",
      events: [],
    };
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
  },
  computed: {
    // const filtered = events.
    filtered() {
      if (!this.searchQuery) {
        return this.events;
      }
      return this.events.filter((event) =>
        event.eventName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    methods: {
      updateSearchQuery(newSearchQuery) {
        this.searchQuery = newSearchQuery; // update searchQuery data property
      },
    },
  },
  // fetch data on mount
  mounted() {
    axios
      .get("http://localhost:3000/events")
      .then((response) => {
        this.events = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.search {
  z-index: 1000000;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.events-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  /* add some spacing between the cards */
}
.event-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  /* margin: 20px; */
  float: left;
  border-radius: 5px;
  transition: transform 0.2s;
  /* margin: 20px; */
  overflow: hidden;
  width: 300px;
}
.event-card:hover {
  /* border: 0.5px solid #ff8600; */
  cursor: pointer;
  box-shadow: 0px 0px 10px #ff8600;
}

.filter-container {
  position: relative;
  margin-top: 70px;
  height: 50px;
  color: black;
  background-color: aqua;
}
.filter-text {
  align-items: center;
  padding-left: 20px;
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
  padding: 10px;
}
.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.card-text {
  margin-bottom: 10px;
}
.card-text-date {
  color: chocolate;
}

.heart-icon {
  padding-right: 10px;
  z-index: 100000;
  display: flex;
  float: right;
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

/* Media query for screens smaller than 768px */
@media only screen and (max-width: 600px) {
  .events-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* grid-gap: 20px; */
  }

  .event-card {
    width: 100%;
    /* height: 100px; */
    /* margin: 10px 0; */
    /* float: none; */
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
