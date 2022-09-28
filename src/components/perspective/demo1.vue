<template>
  <div class="wrapper center bd">
    <img class="img" src="@/assets/images/icon1.png" alt="" />
  </div>
</template>

<script>
import { useStore } from "@/utils/store.js";
import { useConfigStore } from "@/store/config.js";
export default {
  name: "perspective-demo1",
  setup() {
    const configStore = useConfigStore();
    const state = useStore(import.meta.url, configStore);
    console.log("state----", state);
    return {
      list: state.list,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 180px;
  height: 300px;

  .img {
    width: 150px;
    height: 150px;
    transition: 0.6s;
    transform-style: preserve-3d;
    perspective: 1000;
  }
  &:hover {
    cursor: pointer;
    .img {
      transform: translateZ(120px) !important;
    }
  }
}
</style>