<template>
  <div class="container">
    <div class="title">
      <h2 class="title">Popular events</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          event_name: "Music Festival",
          description:
            "A three-day music festival featuring popular artists and bands from around the world.",
          date: "2023-05-12",
          time: "12:00 PM",
          image_url: "https://example.com/music_festival.jpg",
          available_slots: 500,
        },
        {
          event_name: "Comedy Night",
          description:
            "An evening of stand-up comedy featuring some of the funniest comedians in the country.",
          date: "2023-05-17",
          time: "7:30 PM",
          image_url: "https://example.com/comedy_night.jpg",
          available_slots: 100,
        },
        {
          event_name: "Art Exhibition",
          description:
            "An exhibition showcasing the works of contemporary artists from around the world.",
          date: "2023-06-01",
          time: "10:00 AM",
          image_url: "https://example.com/art_exhibition.jpg",
          available_slots: 200,
        },
        {
          event_name: "Food Festival",
          description:
            "A two-day food festival featuring some of the best chefs and restaurants in the city.",
          date: "2023-06-15",
          time: "11:00 AM",
          image_url: "https://example.com/food_festival.jpg",
          available_slots: 300,
        },
        {
          event_name: "Movie Night",
          description:
            "An outdoor screening of classic movies under the stars.",
          date: "2023-06-30",
          time: "8:00 PM",
          image_url: "https://example.com/movie_night.jpg",
          available_slots: 150,
        },
        {
          event_name: "Dance Performance",
          description:
            "An evening of dance performances featuring some of the most talented dancers in the country.",
          date: "2023-07-10",
          time: "7:00 PM",
          image_url: "https://example.com/dance_performance.jpg",
          available_slots: 250,
        },
        {
          event_name: "Sports Tournament",
          description:
            "A weekend-long sports tournament featuring teams from around the city.",
          date: "2023-07-20",
          time: "9:00 AM",
          image_url: "https://example.com/sports_tournament.jpg",
          available_slots: 400,
        },
        {
          event_name: "Tech Conference",
          description:
            "A one-day conference on the latest trends and developments in technology.",
          date: "2023-08-01",
          time: "10:00 AM",
          image_url: "https://example.com/tech_conference.jpg",
          available_slots: 1500,
        },
        {
          event_name: "Fashion Show",
          description:
            "An evening of fashion and glamour featuring the latest collections from top designers.",
          date: "2023-08-15",
          time: "8:00 PM",
          image_url: "https://example.com/fashion_show.jpg",
          available_slots: 300,
        },
        {
          event_name: "Charity Fundraiser",
          description: "A fundraising event to support a local charity.",
          date: "2023-08-31",
          time: "8:00 PM",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  background-color: aqua;
}
</style>
