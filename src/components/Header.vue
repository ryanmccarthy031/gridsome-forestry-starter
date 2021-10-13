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
            <div class="flex items-center">
                <div class="sr-only">Open main menu</div>
                <button class="outline-none mobile-menu-button">
                    <svg
                        class="w-6 h-6 text-gray-500"
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
