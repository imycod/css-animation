import { defineAsyncComponent, defineComponent } from 'vue'
// console.log(`${import.meta.env.VITE_APP_BASE_URL}/src/components`);

class LoaderComponents {
    componentList = []
    constructor() {
        this.init()
    }
    async init() {
        const modules = import.meta.glob('../../components/**/*.vue')
        for (const path in modules) {
            const len = path.split('/').length
            // const componentName = path
            //     .split('/')
            //     .pop()
            //     ?.replace(/\.\w+$/, '')
            const component = defineAsyncComponent(modules[path])
            this.componentList.push({ name: path.split('/')[len - 2] + '-' + path.split('/')[len - 1].split('.')[0], sfc: { name: path.split('/')[len - 1], ...component } })
        }
    }
}
const componentList = new LoaderComponents().componentList

export default componentList

// ————————————————
// 版权声明：本文为CSDN博主「QH~LYY」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_41551266/article/details/121000968