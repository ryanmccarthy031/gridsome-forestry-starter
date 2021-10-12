<template>
  <div class="drawer h-screen">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> 
    <div class="drawer-content">
      <Header :pages="pages" />
      <slot/>
      <Footer />
    </div>
    <Sidebar
      class="drawer-side"
      :pages="pages" />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"

export default {
  components: {
    Header,
    Footer
  },
  props: ['pages'],
}
</script>