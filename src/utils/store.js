import { storeToRefs } from "pinia";
import { filePathNameMatchStoreState } from "@/utils/file.js";

export function useStore(url,store) {
    const { config } = storeToRefs(store);
    const state = filePathNameMatchStoreState(config, url);
    return state
}