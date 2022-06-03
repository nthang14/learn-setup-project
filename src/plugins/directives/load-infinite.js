export default {
  bind: function (el, bind, vnode) {
    console.log("el", el, bind, vnode)
  },
  updated: function (el, bind, vnode, oldVnode) {
    console.log("el", el, bind, vnode, oldVnode)
  },
}