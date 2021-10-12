<template>

    <header class="shadow bg-base-200 drawer h-52">
        <div>
            <g-link :to="$tp('/')">
                <img
                    src="../../static/logo.png"
                    :alt="settings.site_name"
                    class="flex-none" />
            </g-link>
        </div>
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> 
        <div class="flex flex-col drawer-content">
            <div class="w-full navbar bg-base-300">
                <nav class="flex-none hidden lg:block">
                    <ul class="menu horizontal">
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
                </nav>
                <div class="flex-1 px-2 mx-2">
                    <select v-model="language">
                        <option
                            v-for="(lang, index) in availableLocales"
                            :key="`language-${index}`"
                            :value="lang">
                            {{ $t(lang) }}
                        </option>
                    </select>
                </div>
                <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
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
            <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
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
            <select v-model="language">
                <option
                    v-for="(lang, index) in availableLocales"
                    :key="`language-${index}`"
                    :value="lang">
                    {{ $t(lang) }}
                </option>
            </select>
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

<style scoped>
.header {
  position: relative;
  height: 6rem;
  z-index: 10;
}
.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.header > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.home-link {
  text-decoration: none;
}
.logo {
  height: 8rem;
}
.site-name {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
}
.nav > * {
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border 0.15s;
}
.nav > *:last-of-type {
  margin: 0;
}
.nav > *:hover {
  border-color: inherit;
}
.nav > .active {
  border-color: inherit;
}
</style>
