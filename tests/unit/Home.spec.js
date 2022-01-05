import Home from "@/views/Home.vue";
import { mount } from "@vue/test-utils";

describe("Home.vue", () => {
  test("Component exists", () => {
    const wrapper = mount(Home);

    expect(wrapper).toBeTruthy();
  });

  test("Wrapper contains updated amount", async () => {
    const wrapper = mount(Home);

    const update = () => (wrapper.vm.capacity = 55);

    await update();

    expect(wrapper.text()).toContain(55);
  });

  test("increments a count when button is clicked", async () => {
    const wrapper = mount(Home);

    await wrapper.find("[data-testid='increase']").trigger("click");

    expect(wrapper.find("[data-testid='capacity-updated-value']").text()).toBe(
      "4"
    );
  });

  test("decrements a count when button is clicked", async () => {
    const wrapper = mount(Home);

    await wrapper.find("[data-testid='decrease']").trigger("click");

    expect(wrapper.find("[data-testid='capacity-updated-value']").text()).toBe(
      "2"
    );
  });

  test("test computed item's initial state", () => {
    const wrapper = mount(Home);

    // await wrapper.find("[data-testid='decrease']").trigger("click");

    expect(wrapper.find("[data-testid='computed']").text()).toBe(
      "We have -1 out of 3 seats"
    );
  });

  test("test computed item is reactive", async () => {
    const wrapper = mount(Home);

    await wrapper.find("[data-testid='increase']").trigger("click");

    expect(wrapper.find("[data-testid='computed']").text()).toBe(
      "We have 0 out of 4 seats"
    );
  });
});
