const BASE_URL = 'https://jualuc1.dreamhosters.com/wp-json';

export const posts = () => {
    return fetch(`${BASE_URL}/wp/v2/posts`).then(response => response.json()).then(data => console.log(data))
}

export const users = () => {
    return fetch(`${BASE_URL}/wp/v2/users`).then(response => response.json()).catch(error => console.log(error))
}

export const media = () => {
    return fetch(`${BASE_URL}/wp/v2/media/`).then(response => response.json()).catch(error => console.log(error))
