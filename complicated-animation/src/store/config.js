
import config from "@/config/index.js"

import { defineStore } from 'pinia'
 
export  const useConfigStore = defineStore({
  id: 'config', // id必填，且需要唯一
  state: () => {
    return {
        config
    }
  }
})
 