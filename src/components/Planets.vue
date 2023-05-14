<template>
  <div>
    <h1>Planet List</h1>
    <ul>
      <div class="grid-container">
        <div v-for="planet in planets" :key="planet.name">
          <div id="planet-card-id" class="planet-card">
            <h3>{{ planet.name }}</h3>
            <div class="row-text">
              <p class="title">Population:</p>
              <p class="title-description">{{ planet.population }}</p>
            </div>
            <div class="row-text">
              <p class="title">Surface water:</p>
              <p class="title-description">{{ planet.surface_water }}</p>
            </div>
            <div class="row-text">
              <p class="title">Terrain:</p>
              <p class="title-description">{{ planet.terrain }}</p>
            </div>
            <div class="row-text">
              <p class="title">gravity:</p>
              <p class="title-description">{{ planet.gravity }}</p>
            </div>
            <div class="row-text">
              <p class="title">Climate:</p>
              <p class="title-description">{{ planet.climate }}</p>
            </div>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
// eslint-disable-next-line
export default {
  name: "PlanetsComponent",
  data() {
    return {
      planets: [],
    };
  },
  async created() {
    const response = await axios.get("https://swapi.dev/api/planets/");
    this.planets = response.data.results;
  },
};
</script>

<style scoped lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding-right: 30px;
}
.planet-card {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.title {
  font-weight: bold;
}
.title-description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title-description:hover {
  overflow: visible;
  white-space: normal;
  height: auto; /* just added this line */
}
.row-text {
  display: flex;
  justify-content: center;
}
</style>
