import getFileTree from "@/api/getFileTree.js";
// console.log(`${import.meta.env.VITE_APP_BASE_URL}/src/components`);

class LoaderComponents {
    componentList = []
    constructor() {
        this.init()
    }
    async init() {
        const res = await getFileTree()
        Object.keys(res.childDir).forEach(key => {
            res.childDir[key].childFiles.forEach(childFile=>{
                this.componentList.push({ name: key+'-'+childFile.short.split('.')[0], sfc: childFile.files.result })
            })
        })
        console.log(this.componentList);
    }
}
const componentList = new LoaderComponents().componentList

export default componentList

// ————————————————
// 版权声明：本文为CSDN博主「QH~LYY」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_41551266/article/details/121000968