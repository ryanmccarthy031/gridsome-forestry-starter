<template>
    <footer class="flex flex-grow self-center">
        <div class="flex-grow self-end">
            <a
                class="py-4 px-4"
                :href="$t('copyrightLink')">{{ $t("copyright") }}</a>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>