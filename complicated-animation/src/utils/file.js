import { hypname } from "@/utils/varible.js"

export function filePathNameMatchStoreState(config, str) {
    let arr = str.match(/\/components(\S*)\/*.vue/)
    let url = arr[1].slice(1)
    const pkey = url.split('/')[0]
    const ckey = url.split('/')[1]
    const list = config.value[hypname(pkey)][ckey]
    return list
}