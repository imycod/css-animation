<template>
  <div class="container">
    <div
      :class="`common wrapper${index} center bd`"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="content">this is content</div>
      <div
        class="footer bd"
        :class="[index == 0 && 'center', index == 1 && 'text-center']"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "@/utils/store.js";

export default {
  name: "normal-transition-demo1",
  setup() {
    const state = useStore(import.meta.url);
    return {
      list: state.list,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  .common {
    width: 300px;
    height: 500px;
    position: relative;
    .footer {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 15%;
      transition: all 0.3s;
    }
  }
  .wrapper0 {
    &:hover .footer {
      height: 100%;
    }
  }
  .wrapper1 {
    .footer {
      position: absolute;
      bottom: -50px;
      width: 100%;
      height: 20%;
      transition: all 0.3s;
    }
    &:hover .footer {
      bottom: 0px;
    }
  }
}
</style>