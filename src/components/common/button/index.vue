<script>
export default {
  name: 'base-button',
  props: {
    title: String,
    tag: String,
    list: Array
  },
  data() {
    return { 
      // list: [1, 2, 3, 4]
    }
  },
  functional: true,
  render(h, ctx) {
    console.log('ctx', ctx);
    return h(ctx.props.tag ? ctx.props.tag : 'div', {
      attrs: {
        class: 'learn-test'
      }
    }, [
      h('div', {}, ctx.props.title),
      h('div', {}, ctx.props.list.map(i => h('span', {}, `${i}`))),
      ...(ctx.children || [])
    ])
  }
}


</script>
