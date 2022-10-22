<template>
  <div class="common-layout">
    <ul class="navigation">
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
import {storeToRefs} from "pinia";

import {useConfigStore} from "@/store/config.js";

const configStore = useConfigStore();
const {config} = storeToRefs(configStore);

const router = useRouter()

function jumpToEffect(item) {
  router.push(item.path)
}
</script>

<style lang="scss" scoped>
.common-layout {
  .navigation { // ul > li
    list-style: none;
    padding-left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    overflow: hidden;

    li {
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      position: relative;
      height: 30px;

      &::before {
        content: "";
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 2px;
        border-radius: 3px;
        background: #333;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
        transform-origin: right;
      }

      &:hover::before {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
}
</style>
