import { shallowMount } from "@vue/test-utils";
import FlexContainer from "./index";

describe("FlexContainer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(FlexContainer, {});

    afterEach(() => {
      wrapper.destroy();
    });
  });

  it("Button primary - should correctly mounted", () => {
    expect(wrapper.classes()).toContain("grid");
  });
});
