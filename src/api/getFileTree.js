export default async function getFileTree() {
    return await fetch("http://127.0.0.1:8081").then(res => res.json());
}