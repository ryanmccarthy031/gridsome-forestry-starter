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
            <div>
                Sidebar Toggle Should go here
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
