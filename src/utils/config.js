import {useStore} from "@/utils/store.js";
import {useConfigStore} from "@/store/config.js";

export function useConfigList(url) {
    const configStore = useConfigStore();
    const state = useStore(url, configStore);
    return state.list
}
