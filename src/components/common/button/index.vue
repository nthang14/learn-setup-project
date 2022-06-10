<script>
import { PREFIX } from '@/utils/configs'
const COMPONENT_CLASS = PREFIX + 'btn'
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
        class: `${COMPONENT_CLASS} ${COMPONENT_CLASS}-success`
      }
    }, [
      h('div', {}, ctx.props.title),
      ...(ctx.children || [])
    ])
  }
}


</script>
