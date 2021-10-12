<template>
    <nav>
        <div class="w-20 lg:w-40 flex-none">
            <g-link :to="$tp('/')">
                <img
                    src="../../static/logo.png"
                    :alt="settings.site_name" />
            </g-link>
        </div>
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <div class="p-4 overflow-y-auto menu w-80 bg-base-100">
            <ul>
                <li
                    v-for="(page, index) in pages"
                    :key="`page-${index}`">
                    <g-link
                        :to="$tp(page.node.path)"
                        >
                        {{ page.node.title }}
                    </g-link>
                </li>
            </ul>
            <language-selector />
        </div>
    </nav>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector'

export default {
  data() {
    return {
      logo: require("../../static/logo.png"),
      settings: require("../../data/theme.json"),
    };
  },
  components: {
    LanguageSelector,
  },
  props: ["pages"],

};
</script>