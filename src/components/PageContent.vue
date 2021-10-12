<template>
    <div 
        v-html="$static.data.content"
    />
</template>
<static-query>
query MainPage ($path: String!) {
  data: mainPage (path: $path) {
    title
    content
  }
}
</static-query>
<script>
export default {
    props: {
        content: String
    }
}
</script>