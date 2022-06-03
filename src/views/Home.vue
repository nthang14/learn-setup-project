<template>
  <div class="home">
    home
    <!-- <list-items /> -->
    <!-- <div v-highlight:background.delay="`red`">custom directives</div> -->
    <div  v-click-outside="() => { isActive = false }">
      <v-btn @click="open">control</v-btn>
      <span v-if="isActive">clickOutside</span>
    </div>
    <div>
      filter vue 
      <div>{{ number | multi-number}}</div>
    </div>
    <ComponentSlot>
      <div slot="header">
        12312434
        <!-- <div>header 122134</div> -->
      </div>
    </ComponentSlot>
    <!-- <div class="test-infinite-scroll" v-load-infinite="load">
      The Progressive Framework#
      Vue is a framework and ecosystem that covers most of the common features needed in frontend development. But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. With that in mind, Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways:

      Enhancing static HTML without a build step
      Embedding as Web Components on any page
      Single-Page Application (SPA)
      Fullstack / Server-Side-Rendering (SSR)
      Jamstack / Static-Site-Generation (SSG)
      Targeting desktop, mobile, WebGL or even the terminal
      If you find these concepts intimidating, don't worry! The tutorial and guide only require basic HTML and JavaScript knowledge, and you should be able to follow along without being an expert in any of these.

      If you are an experienced developer interested in how to best integrate Vue into your stack, or you are curious about what these terms mean, we discuss them in more details in Ways of Using Vue.

      Despite the flexibility, the core knowledge about how Vue works is shared across all these use cases. Even if you are just a beginner now, the knowledge gained along the way will stay useful as you grow to tackle more ambitious goals in the future. If you are a veteran, you can pick the optimal way to leverage Vue based on the problems you are trying to solve, while retaining the same productivity. This is why we call Vue "The Progressive Framework": it's a framework that can grow with you and adapt to your needs.
      Which to Choose?#
      First of all, both API styles are fully capable of covering common use cases. They are different interfaces powered by the exact same underlying system. In fact, the Options API is implemented on top of the Composition API! The fundamental concepts and knowledge about Vue are shared across the two styles.

      The Options API is centered around the concept of a "component instance" (this as seen in the example), which typically aligns better with a class-based mental model for users coming from OOP language backgrounds. It is also more beginner-friendly by abstracting away the reactivity details and enforcing code organization via option groups.

      The Composition API is centered around declaring reactive state variables directly in a function scope, and composing state from multiple functions together to handle complexity. It is more free-form, and requires understanding of how reactivity works in Vue to be used effectively. In return, its flexibility enables more powerful patterns for organizing and reusing logic.

      You can learn more about the comparison between the two styles and the potential benefits of Composition API in the Composition API FAQ.

      If you are new to Vue, here's our general recommendation:

      For learning purposes, go with the style that looks easier to understand to you. Again, most of the core concepts are shared between the two styles. You can always pick up the other one at a later time.

      For production use:

      Go with Options API if you are not using build tools, or plan to use Vue primarily in low-complexity scenarios, e.g. progressive enhancement.

      Go with Composition API + Single-File Components if you plan to build full applications with Vue.

      You don't have to commit to only one style during the learning phase. The rest of the documentation will provide code samples in both styles where applicable, and you can toggle between them at any time using the API Preference switches at the top of the left sidebar.
    </div> -->
    <div>check</div>
    <div>
      <b-button title="Button" tag="span" :list="[1, 2, 3, 4]">SAVE</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
// import ListItems from '@/components/home/ListItems'
import ComponentSlot from '@/components/home/ComponentSlot'
import test from '@/mixins/test'
// import baseButton from '@/components/common/button'
export default {
  name: "Home",
  mixins: [test],
  components: {
    // ListItems
    ComponentSlot,
    // baseButton
  },
  data() {
    return {
      user: [],
      isActive: false,
      number: 2
    }
  },
  async created() {
    await this.getStudent()
  },
  methods: {
    ...mapActions('student', ['getStudent']),
    clickOutside() {
      console.log("clickOutside")
    },
    open() {
      this.isActive = true
    },
    load() {
      console.log("load")
    }
  }
};
</script>
<style scoped>
.test-infinite-scroll {
  height: 200px;
  padding: 20px 10px;
  background-color: red;
  overflow: hidden;
  overflow-y: auto;
}
</style>
