<template>
    <div
        :class="{ '-translate-x-full' : !showSidebar }"
        class="transition-transform transform fixed z-50">
        <div 
            @click="$emit('toggleSidebar')"
            :class="{ 'hidden': !showSidebar }"
            class="absolute w-screen h-screen bg-black opacity-25 top-0 left-0 cursor-pointer" />
        <div class="h-screen sticky top-0 py-4 px-8 bg-white">
            <div class="w-32 mx-16 my-8">
                <g-link :to="$tp('/')">
                    <img 
                        src="../../static/logo.png"
                        :alt="settings.site_name" 
                    />
                </g-link>
            </div>
            <nav>
                <ul class="divide-y px-8">
                    <li
                        @click="$emit('toggleSidebar')"
                        class="mr-12 px-8 py-2"
                        v-for="(page, index) in pages" 
                        :key="`page-${index}`">
                        <g-link
                            class="text-xl"
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
