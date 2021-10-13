<template>
  <div>
    <Header />
    <slot/>
    <Footer />
    <Sidebar :pages="pages" />

  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"

export default {
  components: {
    Header,
    Footer,
    Sidebar,
  },
  props: ['pages'],
}
</script>