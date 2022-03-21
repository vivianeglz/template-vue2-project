import { shallowMount } from "@vue/test-utils";
import PageExample from ".";

const factory = (props = {}) => {
  return shallowMount(PageExample, { propsData: props });
};

describe("Page example", () => {
  it("Page example - should correctly mounted", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });
});
