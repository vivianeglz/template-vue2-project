import { shallowMount } from "@vue/test-utils";
import FlexItem from "./index";

describe("FlexItem", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(FlexItem, {});

    afterEach(() => {
      wrapper.destroy();
    });
  });

  it("Button primary - should correctly mounted", () => {
    expect(wrapper.classes()).toContain("grid__col");
  });
});
