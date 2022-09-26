export function hypname(font) {
    return font.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}