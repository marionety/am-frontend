import App from "@/App";
import AppToolbar from "@/components/AppToolbar";
import { Wrap } from "../../test/helpers";

describe("App", () => {
  it("Renders app toolbar", () => {
    const wrapper = Wrap(App).shallowMount();
    expect(wrapper.findComponent(AppToolbar)).toBeTruthy();
  });
});
