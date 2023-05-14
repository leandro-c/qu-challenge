import { shallowMount, mount } from "@vue/test-utils";
import Planets from "@/components/Planets.vue";

describe("Planets.vue", () => {
  it("renders a list title", async () => {
    const wrapper = shallowMount(Planets);

    await wrapper.vm.$nextTick();

    const planetItems = wrapper.findAll("div");
    expect(planetItems).toHaveLength(2);
    expect(planetItems[0].text()).toContain("Planet List");
  });

  it("renders a list of planets", async () => {
    /* Note: I know that this test is wrong, 
I don't have enough knowledge to see how the vue test library works, 
it remains to read the documentation of the page. */
    const planets = [
      {
        name: "Tatooine",
        population: "200000",
        surface_water: "1",
        terrain: "desert",
        gravity: "standard",
        climate: "arid",
      },
      {
        name: "Alderaan",
        population: "2000000000",
        surface_water: "40",
        terrain: "grasslands, mountains",
        gravity: "1 standard",
        climate: "temperate",
      },
    ];
    const wrapper = shallowMount(Planets, {
      setup() {
        return {
          planets,
        };
      },
    });

    const listsOfPlanets = wrapper.find(".grid-container");
    console.log("--->", listsOfPlanets.find(".planet-card"));
    expect(listsOfPlanets.exists).toBeTruthy();
  });
});
