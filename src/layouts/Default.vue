<template>
  <div>
    <Header :pages="pages" />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Footer
  },
  props: ['pages'],
}
</script>