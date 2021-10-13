<template>
    <div class="h-screen sticky top-0">
        <div class="w-32">
            <g-link :to="$tp('/')">
                <img 
                    src="../../static/logo.png"
                    :alt="settings.site_name" 
                />
            </g-link>
        </div>
        <nav>
            <ul>
                <li
                    v-for="(page, index) in pages" 
                    :key="`page-${index}`">
                    <g-link
                        
                        :to="$tp(page.node.path)">
                        {{ page.node.title }}
                    </g-link>
                </li>
            </ul>
        </nav>
        <language-selector />
    </div>
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
