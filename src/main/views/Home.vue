<template>
  <div class="home">
    <HomeBackground />
    <catalogue-list></catalogue-list>
  </div>
</template>

<script lang="ts">
// main is an alias to /src
import HomeBackground from "main/components/HomeBackground.vue";
import CatalogueList from "main/components/CatalogueList.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    HomeBackground,
    CatalogueList
  }
})
export default class Home extends Vue {}
</script>
