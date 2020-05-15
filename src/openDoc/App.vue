<template>
  <div id="app">
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <a-layout>
      <a-layout-header class="box-layout-header clear">
        <img src="doc/assets/icon_float_btn.png" />
        <span class="box-layout-title">云玩盒子</span>
        <a-tabs defaultActiveKey="1" :activeKey="activeKey" @change="onchange">
          <a-tab-pane tab="服务端" key="1"> </a-tab-pane>
          <a-tab-pane tab="微信H5端" key="2" forceRender> </a-tab-pane>
        </a-tabs>
      </a-layout-header>
      <ServerDoc v-if="activeKey === '1'" />
      <H5Doc v-else />
    </a-layout>
  </div>
</template>

<script>
import H5Doc from "doc/components/H5Doc.vue";
import ServerDoc from "doc/components/ServerDoc";
export default {
  name: "App",
  components: {
    H5Doc,
    ServerDoc
  },
  data() {
    return {
      activeKey: "1"
    };
  },
  methods: {
    onchange(key) {
      this.activeKey = key;
    }
  }
};
</script>

<style lang="less">
@nav-height: 80px;
@nav-background: #393d49;
@nav-padding: 16px;
@nav-color-active: #5fb878;
body {
  font-size: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: white;
  height: 100%;
}
.ant-tabs-nav-container {
  font-size: 18px;
}
.ant-layout-header {
  text-align: center;
  height: auto;
}
.ant-layout-header {
  width: 100%;
  border-bottom: 1px solid #404553;
  background-color: @nav-background;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  max-width: 100%;
}

.clear {
  clear: both;
}

.box-layout-header {
  img {
    width: @nav-height;
    height: @nav-height;
    float: left;
    display: block;
  }
}
.box-layout-title {
  float: left;
  color: white;
  font-size: 28px;
  margin-left: @nav-padding;
  line-height: @nav-height;
}

.ant-tabs {
  height: @nav-height;
}
.ant-tabs-nav .ant-tabs-tab {
  height: @nav-height;
  color: #f0f1f2;
  line-height: @nav-height - @nav-padding*2;
}
.ant-tabs-nav-wrap {
  background-color: @nav-background;
}
.ant-tabs-nav .ant-tabs-tab-active,
.ant-tabs-nav .ant-tabs-tab:hover {
  color: @nav-color-active;
}
.ant-tabs-nav-scroll::selection {
  background-color: @nav-color-active;
}
.ant-tabs-ink-bar {
  background: @nav-color-active;
  height: 5px;
}
.box-layout-container {
  width: 1280px;
  margin: 0 auto;
}
</style>
