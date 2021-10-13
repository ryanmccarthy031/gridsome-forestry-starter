<template>
  <div class="grid grid-cols-12">
    <div class="col-span-3">
      <Sidebar :pages="pages" />
    </div>
    <div class="col-span-9">
      <Header />
      <slot class="content" />
      <Footer />
    </div>
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
  }
,
  props: ['pages'],
}

</script>