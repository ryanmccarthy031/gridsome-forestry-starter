<template>
    <div class="flex">
        <div 
            class="prose"
            v-html="content"
        />
    </div>
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>