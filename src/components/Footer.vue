<template>
    <footer>
        <div>
            <a :href="$t('copyrightLink')">{{ $t("copyright") }}</a>
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