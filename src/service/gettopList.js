export default function getTop(){
    return fetch("https://api.jikan.moe/v4/top/anime").then(data => data.json())

}