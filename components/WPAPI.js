const BASE_URL = 'https://jualuc1.dreamhosters.com/wp-json';

export const posts = () => {
    return fetch(`${BASE_URL}/wp/v2/posts`).then(response => response.json()).then(data => console.log(data))
}

export const users = () => {
    return fetch(`${BASE_URL}/wp/v2/users`).then(response => response.json()).then(data => console.log(data))
}

export const media = () => {
    return fetch(`${BASE_URL}/wp/v2/media/`).then(response => response.json()).catch(error => console.log(error))
}

export const comments = () => {
    return fetch(`${BASE_URL}/wp/v2/comments`).then(response => response.json()).then(data => console.log(data))
}

export const categories = () => {
    return fetch(`${BASE_URL}/wp/v2/categories`).then(response => response.json()).then(data => console.log(data))
}

export const search = () => {
    return fetch(`${BASE_URL}/wp/v2/search`).then(response => response.json()).then(data => console.log(data))
}