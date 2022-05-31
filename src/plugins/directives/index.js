import Vue from "vue";
import highlight from "./highlight";
import clickOutside from "./click-outside";
import loadInfinite from "./load-infinite";

// import loadInfinite from "./load-infinite";

Vue.directive("highlight", highlight);
Vue.directive("click-outside", clickOutside);
Vue.directive("load-infinite", loadInfinite);

// Vue.directive(loadInfinite.name, loadInfinite);
