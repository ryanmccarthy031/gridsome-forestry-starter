<template>
    <div class="px-16 py-6">
        <select
            v-model="language"
            class="text-xl w-full"
            name="language" 
            id="language">
            <option
                v-for="(lang, index) in availableLocales"
                :key="`language-${index}`"
                :value="lang">{{ $t(lang) }}</option>
        </select>
    </div>
</template>


<script>
export default {
    data() {
        return {
            selectedLanguage: this.$i18n.locale.toString(),
            availableLocales: this.$i18n.availableLocales,
        }
    },
    computed: {
        language: {
            get () {
                return this.selectedLanguage
            },
            set (val) {
                this.$i18n.locale = val
                this.selectedLanguage = val

                if (this.$route.path===`/${val}/`) return
                this.$router.push({
                    path: this.$tp(this.$route.path, val, true)
                })
            },
        },
    },
}
</script>
