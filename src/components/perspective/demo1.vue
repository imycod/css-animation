<template>
    {{list}}
</template>

<script>
import {useStore} from "@/utils/store.js"
export default {
  name: "perspective-demo1",
  setup() {
    const state = useStore(import.meta.url);
    return {
      list: state.list,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>