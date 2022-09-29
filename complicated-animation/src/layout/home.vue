<template>
  <div class="common-layout">
    <ul>
      <li v-for="(item, idx) in config.menus" @click="jumpToEffect(item)">
        {{ item.name }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup>
// todo...  尝试 1.引入element-plus-menus 2.node自动读取components生成tree目录关联router
import {useRouter} from "vue-router"
// import { storeToRefs } from "pinia";
// import { useMenuStore } from "@/store/menu.js";

// import {
//   Document,
//   Menu as IconMenu,
//   Location,
//   Setting,
// } from "@element-plus/icons-vue";

// const menusStore = useMenuStore();
// menusStore.getMenus();
// const { menus } = storeToRefs(menusStore);

// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };

// 暂且用写死的
import { storeToRefs } from "pinia";

import { useConfigStore } from "@/store/config.js";
const configStore = useConfigStore();
const { config } = storeToRefs(configStore);

const router=useRouter()
function jumpToEffect(item) {
  router.push(item.path)
}
</script>

<style lang="scss" scoped>

</style>