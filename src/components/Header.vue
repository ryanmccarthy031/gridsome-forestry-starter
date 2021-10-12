<template>
    <header>
        <div>
            <div>
                <g-link :to="$tp('/')">
                    <img 
                        src="../../static/logo.png"
                        :alt="settings.site_name" 
                    />
                </g-link>
            </div>
            <nav>
                <g-link
                    v-for="(page, index) in pages" 
                    :key="`page-${index}`"
                    :to="$tp(page.node.path)">
                    {{ page.node.title }}
                </g-link>
            </nav>
            <div>
                <select
                    v-model="language"
                    name="language" 
                    id="language">
                    <option
                        v-for="(lang, index) in availableLocales"
                        :key="`language-${index}`"
                        :value="lang">{{ $t(lang) }}</option>
                </select>
            </div>
        </div>
    </header>
</template>


<script>
export default {
    data() {
        return {
            logo: require("../../static/logo.png"),
            settings: require("../../data/theme.json"),
            selectedLanguage: this.$i18n.locale.toString(),
            availableLocales: this.$i18n.availableLocales,
        }
    },
    props: ['pages'],
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
