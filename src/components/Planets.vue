<template>
  <div>
    <h1>Lista de planetas</h1>
    <ul>
      <div class="grid-container" v-for="planet in planets" :key="planet.name">
        <p>{{ planet.name }}</p>
        <p>{{ planet.population }}</p>
        <p>{{ planet.surface_water }}</p>
        <p>{{ planet.terrain }}</p>
        <p>{{ planet.gravity }}</p>
        <p>{{ planet.climate }}</p>
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
}
</style>
