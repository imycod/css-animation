<template>
  {{ list }}
</template>

<script>
import { useStore } from "@/utils/store.js";
import { useConfigStore } from "@/store/config.js";
export default {
  name: "perspective-demo1",
  setup() {
    const configStore = useConfigStore();
    const state = useStore(import.meta.url,configStore);
    return {
      list: state.list,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>