import NotFound from "@/pages/NotFound";
import { Wrap } from "../../../test/helpers";

describe("NotFound", () => {
  it("Renders page not found translated text", () => {
    const wrapper = Wrap(NotFound).mount();
    expect(wrapper.text()).toContain("Página no encontrada...");
  });
});
