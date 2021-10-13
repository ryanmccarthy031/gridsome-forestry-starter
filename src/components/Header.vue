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
            <language-selector />
        </div>
    </header>
</template>


<script>
import LanguageSelector from './LanguageSelector.vue'
export default {
    components: { LanguageSelector },
    data() {
        return {
            logo: require("../../static/logo.png"),
            settings: require("../../data/theme.json"),
        }
    },
    props: ['pages'],
}
</script>
