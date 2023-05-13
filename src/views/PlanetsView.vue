<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <PlanetsComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlanetsComponent from "@/components/Planets.vue"; // @ is an alias to /src

export default defineComponent({
  name: "PlanetsView",
  components: {
    PlanetsComponent,
  },
});
</script>
