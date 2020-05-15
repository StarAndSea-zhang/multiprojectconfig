<template>
  <div class="p-home">
    <div class="p-home__background"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HomeBackground extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.p-home {
  &__background {
    .fix-background;
    width: 100vw;
    height: 100vh;
    background-image: url("~main/assets/images/home-background.jpg");
  }
}
</style>
