import Application from '../app.js';
import ReactFactory from "./react/index.js";
import VueFactory from "./vue/index.js";

export default function UIFactory (tecnology = '') {
  const isReact = tecnology === 'react';
  const isVue = tecnology === 'vue';
  if (isReact) {
    return new Application(new ReactFactory());
  }
  if (isVue) {
    return new Application(new VueFactory());
  }
  return null;
};
