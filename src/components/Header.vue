<template>
    <header class="header" :class="{sticky: $route.path === '/'}">
        <div class="container">
            <div class="left">
                <g-link :to="{ name: 'home' }" class="home-link">
                    <img 
                        src="../../static/logo.png"
                        :alt="settings.site_name" 
                        class="logo"
                    />
                </g-link>
            </div>
            <nav class="nav right">
                <g-link
                    class="nav__link" 
                    v-for="page in $static.data.edges" 
                    :key="page.node.id"
                    :to="page.node.path">
                    {{ page.node.title }}
                </g-link>
            </nav>
            <div>
                <select
                    v-model="language"
                    name="language" 
                    id="language">
                    <option
                        v-for="(lang, index) in languages"
                        :key="`language-${index}`"
                        :value="lang.id">{{ lang.name }}</option>
                </select>
            </div>
        </div>
    </header>
</template>

<static-query>
query {
    languages: allLanguage {
        edges {
            node {
                id
                short
                name
            }
        }
    },
    data: allMainPage {
        edges {
            node {
                id
                path
                title
            }
        }
    }
}
</static-query>

<script>
export default {
    data() {
        return {
            logo: require("../../static/logo.png"),
            settings: require("../../data/theme.json"),
            selectedLanguage: this.$i18n.locale.toString(),
        }
    },
    computed: {
        languages () {
            const languages = []
            for (let i=0; i<this.$static.languages.edges.length; i++) {
                languages.push(this.$static.languages.edges[i].node)
            }
            return languages
        },
        langauges: {
            get () {
                return this.selectedLanguage
            },
            set (val) {
                this.$i18n.locale = val
                this.$router.push({
                    path: this.$tp(this.$route.path, val, true)
                })
                this.selectedLanguage = val
            },
        }
    },
    methods: {
        findLanguageById (id) {
            return this.languages.find(lang=>{
                return lang.id.localeCompare(id, undefined, {sensitivity: 'base'}) === 0 ||
                    lang.short.localeCompare(id, undefined, {sensitivity: 'base'}) === 0
            })
        }
    },
    mounted () {    
        const defaultLang = this.findLanguageById(navigator.language)
        if (defaultLang) return this.language = defaultLang.id
        else {
            for (let i=0; i<navigator.languages.length; i++) {
                const lang = this.findLanguageById(navigator.languages[i])
                if (lang) return this.language = lang.id
            }
        }
        this.language = 'en-us'
    },
}
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
