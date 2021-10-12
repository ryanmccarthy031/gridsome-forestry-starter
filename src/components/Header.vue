<template>
    <header class="shadow bg-base-200 drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> 
        <div class="flex flex-col drawer-content">
            <div class="w-full navbar bg-base-300">
                <div class="w-20 lg:w-40 flex-none">
                    <g-link :to="$tp('/')">
                        <img
                            src="../../static/logo.png"
                            :alt="settings.site_name" />
                    </g-link>
                </div>
                <nav class="flex-1 hidden lg:block">
                    <ul class="menu horizontal">
                        <li
                            class="flex-1 px-2 mx-2"
                            v-for="(page, index) in pages"
                            :key="`page-${index}`">
                            <g-link
                                :to="$tp(page.node.path)"
                                >
                                {{ page.node.title }}
                            </g-link>
                        </li>
                    </ul>
                </nav>
                <div class="flex-1 px-2 mx-2 hidden lg:block">
                    <select 
                        class="select select-bordered w-full max-w-xs"
                        v-model="language">
                        <option disabled="disabled" selected="selected">Choose a language</option> 
                        <option
                            v-for="(lang, index) in availableLocales"
                            :key="`language-${index}`"
                            :value="lang">
                            {{ $t(lang) }}
                        </option>
                    </select>
                </div>
                <div class="flex-1 lg:hidden grid">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost justify-self-end">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                </div>
            </div>
        </div>
        <nav class="drawer-side">
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
                <select 
                    class="select select-bordered w-full min-w-min max-w-xs"
                    v-model="language">
                    <option disabled="disabled" selected="selected">Choose a language</option> 
                    <option
                        v-for="(lang, index) in availableLocales"
                        :key="`language-${index}`"
                        :value="lang">
                        {{ $t(lang) }}
                    </option>
                </select>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../../static/logo.png"),
      settings: require("../../data/theme.json"),
      selectedLanguage: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales
    };
  },
  props: ["pages"],
  computed: {
    language: {
      get() {
        return this.selectedLanguage;
      },
      set(val) {
        this.$i18n.locale = val;
        this.selectedLanguage = val;

        if (this.$route.path === `/${val}/`) return;
        this.$router.push({
          path: this.$tp(this.$route.path, val, true)
        });
      }
    }
  }
};
</script>