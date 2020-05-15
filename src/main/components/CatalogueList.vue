<template>
  <div class="layout-cart">
    <catalogue-item></catalogue-item>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CatalogueItem from "main/components/CatalogueItem.vue";

@Component({
  components: {
    CatalogueItem
  }
})
export default class CatalogueList extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .layout-cart{
   padding: @padding-layout 0;
  }
</style>
