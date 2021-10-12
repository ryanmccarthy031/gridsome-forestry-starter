<template>
    <header class="shadow bg-base-200">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> 
        <div class="flex flex-col">
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
                    <language-selector />
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
                <language-selector />
            </div>
        </nav>
    </header>
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