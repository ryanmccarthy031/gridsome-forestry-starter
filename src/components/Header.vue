<template>
    <header>
        <div class="flex h-40">
            <div class="w-32">
                <g-link :to="$tp('/')">
                    <img 
                        src="../../static/logo.png"
                        :alt="settings.site_name" 
                    />
                </g-link>
            </div>
            <div class="px-8 items-center hidden md:flex md:text-3xl">{{ settings.site_name }}</div>            
            <div 
                @click="$emit('toggleSidebar')"
                class="flex flex-1 justify-end items-center">
                <div class="sr-only">Open main menu</div>
                <button class="outline-none menu-button px-4 py-4">
                    <svg
                        class="w-10 h-10 text-gray-600"
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
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
        }
    },
}
</script>
