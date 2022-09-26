const normal = import.meta.globEager('./normal-transition/*.vue')
const elastic = import.meta.globEager('./elastic-animation/*.vue')
const perspective = import.meta.globEager('./perspective/*.vue')
console.log(normal);

class LoaderComponents {
    componentList = []
    constructor() {
        this.init()
    }
    async init() {
        const files = Object.assign(normal, elastic, perspective)
        console.log(files);
        Object.keys(files).forEach((c) => {
            const component = files[c]?.default
            this.componentList.push({ name: component.name, sfc: component })
        })
    }
}
const componentList = new LoaderComponents().componentList

export default componentList

// ————————————————
// 版权声明：本文为CSDN博主「QH~LYY」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_41551266/article/details/121000968