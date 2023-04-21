<template>
  <NavBar @search="handleSearch" />

  <div class="container">
    <div class="filter-container">
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
            <div
              class="event-card"
              v-for="(event, index) in filtered"
              :key="index"
            >
              <img :src="event.imageUrl" class="card-img" alt="..." />

              <div class="card-body">
                <div class="card-tit">
                  <h5 class="card-title">{{ event.eventName }}</h5>

                  <div class="class-heart">
                    <div class="heart-outline">
                      <font-awesome-icon
                        v-if="isLiked"
                        icon="fa-solid fa-heart"
                        style="color: tomato"
                        size="2xl"
                        @click="likeEvent(event)"
                        :class="{ liked: likedEvents.includes(event) }"
                      />
                      <font-awesome-icon
                        v-else
                        icon="fa-solid fa-heart"
                        style="color: black"
                        size="2xl"
                        @click="likeEvent(event)"
                        :class="{ liked: likedEvents.includes(event) }"
                      />
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
  </div>
</template>

<script>
import NavBar from "../views/NavBar.vue";

import axios from "axios";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      selectedCategory: "All",
      selectedTab: "tab1",
      searchQuery: "",
      events: [],
      isLiked: false,
      likedEvents: [],
    };
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
    isLikedEvent(event) {
      if (!this.isLiked(event)) {
        this.isLiked = !this.isLiked;
      }
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
.heart-outline {
  background-color: #0062cc;
  border-radius: 30px;
  /* display: none; */
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
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  cursor: pointer;
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
  background-color: #f9f9f9;
}

.tabs a:hover {
  background-color: #eaeaea;
}

.tabs li.active a {
  background-color: #ff8600;
  border-bottom-color: blue;
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
