<template>
  <NavBar @search="handleSearch" />

  <div class="container">
    <ul class="tabs">
      <li :class="{ active: selectedTab === 'tab1' }">
        <a @click="selectedTab = 'tab1'">All Events </a>
      </li>
      <li :class="{ active: selectedTab === 'tab2' }">
        <a @click="selectedTab = 'tab2'">My Events</a>
      </li>
      <li :class="{ active: selectedTab === 'tab3' }">
        <a @click="selectedTab = 'tab3'">Categories</a>
      </li>
    </ul>

    <!-- tab content -->
    <div class="tab-content">
      <!-- tab 1 -->
      <div v-show="selectedTab === 'tab1'">
        <div class="title">
          <h2 class="title">Popular events</h2>
        </div>

        <div class="events-container">
          <div class="event-card" v-for="(event, index) in events" :key="index">
            <img :src="event.imageUrl" class="card-img" alt="..." />

            <div class="card-body">
              <div class="card-tit">
                <h5 class="card-title">{{ event.eventName }}</h5>

                <!-- <div class="class-heart"> -->
                <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->

                <span v-show="event.isLiked" class="fav">
                  <font-awesome-icon
                    icon="fa-solid fa-heart"
                    size="2xl"
                    style="color: #f06543"
                    v-on:click="event.isLiked = false"
                    @click="likedEvents(event)"
                  />
                </span>
                <span v-show="!event.isLiked" class="">
                  <font-awesome-icon
                    icon="fa-solid fa-heart"
                    size="2xl"
                    style="color: #eac8c1"
                    class="fav-outline"
                    v-on:click="event.isLiked = true"
                  />
                </span>

                <!-- <div class="star" v-if="event.isLiked"  @click="likeEvent(event)">
                    <p class="test">{{ event.isLiked  }}</p>
                    <font-awesome-icon
                      icon="fa-solid fa-heart"
                      size="2xl"
                      style="color: #f06543"
                    />
                  </div>
                  <div class="star" v-else>
                     <p class="test" @click="likedEvents(event)">{{ event.isLiked  }}</p>
                    <font-awesome-icon
                      icon="fa-solid fa-heart"
                      style="color: #b44c32"
                    /> -->
                <!-- <font-awesome-icon icon="fa-thin fa-star" /> -->
                <!-- </div> -->
                <!-- </div> -->
              </div>

              <p class="card-text">{{ event.description }}</p>
              <p class="card-text-date">Date: {{ event.date }}</p>
              <p class="card-text-date">Time: {{ event.time }}</p>
              <p class="card-text">
                Available slots: {{ event.availableSlots }}
              </p>

              <button class="btn-booknow">
                Book now
                <font-awesome-icon icon="fa-sharp fa-light fa-heart" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- second tab -->
      <div v-show="selectedTab === 'tab2'">
        <div class="liked-events">
          <h2 class="title">Liked events</h2>
          <div class="events-container">
            <div
              class="event-card"
              v-for="(event, index) in likedEvents"
              :key="index"
            >
              <img :src="event.imageUrl" class="card-img" alt="..." />

              <div class="card-body">
                <div class="card-tit">
                  <h5 class="card-title">{{ event.eventName }}</h5>

                  <div class="class-heart">
                    <div class="heart-outline">
                      <button
                        @click="likeEvent(event)"
                        :class="{ liked: likedEvents.includes(event) }"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-heart"
                          style="color: tomato"
                          size="2xl"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <p class="card-text">{{ event.description }}</p>
                <p class="card-text-date">Date: {{ event.date }}</p>
                <p class="card-text-date">Time: {{ event.time }}</p>
                <p class="card-text">
                  Available slots: {{ event.availableSlots }}
                </p>

                <button class="btn-booknow">
                  Book now
                  <font-awesome-icon icon="fa-sharp fa-light fa-heart" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- tab3 filter by categories -->
      <div v-show="selectedTab === 'tab3'">
        <h2 class="title">Filter by Categories</h2>
        <ul class="category-list">
          <li
            @click="selectedCategory = 'All'"
            :class="{ active: selectedCategory === 'All' }"
          >
            All
          </li>
          <li
            @click="selectedCategory = 'Fashion'"
            :class="{ active: selectedCategory === 'Fashion' }"
          >
            Fashion
          </li>
          <li
            @click="selectedCategory = 'Technology'"
            :class="{ active: selectedCategory === 'Technology' }"
          >
            Technology
          </li>
          <li
            @click="selectedCategory = 'Food'"
            :class="{ active: selectedCategory === 'Food' }"
          >
            Food & Drinks
          </li>
          <li
            @click="selectedCategory = 'Social'"
            :class="{ active: selectedCategory === 'Social' }"
          >
            Social
          </li>
          <li
            @click="selectedCategory = 'Health'"
            :class="{ active: selectedCategory === 'Health' }"
          >
            Health
          </li>
          <li
            @click="selectedCategory = 'Sports'"
            :class="{ active: selectedCategory === 'Sports' }"
          >
            Sports
          </li>
          <li
            @click="selectedCategory = 'Business'"
            :class="{ active: selectedCategory === 'Business' }"
          >
            Business
          </li>
          <li
            @click="selectedCategory = 'Music'"
            :class="{ active: selectedCategory === 'Music' }"
          >
            Music
          </li>
          <li
            @click="selectedCategory = 'Climate'"
            :class="{ active: selectedCategory === 'Climate' }"
          >
            Climate
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../views/NavBar.vue";

import axios from "axios";
// import CreateEventForm from "../views/CreateEventForm.vue";

export default {
  components: {
    NavBar,
    // CreateEventForm
},
  data() {
    return {
      selectedCategory: "All",
      selectedTab: "tab1",
      searchQuery: "",
      events: [



    {
      "eventName": "Music Festival",
      "description": "Join us for a weekend of live music from some of the best bands around!",
      "date": "2023-07-08",
      "time": "12:00 PM",
      "imageUrl": "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "availableSlots": 500,
      "isLiked": true
    },
    {
      "eventName": "Charity Gala",
      "description": "Support a good cause and enjoy an elegant evening of dinner, drinks, and entertainment.",
      "date": "2023-09-15",
      "time": "7:00 PM",
      "imageUrl": "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "availableSlots": 100,
      "isLiked": false
    },
    {
      "eventName": "Art Exhibition",
      "description": "Explore the works of some of the most talented artists in the world.",
      "date": "2023-05-20",
      "time": "10:00 AM",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1663012861364-db0fbb286145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80",
      "availableSlots": 200,
      "isLiked": false
    },
    {
      "eventName": "Art Exhibition",
      "description": "Explore the works of some of the most talented artists in the world.",
      "date": "2023-05-20",
      "time": "10:00 AM",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1663012861364-db0fbb286145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80",
      "availableSlots": 200,
      "isLiked": false
    },
    {
      "eventName": "Art Exhibition",
      "description": "Explore the works of some of the most talented artists in the world.",
      "date": "2023-05-20",
      "time": "10:00 AM",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1663012861364-db0fbb286145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80",
      "availableSlots": 200,
      "isLiked": false
    },
  ],


      isLiked: [],
      likedEvents: [],
    };
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
    toggle() {
      alert("ths");
      // shhadshhdsh
    },
    likeEvent(event) {
      if (!this.likedEvents.includes(event)) {
        this.likedEvents.push(event);
      } else {
        this.likedEvents.splice(this.likedEvents.indexOf(event), 1);
      }
    },
  },
  computed: {
    filtered() {
      if (!this.searchQuery) {
        return this.events;
      }
      return this.events.filter((event) =>
        event.eventName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
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
.events-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
.event-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0);
  float: left;
  border-radius: 5px;
  transition: transform 0.2s;
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
  /* background-color: aqua; */
}
.filter-text {
  align-items: center;
  padding-left: 20px;
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
  padding: 10px 10px 10px 10px;
}
.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.card-text {
  margin-bottom: 10px;
}
.card-text-date {
  color: chocolate;
}
.card-tit {
  display: flex;
  justify-content: space-between;
}
.class-heart {
  display: flex;
  /* background-color: #0062cc; */
  border-radius: 50px;
  /* width: 100%  ; */
  /* height: 100%; */
  justify-content: center;
  flex-direction: column-reverse;
}
.fav-outline {
  /* background-color: #0062cc;
  border-radius: 30px;
 
  border: 1px solid #0062cc ;
  display: none; */
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

.tabs {
  position: fixed;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  cursor: pointer;
  z-index: 2000;
  /* justify-content: ; */
}

.tabs li {
  margin-right: 10px;
}

.tabs a {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 5px 5px 0 0;
  background-color: #ff8600;
}

.tabs a:hover {
  background-color: #eaeaea;
}

.tabs li.active a {
  background-color: red;
  border-bottom-color: 3px solid blue;
}
/* category list 
  */
.category-list {
  display: block;
  list-style: none;
  float: center;
}
.category-list li {
  float: left;
  border: 1px solid #ff8600;
  border-radius: 3px;
  margin: 20px;
  padding-inline: 5px;
  cursor: pointer;
  color: black;
  padding: 20px;
}
.category-list li.active {
  background-color: #ff8600;
  color: #ccc;
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
    /* width: 100%; */
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
