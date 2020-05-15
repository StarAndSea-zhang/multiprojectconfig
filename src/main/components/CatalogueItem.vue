<template>
  <div class="p-catalogue">
    <div class="p-catalogue__cover">
      <img src="~main/assets/images/home-background.jpg"/>
    </div>
    <div class="p-catalogue__text">
      <p class="p-catalogue__time">
        五月 15日, 2019
      </p>
      <h3 class="p-catalogue__title">
        <a href="/2019/05/15/今天我又在焦虑什么/" title="今天我又在焦虑什么">
          <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
        </a>
      </h3>
      <p class="p-catalogue__content">
        时间过得好快啊，上一次写日记好像还是一个月前，这一个月又发生了太多事情
        首先说一下，为什么突然更新？原因还是受到了闺蜜的刺激，发现她生长得好快，思想，学习...
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CatalogueItem extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .p-catalogue{
    margin: 50px auto;
    /*文章封面*/
    &__cover{
      width: 545px;
      height: 340px;
      img{
        .wrap-img
      }
    }
  }
</style>
