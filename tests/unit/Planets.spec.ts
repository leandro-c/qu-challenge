import { shallowMount } from "@vue/test-utils";
import Planets from "@/components/Planets.vue";

describe("Planets.vue", () => {
  it("renders a list of planets", async () => {
    const wrapper = shallowMount(Planets);

    await wrapper.vm.$nextTick();

    const planetItems = wrapper.findAll("li");
    expect(planetItems).toHaveLength(10);
    expect(planetItems[0].text()).toContain("Tatooine");
  });
});
