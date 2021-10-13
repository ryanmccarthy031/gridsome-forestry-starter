<template>
    <div 
        class="w-10/12"
        v-html="content"
    />
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>