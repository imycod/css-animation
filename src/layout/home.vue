<template>
  <div class="common-layout">
    {{ menus }}
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { useMenuStore } from "@/store/menu.js";

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const menusStore = useMenuStore();
menusStore.getMenus();
const { menus } = storeToRefs(menusStore);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
</style>