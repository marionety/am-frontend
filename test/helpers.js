import vuetify from "../src/plugins/vuetify";
import {
  mount as _mount,
  shallowMount as _shallowMount,
} from "@vue/test-utils";

export function Wrap(component) {
  return {
    mount,
    shallowMount,
    withProps,
    withSlots,
    withRouter,
    config,
  };

  function withProps(props) {
    this.props = props;
    return this;
  }

  function withRouter(router) {
    this.router = router;
    return this;
  }

  function withSlots(slots) {
    this.slots = slots;
    return this;
  }

  function mount() {
    return _mount(component, this.config());
  }

  function shallowMount() {
    return _shallowMount(component, this.config());
  }

  function config() {
    return {
      vuetify,
      propsData: this.props,
      slots: this.slots,
      router: this.router,
    };
  }
}
