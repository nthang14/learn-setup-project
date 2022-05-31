export default { 
  bind: function (el, bind, vnode) {
    if (typeof bind.value !== 'function') {
      let componentName = vnode.context.name;
      let warn = `[Vue-click-outside:] provided expression '${bind.expression}' is not a function, but has to be`;
      if (componentName) {
        warn += `Found in component ${componentName}`
      }
      console.log(warn)
      
    }
    const event = function (e) {
      if (!el.contains(e.target) && el !== e.target) {
        bind.value(e)
      }
    };
    el.handler = event;
		document.addEventListener("click", event);
  },
  unbind: function (el) {
    document.removeEventListener("click", el.handler);
  }
}