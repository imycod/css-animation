import { storeToRefs } from "pinia";
import { useConfigStore } from "@/store/config.js";
import { filePathNameMatchStoreState } from "@/utils/file.js";

export function useStore(url) {
    const configStore = useConfigStore();
    const { config } = storeToRefs(configStore);
    const state = filePathNameMatchStoreState(config, url);
    return state
}