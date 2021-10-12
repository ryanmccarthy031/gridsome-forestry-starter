<template>
    <div>
        <h1 v-html="settings.hero_title" />
        <h2 
          v-if="$i18n.locale.toString()==='en-US'" v-html="settings.english_subtitle" />
        <h2 
          v-if="$i18n.locale.toString()==='es-ES'" v-html="settings.subtítulo_en_español" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>