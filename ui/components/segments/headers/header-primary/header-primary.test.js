import { shallowMount } from "@vue/test-utils";
import HeaderPrimary from ".";

const factory = (props = {}) => {
  return shallowMount(HeaderPrimary, { propsData: props });
};

describe("Header primary", () => {
  it("Header primary - should correctly mounted", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });
});
