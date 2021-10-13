<template>
    <div
        :class="{ '-translate-x-full' : !showSidebar }"
        class="transform fixed">
        <div 
            @click="$emit('toggleSidebar')"
            :class="{ 'hidden': !showSidebar }"
            class="absolute w-screen h-screen bg-black opacity-25 top-0 left-0 cursor-pointer" />
        <div class="h-screen sticky top-0 py-4 px-8 bg-white">
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
                        @click="$emit('toggleSidebar')"
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
    props: [ 'pages', 'showSidebar' ],
}
</script>
