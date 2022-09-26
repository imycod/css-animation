<template>
  <div class="wrapper center bd">
    <div class="content">this is content</div>
    <div class="footer center bd">{{ config }}</div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useConfigStore } from "@/store/config.js";
import { filePathNameMatchStoreState } from "@/utils/file-match-help.js";

export default {
  name: "normal-transition-demo1",
  setup() {
    const configStore = useConfigStore();
    const { config } = storeToRefs(configStore);
    const state = filePathNameMatchStoreState(config, import.meta.url);
    return {
      list: state.list,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 300px;
  height: 500px;
  position: relative;
  .content {
  }
  .footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 15%;
    transition: all 0.3s;
  }
  &:hover .footer {
    height: 100%;
  }
}
</style>