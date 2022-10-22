import { defineStore } from 'pinia'
import { showTooltip } from '@/utils/tip.js'
import { getFileTree } from "@/api/layout.js"

export const useMenuStore = defineStore({
    id: 'menu', // id必填，且需要唯一
    state: () => {
        return {
            menus: [],
        }
    },
    actions: {
        async getMenus() {
            try {
                const res = await getFileTree()
                let menus = []
                Object.keys(res.childDir).forEach(key => {
                    res.childDir[key].childFiles.forEach(childFile => {
                        menus.push({
                            [key]: [
                                { name: childFile.short }
                            ]
                        })
                    })
                })
                this.menus = menus
                showTooltip(`Welcome back ${'menus'}!`)
            } catch (error) {
                showTooltip(error)
                // 让表单组件显示错误
                return error
            }
        }
    },
})
