<template>
  <div class="flex">
    <Header />
    <slot class="content" />
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
  }
,
  props: ['pages'],
}

</script>

<style scoped>
.content {
  max-width:650px;
  margin:40px auto;
  padding:0 10px;
  font:18px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color:#444
}
h1,h2,h3{
  line-height:1.2
}
@media (prefers-color-scheme: dark){
  body{
    color:#ccc;
    background:#222;
  }
  a:link{
    color:#5bf;
  }
  a:visited{
    color:#ccf;
  }
}

</style>