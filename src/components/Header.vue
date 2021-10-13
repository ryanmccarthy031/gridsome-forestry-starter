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
            <div class="tham tham-e-squeeze tham-w-6">
                <div class="tham-box">
                    <div class="tham-inner" />
                </div>
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
