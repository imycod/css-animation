import { hypname } from "@/utils/varible-name-help.js"

export function filePathNameMatchStoreState(config, url) {
    // const math = url.match(/(?(\/components*?).*?(?(\/\*\.vue))/g)
    const pkey=url.split('/')[0]
    const ckey=url.split('/')[1]
    const list = config.value[hypname(pkey)][ckey]
    return list
}